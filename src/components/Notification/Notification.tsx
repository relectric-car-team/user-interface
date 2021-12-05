import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { notifications } from '../../app/reducersindex';
import './Notification.scss';
import { notifActions } from './NotificationStore';

// TODO: you need to make it so that the notification:
// - obeys the light/dark mode settings & make CSS more uniform
// - add links to router ? or support for this -> will do an example? need a good example. maybe make a fake system notification.
// - stacking notifications -> not sure if this is a good idea, since it might take up a lot of the screen. (even on iphone only 1 shows at a time).
//      -> considering pre-emption of older notifications
//          -> will need this: https://reactjs.org/docs/animation.html
// - notif categories -> WIP (ie: make more types)
// - notification panel (see history) -> future? draft something up in the morning & show during meeting tomorrow.
//      -> solves problem of having sticky notifications clog the screen

// sticky notification / alerts -> stuff like battery / charge that should persist until cleared
//  -> use maxheap to track by priority
//      -> only ever want one to show at a time, since having multiple would probably render the UI pretty unusable (& potentially distract the driver)
//  -> regular notifications pre-empt stickies (maybe display both?)
//  -> after regular notification expire, highest priority sticky is selected.
//  -> must be explicitly cleared (x icon / pressed)
//  -> next highest priority (if any) is displayed

const DEFAULT_NOTIFICATION_DURATION = 1.5; // seconds

export type Notif = MusicNotif | EmptyNotif; // UNION with other notifications

/**
 * The interface for a notification. Every notification must implement renderNotif
 * which returns a renderable notification element.
 */
export interface INotif {
    duration: number;
    renderNotif(onDismiss: () => void): JSX.Element;
}

/**
 * Use this as a template for future notification types.
 * See the MusicNotif class for an example.
 *
 * NOTE: Make !! absolutely sure !! you union your new type in the Notif type at the start of this file, or your notification will cause issues!
 *
 */
export class EmptyNotif implements INotif {
    duration: number;
    constructor(duration?: number) {
        this.duration = duration ? duration : DEFAULT_NOTIFICATION_DURATION;
    }
    renderNotif(onDismiss: () => void): JSX.Element {
        onDismiss(); // suppress warning
        throw new Error('Method not implemented.');
    }
}

/**
 * The notification used for playing / pausing music.
 * This is a great example for building off of the current code to add notifications to other parts.
 */
export class MusicNotif implements INotif {
    play: boolean;
    img: string;
    title: string;
    artist: string;
    duration: number;
    constructor(img: string, title: string, artist: string, play: boolean, duration?: number) {
        this.img = img;
        this.title = title;
        this.artist = artist;
        this.play = play;
        this.duration = duration ? duration : DEFAULT_NOTIFICATION_DURATION;
    }
    renderNotif(onDismiss: () => void): JSX.Element {
        const anim = {
            animation: `inandout ${this.duration}s ease-in-out`,
        };

        return (
            <div className="notif-container">
                <div id="notif" style={anim}>
                    <img className="notif-icon" src={this.img} />
                    <div className="notif-msg">
                        Now {this.play ? 'playing' : 'pausing'} <span className="text-highlight">{this.title}</span> by
                        <span className="text-highlight"> {this.artist}</span>
                    </div>
                    <button className="notif-dismiss" onClick={onDismiss}>
                        Dismiss
                    </button>
                </div>
            </div>
        );
    }
}

const start: Notif = new MusicNotif('', '', '', false);

const Notification: React.FC = () => {
    const notifs = useSelector(notifications);
    const [notif, setNotif] = useState({ child: start as Notif });
    const [show, setShow] = useState(false); // timeout -> next notif if any

    const onDismiss = () => {
        console.log('Dismiss the notification');
    };

    const dispatch = useDispatch();
    useEffect(() => {
        /**
         * How this works:
         *
         *  notifications in state is basically a queue (FIFO) of notifications registered to the system
         *
         *  When a notification is first registered, it skips to the inner else statement.
         *  Then, the notification is set as the active notification, and is set to be rendered in the dom (via show)
         *
         *  setTimeout runs the notification expiry code:
         *      -> if future notifications exist, triggers them after the notification completes
         *          -> sets next notification as active
         *          -> removes the previous (already displayed) notification from state
         *          -> toggles show to make sure DOM recognizes CSS animation needs to play again
         *       -> else, simply removes the displayed notification from state
         *
         * You can think of this as simply checking to see if another notification is in line, and passing it the "baton" if there is.
         *
         * We don't want anything to happen when a notification is already being displayed (show is true), since all the logic for
         * "passing it on" to the next notification is handled in setTimeout
         */
        if (notifs.length != 0) {
            if (show) {
                // if a notif is showing, don't do anything (handled in timeout)
            } else {
                // new notification!
                setNotif(notifs[0]); // Notifications will be organized like a queue
                setShow(true); // Set the notification to be rendered (enters DOM -> CSS animation plays)
                setTimeout(() => {
                    // the notification being displayed expires
                    // check if there is a new one to display!
                    setShow(false);
                    if (notifs.length > 1) {
                        // more than just the currently displayed notification is shown!
                        setNotif(notifs[1]); // update the notification to next in queue
                        dispatch(notifActions.handleNotification()); // remove the one that was just displayed
                        setShow(true);
                    } else {
                        // if no new notification, empty the queue so the previous one isn't displayed again!
                        dispatch(notifActions.handleNotification()); // remove the one that was just displayed
                    }
                }, notif.child.duration * 1000); // duration (s) * 1000 = duration in ms
            }
        }
    }, [notifs]);
    return show ? notif.child.renderNotif(onDismiss) : null;
};

export default Notification;
