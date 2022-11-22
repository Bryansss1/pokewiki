import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokeselectSlice = createSlice({
		name: 'pokeselect',
    initialState: "",
    reducers: {
        changePoke:(state,action)=>{
            return action.payload
    }
  }
})

export const {changePoke } = pokeselectSlice.actions;

export default pokeselectSlice.reducer;