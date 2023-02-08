import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISocketMessageTransmittable } from '../../Models/Interfaces';

interface NetworkDispatchState {
    dispatchSystemsAction: ((message: ISocketMessageTransmittable) => void) | undefined;
}

const initialState: NetworkDispatchState = {
    dispatchSystemsAction: undefined,
};

export const slice = createSlice({
    name: 'networkDispatch',
    initialState,
    reducers: {
        setDispatchSystemsAction: (state, action: PayloadAction<(message: ISocketMessageTransmittable) => void>) => {
            state.dispatchSystemsAction = action.payload;
        },
    },
});

export const { setDispatchSystemsAction } = slice.actions;

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
// export const selectDispatchSystemsAction = (
// state: RootState,
// ): ((message: ISocketMessageTransmittable) => void) | undefined => state.dispatchSystemsAction.dispatchSystemsAction;

export default slice.reducer;
