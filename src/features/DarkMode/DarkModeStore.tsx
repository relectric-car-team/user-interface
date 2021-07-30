import { createSlice } from '@reduxjs/toolkit';

/**
 * Interface for dark mode redux; contains variables needed for dark mode to work correctly.
 */
interface DarkMode {
    darkModeActive: boolean;
}

/**
 * Initial state the dark/light mode should be set to.
 */
const initialState: DarkMode = {
    /**
     * Gets intial setting for dark/light mode from the user's device.
     * If no theme is requested by the user's device, it will default to dark mode.
     */
    darkModeActive: window.matchMedia('(prefers-color-scheme)').media == 'dark',
};

/**
 * Slice for dark mode, provides the reducers necessary to correctly
 * update the dark and light mode implementation in the app.
 */
export const slice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        updateDarkMode: (state) => {
            if (state.darkModeActive == true) {
                document.body.classList.remove('dark');
                state.darkModeActive = false;
            } else {
                document.body.classList.add('dark');
                state.darkModeActive = true;
            }
        },
    },
});

/**
 * Reducer to update the dark mode must be exported with 'slice.actions' as a property.
 */
export const { updateDarkMode } = slice.actions;

export default slice.reducer;
