import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./Slices/Counter";
import { pokemonSlice } from "./Slices/Pokemons";
import { todosApi } from "./apis";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemon: pokemonSlice.reducer,

        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat( todosApi.middleware )
});
