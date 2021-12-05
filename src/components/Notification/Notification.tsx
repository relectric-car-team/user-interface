import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { notifications } from '../../app/reducersindex';
import './Notification.scss';
import { notifActions } from './NotificationStore';
import { IonIcon } from '@ionic/react';

// TODO: you need to make it so that the notification:
// - obeys the light/dark mode settings & make CSS more uniform
// - add links to router ? or support for this -> will do an example? need a good example. maybe make a fake system notification.
// - stacking notifications -> WIP
// - notif categories -> WIP
// - notification panel (see history) -> future
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

// map all items from alerts into an IonToast
const Notification: React.FC = () => {
    const notifs = useSelector(notifications);
    const [notif, setNotif] = useState({ child: start as Notif });
    const [show, setShow] = useState(false); // timeout -> next notif if any

    const onDismiss = () => {
        console.log('Dismiss the notification');
    };

    // select an icon to show based on type?
    const dispatch = useDispatch();
    useEffect(() => {
        // DESIGN:
        // all notifications should be collected in linear order.
        // only one should show at a time.
        // playing a new notification should not interrupt previous
        // when a notification expires, the next one will be triggered
        //  - need to trigger initially
        //  - on expiry, need to trigger next (if it exists) -> "DAISY CHAIN" ( -> dispatch removal from start)

        // I believe this is called every time a notification action is registered
        if (notifs.length != 0) {
            if (show) {
                // if a notif is showing, don't do anything (handled in timeout)
            } else {
                // new notification!
                setNotif(notifs[0]); // Notifications will be organized like a queue
                setShow(true); // need to modify so that all notifications are shown / pre-empty one another properly
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
                        dispatch(notifActions.handleNotification()); // remove the one that was just displayed
                    }
                }, notif.child.duration * 1000); // duration (s) * 1000 = duration in ms
            }
        }
    }, [notifs]);
    return show
        ? // <IonToast
          //     isOpen={show}
          //     onDidDismiss={() => setShow(false)}
          //     duration={200}
          //     position={'top'}
          //     message={notif.message}
          // ></IonToast>
          notif.child.renderNotif(onDismiss)
        : null;
};

// JUST CREATE AN ARRAY OF THE ABOVE ORIGINAL -> each notif has own state! PERFECT!!!!

export default Notification;
