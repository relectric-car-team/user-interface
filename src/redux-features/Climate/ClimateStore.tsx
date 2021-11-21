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
    sliderValue: number;
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
    sliderValue: 38,
    displayedTemp: sliderValueToCelsius(38),
    isCelsius: true,
    fanIntensity: 2,
    fanDirection: Direction.Upper,
    temperatureSymbol: '°C',
};

/**
 * Function for converting the value of the temperature slider (which is on a scale of 0-100),
 * to a Celsius scale ranging from 15 to 32 degrees Celsius.
 * @param sliderValue Current value of the temperature slider.
 * @returns Value of the temperature slider, converted to degrees Celsius.
 */
function sliderValueToCelsius(sliderValue: number) {
    const celsiusTemp = Math.ceil(sliderValue / 6 + 15);
    return celsiusTemp;
}

/**
 * Function for converting the value of the temperature slider (which is on a scale of 0-100),
 * to a Fahrenheit scale ranging from 60 to 90 degrees Fahrenheit
 * @param sliderValue Current value of the temperature slider
 * @returns Value of the temperature slider, converted to degrees Fahrenheit
 */

/**
 * Function for converting the value of the temperature slider to a colour ranging
 * from blue (for lowest values) to red (for the highest values).
 * @param sliderValue Current value of the temperature slider
 * @returns RGB code as a string for a colour ranging from red to
 * blue that reflects the selected temperature value.
 */
function sliderValueToColour(sliderValue: number) {
    const red = 'cc374a';
    const blue = '1184e8';

    const sliderValToColour =
        'rgb(' +
        Math.ceil(
            (parseInt(red.substring(0, 2), 16) * sliderValue) / 100 +
                parseInt(blue.substring(0, 2), 16) * (1 - sliderValue / 100),
        ) +
        ',' +
        Math.ceil(
            (parseInt(red.substring(2, 4), 16) * sliderValue) / 100 +
                parseInt(blue.substring(2, 4), 16) * (1 - sliderValue / 100),
        ) +
        ',' +
        Math.ceil(
            (parseInt(red.substring(4, 6), 16) * sliderValue) / 100 +
                parseInt(blue.substring(4, 6), 16) * (1 - sliderValue / 100),
        ) +
        ')';
    return sliderValToColour;
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
            } else {
                state.displayedTemp = state.displayedTemp - 1;
            }
        },
        // Reducer to toggle the current temperature scale between Celsius and Fahrenheit
        switchMeasurement: (state, action) => {
            state.isCelsius = action.payload;
            if (action.payload == true) {
                state.temperatureSymbol = '°C';
                state.displayedTemp = 7;
                // state.displayedTemp = sliderValueToCelsius(action.payload);
            } else if (action.payload == false) {
                state.displayedTemp = 69;
                // state.displayedTemp = sliderValueToFahrenheit(action.payload);
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
