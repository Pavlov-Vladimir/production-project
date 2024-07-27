import { CounterSchema } from "entity/Counter";
import { UserScheme } from "entity/User";

export interface StateSchema {
    counter: CounterSchema;
    user: UserScheme;
}