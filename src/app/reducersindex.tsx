import { combineReducers } from 'redux';
import routerReducer from '../features/Routing/RouterStore';
import climateReducer from '../features/Climate/ClimateStore';
import { RootState } from './store';
import { Pages } from '../Models/Enums';
//import { Direction } from '../features/Climate/ClimateStore';

export default combineReducers({
    routerReducer,
    climateReducer,
});

export const selectRouter = (state: RootState): Pages => state.routerReducer.page;

export const selectSliderValue = (state: RootState): number => state.climateReducer.sliderValue;

export const selectClimateColour = (state: RootState): string => state.climateReducer.climateColour;
