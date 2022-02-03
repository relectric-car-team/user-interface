import { createSlice } from '@reduxjs/toolkit';

export enum DriveMode {
    SPORT = 'Sport',
    COMFORT = 'Comfort',
    ECO = 'Eco',
    RACE = 'race',
}

export enum DoorsEnum {
    DRIVER = 'driverDoor',
    PASSENGER = 'passengerDoor',
    REARDRIVER = 'rearDriverDoor',
    REARPASSENGER = 'rearPassengerDoor',
    TRUNK = 'trunk',
    FRUNK = 'frunk',
}

export enum TiresEnum {
    FRONTLEFT = 'driverTire',
    FRONTRIGHT = 'passengerTire',
    BACKLEFT = 'rearDriverTire',
    BACKRIGHT = 'rearPassengerTire',
}

interface CarState {
    doorStates: {
        driverDoorOpen: boolean;
        passengerDoorOpen: boolean;
        rearDriverDoorOpen: boolean;
        rearPassengerDoorOpen: boolean;
        trunkOpen: boolean;
        frunkOpen: boolean;
    };

    tirePressure: {
        frontLeft: number;
        frontRight: number;
        backLeft: number;
        backRight: number;
    };

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
        frunkOpen: false,
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
        /**
         * Updates the state of a door in the store.
         * @param state Current redux state.
         * @param action The action to perform, this should have action.payload.door indicating the door to be changed (options are: 'driverDoor', 'passengerDoor',
         *               'rearDriverDoor', 'rearPassengerDoor', 'trunk', 'frunk') but enums are also available for this. The second thing that should be passed in is the new door
         *               state, action.payload.open should either be true or false.
         */
        updateDoors: (state, action) => {
            switch (action.payload.door) {
                case 'driverDoor':
                    state.doorStates.driverDoorOpen = action.payload.open;
                    break;
                case 'passengerDoor':
                    state.doorStates.passengerDoorOpen = action.payload.open;
                    break;
                case 'rearPassengerDoor':
                    state.doorStates.rearPassengerDoorOpen = action.payload.open;
                    break;
                case 'rearDriverDoor':
                    state.doorStates.rearDriverDoorOpen = action.payload.open;
                    break;
                case 'trunk':
                    state.doorStates.trunkOpen = action.payload.open;
                    break;
                case 'frunk':
                    state.doorStates.frunkOpen = action.payload.open;
                    break;
                default:
                    break;
            }
        },

        /**
         * Updates store to reflect current battery percentage.
         * @param state current redux state.
         * @param action the action to perform, this should be action.payload.batteryLevel and should contain the current battery level.
         */
        updateBatteryLevel: (state, action) => {
            // configered to record the last weeks worth of data every 30 mins.
            if (state.batteryLevel.length >= 7 * 24 * 30) {
                state.batteryLevel.shift();
            }

            state.batteryLevel.push(action.payload.batteryLevel);
        },

        /**
         * Updates store to reflect current power draw.
         * @param state current redux state.
         * @param action the action to perform, this should be action.payload.powerDraw and should contain the current powerDraw.
         */
        updatePowerDraw: (state, action) => {
            // configered to record the last weeks worth of data every 30 mins.
            if (state.powerDraw.length >= 7 * 24 * 30) {
                state.powerDraw.shift();
            }

            state.powerDraw.push(action.payload.powerDraw);

            const sum = state.powerDraw.reduce((a, b) => a + b, 0);
            state.averagePowerDraw = sum / state.powerDraw.length;
        },

        /**
         * Updates the current speed in the store.
         * @param state current redux state.
         * @param action the action to perform, this should contain action.payload.speed and should be the speed the car is moving at.
         */
        updateCurrentSpeed: (state, action) => {
            state.currentSpeed = action.payload.speed;
        },

        /**
         * Updates the pressure of a tire in the store.
         * @param state Current redux state.
         * @param action The action to perform, this should have action.payload.tire indicating the tire to be changed (options are: 'drivertire', 'passengertire',
         *               'rearDriverTire', 'rearPassengerTire') but enums are also available for this. The second thing that should be passed in is the new tire
         *               pressure, action.payload.pressure should hold this.
         */
        updateTirePressure: (state, action) => {
            switch (action.payload.tire) {
                case 'driverTire':
                    state.tirePressure.frontLeft = action.payload.pressure;
                    break;
                case 'passengerTire':
                    state.tirePressure.frontRight = action.payload.pressure;
                    break;
                case 'rearPassengerTire':
                    state.tirePressure.backRight = action.payload.pressure;
                    break;
                case 'rearDriverTire':
                    state.tirePressure.backLeft = action.payload.pressure;
                    break;
                default:
                    break;
            }
        },
    },
});

export const { updateDoors } = slice.actions;

export default slice.reducer;
