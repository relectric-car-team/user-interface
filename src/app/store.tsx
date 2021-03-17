import { configureStore, ThunkAction, Action, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit';
import routerReducer from '../redux/Routing/RouterStore';
import auxillarySensorsReducer from '../redux/AuxillarySensors/AuxillarySensors';
import dispatchSystemsActionReducer from '../redux/NetworkDispatch/NetworkDispatch';

export const store = configureStore({
    reducer: {
        router: routerReducer,
        auxillarySensors: auxillarySensorsReducer,
        dispatchSystemsAction: dispatchSystemsActionReducer,
    },
    middleware: [
        createImmutableStateInvariantMiddleware({ ignore: ['router', 'auxillarySensors', 'networkDispatch'] }),
    ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
