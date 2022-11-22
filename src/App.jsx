import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import Characters from './componentes/Characters'
import CharaDetails from './componentes/CharaDetails'
import ProtectedRoutes from './componentes/RouteProtect'
import HomeUser from './componentes/HomeUser'
import "./styles/App.scss"


function App() {
 

  return (
      <HashRouter>
        <div className="App">
       
      <Routes>

        <Route path="/" element={<HomeUser/>} />

        <Route element={<ProtectedRoutes/>}>
        <Route  path="/characters" element={<Characters/>} />
	      <Route path="/characters/:id" element={<CharaDetails />} />
        </Route>
        
      </Routes>
      
      </div>
    </HashRouter>
    
  )
}

export default App
