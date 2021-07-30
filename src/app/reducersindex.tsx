import { combineReducers } from 'redux';
import routerReducer from '../features/Routing/RouterStore';
import climateReducer, { Direction } from '../features/Climate/ClimateStore';
import darkModeReducer from '../features/DarkMode/DarkModeStore';
import { RootState } from './store';
import { Pages } from '../Models/Enums';

export default combineReducers({
    routerReducer,
    climateReducer,
    darkModeReducer,
});

export const selectRouter = (state: RootState): Pages => state.routerReducer.page;

export const selectSliderValue = (state: RootState): number => state.climateReducer.sliderValue;

export const selectClimateColour = (state: RootState): string => state.climateReducer.climateColour;

export const selectDisplayedTemp = (state: RootState): number => state.climateReducer.displayedTemp;

export const selectTempSymbol = (state: RootState): string => state.climateReducer.temperatureSymbol;

export const selectIsCelsius = (state: RootState): boolean => state.climateReducer.isCelsius;

export const selectDarkModeActive = (state: RootState): boolean => state.darkModeReducer.darkModeActive;

export const selectFanDirection = (state: RootState): Direction => state.climateReducer.fanDirection;
