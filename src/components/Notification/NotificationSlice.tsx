import { createSlice } from '@reduxjs/toolkit';
import { action } from 'typesafe-actions';
import { Notif } from './Notification';

/**
 * Notification recipe
 */
export interface Notification {
    child: Notif;
}

const NotifSlice = createSlice({
    name: 'notification',
    /**
     * STATE FIELD: an array that holds all notifications whenever a notification action is dispatched
     */
    initialState: {
        notifs: [] as Notification[], // set array type to notifications
    },
    reducers: {
        /**
         * Responds to actions for notifications.
         * Adds a notification action to the notification array every time a notification action is dispatched.
         * @param state R
         * @param action
         */
        spawnNotification: (state, action) => {
            state.notifs.push({
                child: action.payload.child,
            });
        },
        handleNotification: (state) => {
            state.notifs.shift();
        },
    },
});

export const notifActions = NotifSlice.actions;

export default NotifSlice.reducer;
