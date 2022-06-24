import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Navbar from './components/Navbar'
import Homepage from './screen/Homepage'
import Cartscreen from './screen/Cartscreen'
import Registerscreen from './screen/Registerscreen'
import Loginscreen from './screen/Loginscreen'
import Ordersscreen from './screen/Ordersscreen'
import Addnewpizza from "./screen/Addnewpizza"
import Orderslist from "./screen/Orderslist"
import Pizzaslist from "./screen/Pizzaslist"
import Userslist from "./screen/Userslist"
import Editpizza from './screen/Editpizza'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/cart" exact element={<Cartscreen />} />
          <Route path="/register" exact element={<Registerscreen />} />
          <Route path="/login" exact element={<Loginscreen />} />
          <Route path="/orders" exact element={<Ordersscreen />} />
          <Route path="/admin"  element={<Navigate replace to="/admin/userslist" />}/>


          {/* <Route path='/admin' exact element={<Userslist />} /> */}
          <Route path='/admin/userslist' exact element={<Userslist />} />
          <Route path='/admin/orderslist' exact element={<Orderslist />} />
          <Route path='/admin/pizzaslist' exact element={<Pizzaslist />} />
          <Route path='/admin/addnewpizza' exact element={<Addnewpizza />} />
          <Route path='/admin/editpizza/:pizzaid' exact element={<Editpizza />} />
        </Routes>
      </BrowserRouter>


    </div>


  )

}

export default App;


