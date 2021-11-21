import { createSlice } from '@reduxjs/toolkit';
// import { StaticRouter } from 'react-router';

/**
 * Enums for consistent identification of the direction mode selected.
 * Used in this redux slice, as well as Climate.tsx
 */
export enum Direction {
    Upper = 'Upper',
    Lower = 'Lower',
    UpperAndLower = 'UpperAndLower',
    Front = 'Front',
}

/**
 * Interface for ClimateState contains all the variables necessary
 * to save for the climate page to render correctly and store set information.
 */
interface ClimateState {
    celsiusTemp: number;
    displayedTemp: number;
    isCelsius: boolean;
    fanIntensity: number;
    fanDirection: Direction;
    temperatureSymbol: string;
}

/**
 * Initial values for the variables used for the climate page.
 *
 * All variables are selected arbitrarily for demonstration purposes.
 *
 * Later, they can be connected to Systems' code to accurately reflect values
 * that were saved from previous start-ups of the UI, or which are read
 * from the current vehicle conditions.
 */
const initialState: ClimateState = {
    celsiusTemp: 15,
    displayedTemp: 15,
    isCelsius: true,
    fanIntensity: 2,
    fanDirection: Direction.Upper,
    temperatureSymbol: '°C',
};

/**
 * Function for converting a Fahrenheit temperature to Celsius
 * @param fahrenTemp A temperature in Fahrenheit
 * @returns the celsius equivalent of fahrenTemp
 */
function fahrenheitToCelcius(fahrenTemp: number) {
    return ((fahrenTemp - 32) * 5) / 9;
}

/**
 * Function for converting a Celsius temperature to Fahrentheit
 * @param celsiusTemp A temperature in Celsius
 * @returns the Fahrenheit equivalent of celsiusTemp
 */
function celsuisToFahrenheit(celsiusTemp: number) {
    return (celsiusTemp * 9) / 5 + 32;
}

/**
 * Slice for climate redux, containing the reducers needed to
 * correctly modify the currently stored values.
 */
export const slice = createSlice({
    name: 'climate',
    initialState,
    reducers: {
        updateTemperature: (state, action) => {
            if (action.payload === 'increase') {
                state.displayedTemp = state.displayedTemp + 1;
                state.isCelsius
                    ? (state.celsiusTemp = state.displayedTemp)
                    : (state.celsiusTemp = fahrenheitToCelcius(state.displayedTemp));
            } else {
                state.displayedTemp = state.displayedTemp - 1;
                state.isCelsius
                    ? (state.celsiusTemp = state.displayedTemp)
                    : (state.celsiusTemp = fahrenheitToCelcius(state.displayedTemp));
            }
        },
        // Reducer to toggle the current temperature scale between Celsius and Fahrenheit
        switchMeasurement: (state, action) => {
            state.isCelsius = action.payload;
            if (action.payload == true) {
                state.temperatureSymbol = '°C';
                state.displayedTemp = state.celsiusTemp;
            } else if (action.payload == false) {
                state.displayedTemp = celsuisToFahrenheit(state.celsiusTemp);
                state.temperatureSymbol = '°F';
            } else {
                state.temperatureSymbol = 'N/A';
            }
        },
        // Reducer to update the currently stored fan direction, selected from the climate page.
        updateDirection: (state, action) => {
            state.fanDirection = action.payload;
        },
        // Reduer to update the fan intesity, selected from the home page.
        // Not currently used in the UI.
        updateFanIntensity: (state, action) => {
            state.fanIntensity = action.payload;
        },
    },
});

// Exports for the climate reducers, exported with 'slice.actions' as a property.
export const { updateTemperature, updateDirection, updateFanIntensity, switchMeasurement } = slice.actions;

export default slice.reducer;
