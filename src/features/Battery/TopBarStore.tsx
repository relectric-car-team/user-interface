import { createSlice } from '@reduxjs/toolkit';

/**
 * Enums for consistent identification of the current charge
 * status of the battery.
 *
 * In the future, these will be used to help identify information
 * recieved from electrical data.
 */
export enum BatteryStatus {
    Full = 'Full',
    Empty = 'Empty',
    Partial = 'Partial',
    Charging = 'Charging',
}

interface BatteryState {
    batteryPercent: number;
    batteryStatus: BatteryStatus;
    isCharging: boolean;
}

const initialState: BatteryState = {
    batteryPercent: 100,
    batteryStatus: BatteryStatus.Full,
    isCharging: false,
};

function batteryPercentToStatus(chargePercent: number) {
    if (chargePercent > 100 || chargePercent < 1) {
        return BatteryStatus.Empty;
    } else if (chargePercent > 84) {
        return BatteryStatus.Full;
    } else {
        return BatteryStatus.Partial;
    }
}

export const slice = createSlice({
    name: 'battery',
    initialState,
    reducers: {
        setCharging: (state, action) => {
            state.isCharging = action.payload;
            state.batteryStatus = BatteryStatus.Charging;
        },
        updatePercent: (state, action) => {
            state.batteryPercent = action.payload;
            if (state.isCharging == false) {
                state.batteryStatus = batteryPercentToStatus(state.batteryPercent);
            } else {
                state.batteryStatus = BatteryStatus.Charging;
            }
        },
    },
});

export const { updatePercent, setCharging } = slice.actions;

export default slice.reducer;
