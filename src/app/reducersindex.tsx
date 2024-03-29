import { combineReducers } from 'redux';
import routerReducer from '../redux-features/Routing/RouterStore';
import climateReducer, { Direction } from '../redux-features/Climate/ClimateStore';
import batteryReducer, { BatteryStatus } from '../redux-features/Battery/BatteryStore';
import bluetoothReducer from '../redux-features/Bluetooth/BluetoothStore';
import darkModeReducer from '../redux-features/DarkMode/DarkModeStore';
import notifReducer, { Notification } from '../components/Notification/NotificationStore';
import auxillarySensorsReducer from '../redux-features/AuxillarySensors/AuxillarySensorStore';
import networkDispatchReducer from '../redux-features/NetworkDispatch/NetworkDispatchStore';
import carReducer from '../features/Car/CarStore';
import { RootState } from './store';
import { Pages } from '../Models/Enums';
import { ISocketMessageTransmittable } from '../Models/Interfaces';

/**
 * Reducer combiner, used to reduce all the smaller 'child' reducers
 * into a singular reducer, for use in the app store (store.tsx).
 *
 * Only one reducer can be passed to the app store, so all used
 * reducers need to be reduced themselves before the app store can
 * utilize them.
 */
export default combineReducers({
    routerReducer,
    climateReducer,
    darkModeReducer,
    batteryReducer,
    bluetoothReducer,
    notifReducer,
    carReducer,
    auxillarySensorsReducer,
    networkDispatchReducer,
});

/**  Selectors for various redux states used throughout the UI.
 * Selectors have to be written to use states from stored redux values,
 * and must be exported from the highest reducer their respective
 * slices are contained in before the app store.
 */

export const selectRouter = (state: RootState): Pages => state.routerReducer.page;

export const selectDisplayedTemp = (state: RootState): number => state.climateReducer.displayedTemp;

export const selectTempSymbol = (state: RootState): string => state.climateReducer.temperatureSymbol;

export const selectTempValue = (state: RootState): number => state.climateReducer.displayedTemp;

export const selectIsCelsius = (state: RootState): boolean => state.climateReducer.isCelsius;

export const selectDarkModeActive = (state: RootState): boolean => state.darkModeReducer.darkModeActive;

export const selectFanDirection = (state: RootState): Direction => state.climateReducer.fanDirection;

export const batteryStatus = (state: RootState): BatteryStatus => state.batteryReducer.batteryStatus;

export const batteryPercent = (state: RootState): number => state.batteryReducer.batteryPercent;

export const isBatteryCharging = (state: RootState): boolean => state.batteryReducer.isCharging;

export const isBluetoothOn = (state: RootState): boolean => state.bluetoothReducer.bluetoothOn;

export const notifications = (state: RootState): Array<Notification> => state.notifReducer.notifs;

export const selectTemperature = (state: RootState): number => state.auxillarySensorsReducer.currentTemperature;

export const selectDispatchSystemsAction = (
    state: RootState,
): ((message: ISocketMessageTransmittable) => void) | undefined => state.networkDispatchReducer.dispatchSystemsAction;

export const doorStates = (
    state: RootState,
): {
    driverDoorOpen: boolean;
    passengerDoorOpen: boolean;
    rearDriverDoorOpen: boolean;
    rearPassengerDoorOpen: boolean;
    trunkOpen: boolean;
} => state.carReducer.doorStates;

export const tirePressure = (
    state: RootState,
): {
    frontLeft: number;
    frontRight: number;
    backLeft: number;
    backRight: number;
} => state.carReducer.tirePressure;

export const batteryLevel = (state: RootState): number[] => state.carReducer.batteryLevel;

export const powerDraw = (state: RootState): number[] => state.carReducer.powerDraw;

export const averagePowerDraw = (state: RootState): number => state.carReducer.averagePowerDraw;

export const currentSpeed = (state: RootState): number => state.carReducer.currentSpeed;
export const selectFanIntensity = (state: RootState): number => state.climateReducer.fanIntensity;
