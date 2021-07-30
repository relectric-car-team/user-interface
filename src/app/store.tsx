import { configureStore, ThunkAction, Action, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit';

//The one combined reducer containing all the smaller reducers to be used throughout the UI.
import reducer from './reducersindex';

/**
 * The app store, the only store the UI app can contain.
 * Only allows for one reducer to be passed in to it.
 */
export const store = configureStore({
    reducer: reducer,
    middleware: [createImmutableStateInvariantMiddleware({ ignore: ['router'] })],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
