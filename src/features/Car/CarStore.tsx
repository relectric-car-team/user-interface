import { createSlice } from '@reduxjs/toolkit';

export enum DriveMode {
    SPORT = 'Sport',
    COMFORT = 'Comfort',
    ECO = 'Eco',
    RACE = 'race',
}

interface CarState {
    doorStates: {
        driverDoorOpen: boolean;
        passengerDoorOpen: boolean;
        rearDriverDoorOpen: boolean;
        rearPassengerDoorOpen: boolean;
        trunkOpen: boolean;
    };

    tirePressure: {
        frontLeft: number;
        frontRight: number;
        backLeft: number;
        backRight: number;
    };

    /* Note: battery level is one thing, however there is a question on how we should
     *       store past battery level for the utilization graph. This question is mostly
     *       how long should we store the percentage from. Should we store the last week
     *       worth of data while updating the graph maybe once every minute? Should we maybe
     *       store data from the last start? This would prob be the easiest to implement.
     */
    batteryLevel: Array<number>;
    powerDraw: Array<number>;

    driveMode: DriveMode;

    // Used with current battery level to estimate range.
    averagePowerDraw: number;

    currentSpeed: number;
}

const initialState: CarState = {
    doorStates: {
        driverDoorOpen: false,
        passengerDoorOpen: false,
        rearDriverDoorOpen: false,
        rearPassengerDoorOpen: false,
        trunkOpen: false,
    },
    tirePressure: {
        frontLeft: 0,
        frontRight: 0,
        backLeft: 0,
        backRight: 0,
    },
    batteryLevel: [0],
    powerDraw: [0],
    driveMode: DriveMode.COMFORT,
    averagePowerDraw: 0,
    currentSpeed: 0,
};

export const slice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        updateDoors: (state, action) => {
            console.log(state);
            console.log(action);
        },
    },
});
