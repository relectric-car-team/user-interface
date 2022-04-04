import { combineReducers } from 'redux';
import routerReducer from '../features/Routing/RouterStore';
import climateReducer, { Direction } from '../features/Climate/ClimateStore';
import darkModeReducer from '../features/DarkMode/DarkModeStore';
import { RootState } from './store';
import { Pages } from '../Models/Enums';

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
});

/**  Selectors for various redux states used throughout the UI.
 * Selectors have to be written to use states from stored redux values,
 * and must be exported from the highest reducer their respective
 * slices are contained in before the app store.
 */

export const selectRouter = (state: RootState): Pages => state.routerReducer.page;

export const selectSliderValue = (state: RootState): number => state.climateReducer.sliderValue;

export const selectClimateColour = (state: RootState): string => state.climateReducer.climateColour;

export const selectDisplayedTemp = (state: RootState): number => state.climateReducer.displayedTemp;

export const selectTempSymbol = (state: RootState): string => state.climateReducer.temperatureSymbol;

export const selectIsCelsius = (state: RootState): boolean => state.climateReducer.isCelsius;

export const selectDarkModeActive = (state: RootState): boolean => state.darkModeReducer.darkModeActive;

export const selectDisplayModePreference = (state: RootState): string => state.darkModeReducer.preference;

export const selectFanDirection = (state: RootState): Direction => state.climateReducer.fanDirection;
