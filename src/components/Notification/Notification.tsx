import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { notifications } from '../../app/reducersindex';
import './Notification.scss';

// TODO: you need to make it so that the notification:
// - obeys the light/dark mode settings & make CSS more uniform
// - change integration to not glitch with multiple notifications
//      - keep a collection of components which are rendered?
// - add links to router ? or support for this
// - stacking notifications
// - sticky notifications
// - notification panel (see history)

export type Notif = MusicNotif; // UNION with other notifications

/**
 * The interface for a notification. Every notification must implement renderNotif
 * which returns a renderable notification element.
 */
export interface INotif {
    renderNotif(): JSX.Element;
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
    constructor(img: string, title: string, artist: string, play: boolean) {
        this.img = img;
        this.title = title;
        this.artist = artist;
        this.play = play;
    }
    renderNotif(): JSX.Element {
        return (
            <div className="notif-container">
                <div id="notif">
                    <img className="notif-icon" src={this.img} />
                    <div className="notif-msg">
                        Now {this.play ? 'playing' : 'pausing'} <span className="text-highlight">{this.title}</span> by
                        <span className="text-highlight"> {this.artist}</span>
                    </div>
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

    // select an icon to show based on type?

    useEffect(() => {
        // DESIGN:
        // all notifications should be collected in linear order.
        // only one should show at a time.
        // playing a new notification should not interrupt previous
        // when a notification expires, the next one will be triggered
        //  - need to trigger initially
        //  - on expiry, need to trigger next (if it exists) -> "DAISY CHAIN" ( -> dispatch removal from start)

        // I believe this is called every time a notification action is registered
        if (notifs.length == 0) {
            setNotif(notifs[notifs.length - 1]); // Notifications will be organized like a queue
            setShow(true); // need to modify so that all notifications are shown / pre-empty one another properly
            setTimeout(() => {
                // need to remove the notification from collection to be rendered, not just nix it like this
                if (notifs.length == 1) {
                    // if there's no followup notification, terminate
                    setShow(false);
                } else if (notifs.length > 1) {
                    // more than one. stop, update and restart next.
                }
            }, 1500); // 1 sec timeout (see CSS animation in notif)
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
          notif.child.renderNotif()
        : null;
};

// JUST CREATE AN ARRAY OF THE ABOVE ORIGINAL -> each notif has own state! PERFECT!!!!

export default Notification;
