import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import UserNav from './UserNav';

const UserInterface = (props) => {
  const myStyle={
    backgroundImage: 
"url('https://www.outsideonline.com/wp-content/uploads/2017/02/21/on-road-off-road-cars-trucks-10_h.jpg?width=800')",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <>
    <div style={myStyle}>
      <div className="conatiner bg-dark m-auto text-center text-light position-relative" style={{ width: '90vw', top: '5vw', fontSize: '3vw', opacity: '0.9', bordeRadius: '20px', height: '45vw' }}>
        <UserNav />

        <div className="container">
          <SideBar />

          <div className="bg-warning position-absolute p-0 end-0" style={{ width: '70vw', height: '80%', borderBottomLeftRadius: '20px' ,borderRadius:'10px',opacity:'60%'}}>
            <div className="bg-black bg-gradient m-auto position-relative" style={{ top: '2vw', height: '75%', width: '90%', borderRadius: '10px' }}>
              <Outlet />
            </div>
          </div>

        </div>

      </div>
      </div>
    </>
  );
}

export default UserInterface;