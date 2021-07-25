import { createSlice } from '@reduxjs/toolkit';

/**
 * Enums for consistent identification of the direction mode selected
 */
export enum Direction {
    Upper = 'Upper',
    Lower = 'Lower',
    UpperAndLower = 'UpperAndLower',
    Front = 'Front',
}

// /**
//  * Enums for consistent identification of the intensity mode selected
//  */
// enum Intensity {
//     off = 'OFF',
//     one = '1',
//     two = '2',
//     three = '3',
//     four = '4',
// }

interface ClimateState {
    sliderValue: number;
    displayedTemp: number;
    isCelsius: boolean;
    climateColour: string;
    fanIntensity: number;
    fanDirection: Direction;
}

const initialState: ClimateState = {
    sliderValue: 38,
    displayedTemp: sliderValueToCelsius(38),
    isCelsius: true,
    climateColour: sliderValueToColour(38),
    fanIntensity: 2,
    fanDirection: Direction.Upper,
};

function sliderValueToCelsius(sliderValue: number) {
    const celsiusTemp = Math.ceil(sliderValue / 6 + 15);
    return celsiusTemp;
}

function sliderValueToFahrenheit(sliderValue: number) {
    let farhrenTemp = Math.ceil(sliderValue / 6 + 15);
    farhrenTemp = Math.ceil((farhrenTemp - 32) * (5 / 9));
    return farhrenTemp;
}

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

export const slice = createSlice({
    name: 'climate',
    initialState,
    reducers: {
        updateTemperature: (state, action) => {
            state.sliderValue = action.payload;
            state.climateColour = sliderValueToColour(action.payload);
            if (state.isCelsius == false) {
                state.displayedTemp = sliderValueToFahrenheit(action.payload);
            } else {
                state.displayedTemp = sliderValueToCelsius(action.payload);
            }
        },
        switchMeasurement: (state, action) => {
            state.isCelsius = action.payload;
            if (action.payload) {
                state.displayedTemp = sliderValueToCelsius(action.payload);
            } else {
                state.displayedTemp = sliderValueToFahrenheit(action.payload);
            }
        },
        updateDirection: (state, action) => {
            state.fanDirection = action.payload;
        },
        updateFanIntensity: (state, action) => {
            state.fanIntensity = action.payload;
        },
    },
});

export const { updateTemperature, updateDirection, updateFanIntensity, switchMeasurement } = slice.actions;

export default slice.reducer;
