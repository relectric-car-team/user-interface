import { configureStore, ThunkAction, Action, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit';
import routerReducer from '../features/Routing/RouterStore';

export const store = configureStore({
    reducer: { router: routerReducer },
    middleware: [createImmutableStateInvariantMiddleware({ ignore: ['router'] })],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
