import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface AuxillarySensorsState {
    currentTemperature: number;
}

const initialState: AuxillarySensorsState = {
    currentTemperature: 0,
};

export const slice = createSlice({
    name: 'auxillarySensors',
    initialState,
    reducers: {
        setTemperature: (state, action: PayloadAction<number>) => {
            state.currentTemperature = action.payload;
        },
    },
});

export const { setTemperature } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
//     setTimeout(() => {
//         dispatch(incrementByAmount(amount));
//     }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTemperature = (state: RootState): number => state.auxillarySensors.currentTemperature;

export default slice.reducer;
