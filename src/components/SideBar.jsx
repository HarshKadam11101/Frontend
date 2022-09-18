import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const SideBar = (props)=>{
  
  const [check, setCheck] = useState({profile:true, rentCar:false, delete:false});
  const navigate = useNavigate();
  //const type = useSelector(state=>state.userType);

  const sideBarToggle = (e) => {
    console.log(e.target.value+' toggled');
    setCheck(() => {
      return {
        profile: false,
        rentCar: false,
        delete: false,
        [e.target.value]: true
      };
    });
    if(e.target.value==="profile"){
      navigate('profile');
    }
    else if(e.target.value==="rentCar"){
      navigate('/carlist');
    }
    else{

      navigate(e.target.value);
    }
  };

  function getToggleDisplay(value){
    // if(value==='feedback' && type!=='driver'){
    //   return 'none';
    // }
    // if(value==='giveFeedback' && type==='admin'){
    //   return 'none';
    // }
    // if(value==='booking' && type!=='customer'){
    //   return 'none';
    // }
    // if(value==='delete' && type==='admin'){
    //   return 'none';
    // }
    return '';
  }

    return(
        <>
         
         <div className="btn-group-vertical position-absolute start-0" style={{marginTop: '5vw'}} role="group" aria-label="Basic radio toggle button group">
         <input onChange={sideBarToggle} checked={check.profile} value='profile' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio1" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw', height:'4vw', fontSize: '2vw',padding: '1vw', textAlign: 'center' }} htmlFor="btnradio1">Profile</label>
          
            {/* <input onChange={sideBarToggle} checked={check.booking} value='bookings' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio2" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw', height:'4vw',fontSize: '2vw',padding: '1vw', display: getToggleDisplay('bookings') }} htmlFor="btnradio2">Bookings</label> */}
          
            {/* <input onChange={sideBarToggle} checked={check.feedback} value='feedback' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio3" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw',padding: '1vw', display: getToggleDisplay('feedback') }} htmlFor="btnradio3">Feedback</label> */}

          {/* <input onChange={sideBarToggle} checked={check.giveFeedback} value='giveFeedback' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio4" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw',fontSize: '2vw',padding: '1vw', display: getToggleDisplay('giveFeedback') }} htmlFor="btnradio4">Give us Feedback</label> */}

          <input onChange={sideBarToggle} checked={check.rentCar} value='rentCar' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio5" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw', height:'4vw',fontSize: '2vw',padding: '1vw', display: getToggleDisplay('rentCar') }} htmlFor="btnradio5">Rent a Car</label>
          
            <input onChange={sideBarToggle} checked={check.delete} value='delete' type="radio" className="btn-check sideBar" name="btnradio" id="btnradio6" autoComplete="off"/>
          <label className="btn btn-outline-warning" style={{width: '20vw', height:'4vw',fontSize: '2vw',padding: '1vw', display: getToggleDisplay('delete') }} htmlFor="btnradio6">Delete Account</label>
            
          </div>
          
        </>
    );
}

export default SideBar;