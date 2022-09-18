import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import CarList from './components/CarList';
import UserNav from './components/UserNav';
import SideBar from './components/SideBar';
import UserInterface from './components/UserInterface';
import Profile from './components/Profile';
import Modal from './components/Modal';
import DeleteAccount from './components/DeleteAccount';
import Booking from './components/Booking';
import Confirm from './components/Confirm';
function App() {
  // const [vehicle , setVehicle] = useState(loadingVehicle);
  // useEffect(()=> {
  //   return()
  // })
  return (
    <div>
      <header>
        <Header />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/carlist" element={<CarList />} />
          {/* <Route exact path="/userNav" element={<UserNav />} /> */}
          <Route exact path="/userNav" element={<UserInterface />} >
            <Route exact path="profile" element={<Profile />} />
            <Route exact path='delete' element={<DeleteAccount />} />
            
          </Route>
          <Route exact path="/booking" element={<Booking/>} />
          <Route exact path="/confirm" element={<Confirm/>} />  



        </Routes>
      </header>
    </div>
  );
}

export default App;
