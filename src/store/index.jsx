import { configureStore } from '@reduxjs/toolkit';
import  isLoadingSlice  from './slices/isLoading.slice';
import loginSlices from './slices/login.slices'; //Lo importamos
import pokeselectSlices from './slices/pokeselect.slices';
export default configureStore({
    reducer: {
        Login:loginSlices,
        pokeselect:pokeselectSlices,
        loading:isLoadingSlice,
	}
})