import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entity/Counter";
import { userReducer } from "entity/User";
import { loginReducer } from "features/AuthByUsername";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}