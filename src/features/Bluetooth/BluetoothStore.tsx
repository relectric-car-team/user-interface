import { createSlice } from '@reduxjs/toolkit';

/*
 * Redux store for bluetooth connections.
 * More member vars to be added once the integration
 * of other audio input connections has been
 * elaborated on
 */
interface BluetoothState {
    bluetoothOn: boolean;
}

const initialState: BluetoothState = {
    bluetoothOn: false,
};

export const slice = createSlice({
    name: 'bluetooth',
    initialState,
    reducers: {
        setBluetooth: (state, action) => {
            state.bluetoothOn = action.payload;
        },
    },
});

export const { setBluetooth } = slice.actions;

export default slice.reducer;
