import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Pages } from '../../Models/Enums';

interface RouterState {
    page: Pages;
    pageCallback: CallableFunction | undefined;
}

const initialState: RouterState = {
    page: Pages.Home,
    pageCallback: undefined,
};

export const slice = createSlice({
    name: 'router',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<Pages>) => {
            state.page = action.payload;
        },
    },
});

export const { setPage } = slice.actions;

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
export const selectRouter = (state: RootState): Pages => state.router.page;

export default slice.reducer;
