import { createSlice } from '@reduxjs/toolkit';

interface DarkMode {
    darkModeActive: boolean;
}

const initialState: DarkMode = {
    darkModeActive: window.matchMedia('(prefers-color-scheme)').media == 'dark',
};

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

export const { updateDarkMode } = slice.actions;

export default slice.reducer;
