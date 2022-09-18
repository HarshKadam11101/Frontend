import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Actions/UserAction';

const Profile = (props)=>{
  //const dispatch=useDispatch();
  //const id = useSelector(state => state.user.id);

    //let user = null;
      // const [user, setUser] = useState()
      const user = useSelector(state => state.user);
    // useEffect(() => {
    //   console.log("inside useEffect1");
      
    //   //user = useSelector(state => state.user);
    
    //   return () => {
    //     user = useSelector(state => state.user);
    //     console.log(user);
    //   }
    // }, [])
    
    
    
    

  
    return(
        <>
       
        <table className="table text-warning table-borderless table-responsive-xl position-relative" style={{top: '3vw'}}>
                <tbody>
                  <tr>
                    <td className="text-start ps-3">Name: </td>
                    <td className="text-start">{user.username}</td>
                  </tr>
                  <tr>
                    <td className="text-start ps-3">Email: </td>
                    <td className="text-start">{user.email}</td>
                  </tr>
                  <tr>
                    <td className="text-start ps-3">Mobile Number: </td>
                    <td className="text-start">{user.mobileNumber}</td>
                  </tr>
                  <tr>
                    <td className="text-start ps-3">Address: </td>
                    <td className="text-start">{user.address}</td>
                  </tr>
                  
                </tbody>
              </table>
        </>
    );
}


export default Profile;