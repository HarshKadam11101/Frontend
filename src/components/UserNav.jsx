import React from 'react';
import { useSelector } from 'react-redux';


const UserNav = (props) =>{
    const username = useSelector(state=>state.user.username);

    return(
        <>
        <nav className="navbar navbar-light bg-warning p-0 " style={{opacity:'85%'}}  >
          <div className="container-fluid py-2">
            <span className="navbar-brand mb-0 h1 fw-bold ms-2" style={{ fontSize: '4vw', padding: '1vw' }}>Welcome {username}</span>
          </div>
        </nav>
        </>
    );
}

export default UserNav;