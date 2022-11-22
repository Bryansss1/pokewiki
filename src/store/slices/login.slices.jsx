import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const LoginSlice = createSlice({
		name: 'Login',
    initialState: "",
    reducers: {
        changeState:(state,action)=>{
          localStorage.setItem("login",action.payload)
           return action.payload
    }
           
            
  }
})

export const { changeState } = LoginSlice.actions;

export default LoginSlice.reducer;