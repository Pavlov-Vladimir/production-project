import { CounterSchema } from "entity/Counter";
import { UserScheme } from "entity/User";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
    counter: CounterSchema;
    user: UserScheme;
    loginForm: LoginSchema
}