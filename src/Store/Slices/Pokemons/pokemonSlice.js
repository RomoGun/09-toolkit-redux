import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLodaing: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLodaing = true;
        },
        setPokemons: (state, action ) => {
            state.isLodaing = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;