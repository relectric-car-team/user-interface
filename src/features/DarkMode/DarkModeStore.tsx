import { createSlice } from '@reduxjs/toolkit';

/**
 * Interface for dark mode redux; contains variables needed for dark mode to work correctly.
 */
interface DarkMode {
    preference: string;
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
    preference: 'light',
};

/**
 * Slice for dark mode, provides the reducers necessary to correctly
 * update the dark and light mode implementation in the app.
 */
export const slice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        // new one
        updateDarkMode: (state, action) => {
            action.payload ? document.body.classList.add('dark') : document.body.classList.remove('dark');
            state.darkModeActive = action.payload;
        },
        updatePreference: (state, action) => {
            switch (action.payload) {
                case 'dark':
                    state.preference = 'dark';
                    updateDarkMode(true);
                    document.body.classList.add('dark');
                    break;
                case 'light':
                    state.preference = 'light';
                    updateDarkMode(false); // TODO: this isn't doing anything
                    document.body.classList.remove('dark');
                    break;
                case 'auto':
                    state.preference = 'auto';
                    updateDarkMode(isItDarkOut());
                    document.body.classList.add('dark');
                    break;
                default:
                    console.log('fatal error');
                    break;
            }
        },
    },
});

/**
 * Reducer to update the dark mode must be exported with 'slice.actions' as a property.
 */
export const { updateDarkMode } = slice.actions;
export const { updatePreference } = slice.actions;

export default slice.reducer;

function isItDarkOut() {
    return true;
}
