import { configureStore, ThunkAction, Action, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit';
import routerReducer from '../redux-features/Routing/RouterStore';
import auxillarySensorsReducer from '../redux/AuxillarySensors/AuxillarySensors';
import dispatchSystemsActionReducer from '../redux/NetworkDispatch/NetworkDispatch';

//The one combined reducer containing all the smaller reducers to be used throughout the UI.
import reducer from './reducersindex';

/**
 * The app store, the only store the UI app can contain.
 * Only allows for one reducer to be passed in to it.
 */
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
