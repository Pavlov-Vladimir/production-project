import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entity/Counter";
import { userReducer } from "entity/User";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}