import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
const ProtectedRoutes = () => {

		// Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que 
        // Importa es que valide si el usuario está loggeado o no
    const login=useSelector(state=>state.Login)
  
    if(login!==""){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }          
}
export default ProtectedRoutes;