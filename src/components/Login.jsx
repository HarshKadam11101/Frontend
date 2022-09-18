import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { setUser, validateUser } from '../Actions/UserAction';


const Login = (props) => {
  const myStyle={
    backgroundImage: "url('https://www.enterprise.com/content/dam/eu-seo/Tesla-Model-S-3-cropped.jpg')",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  const [passType, setPassType] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [popUp, setPopUp] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogin = async () => {
    console.log("handleLogin entered");
    let id = await validateUser(userName,password).then((response)=> response).catch((error)=> console.log(error));
    console.log(id);
    
    if(id!== null && id!== undefined && id!== '' && id!== ' ')
    {
      dispatch(setUser(id))
    
      navigate('/userNav/profile');
    }
    else{
      setTimeout(()=>{
        setPopUp('Incorrect Username or Password');
      },500);
      setPassType(false);
      setUserName('');
      setPassword('');

    }

    
  }

  function handleShow() {
    console.log("Entering handleShow");
    setPassType(!passType);

  }
  function handleUserName(e) {
    setUserName(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function goToPhone(passedType) {
    navigate('/register');
  }



  return (
    <>
    <div style={myStyle}>

      <div className="conatiner bg-dark  m-auto text-center text-light position-relative" style={{  top: '10vw', fontSize: '3vw',  borderRadius: '3vw', paddingTop: '2vw',opacity:"60%", height: '25vw',width:'40vw', left:'25vw'}}>
        <div className="fw-bold text-decoration-underline text-warning" style={{ fontSize:'2vw'}}>Login</div>
        <form>
          <table className="table text-light table-borderless" style={{ marginTop: '2vw' }}>
            <tbody>
              <tr>
                <td colSpan={2} style={{ fontSize: '1.5vw', lineHeight: '0.2vw', position: 'relative', right: '5vw' }} className="text-danger fw-bold text-decoration-underline" >{popUp}</td>
              </tr>
              <tr>
                <td className="text-end" style={{ fontSize:'1.5vw'}} >Username: </td>
                <td ><input type="text" className="form-control w-75" style={{ height: '2vw', fontSize: '1vw', padding: '1vw' }} onChange={handleUserName} value={userName} id="userName" placeholder="Enter your full name" /></td>
              </tr>
              <tr>
                <td className="text-end" style={{ fontSize:'1.5vw'}}>Password: </td>
                <td ><input type={passType ? "text" : "password"} className="form-control w-75" style={{ height: '2vw', fontSize: '1vw', padding: '1vw' }} onChange={handlePassword} value={password} id="password" placeholder="Enter your password" /></td>
              </tr>
              <tr>
                <td colSpan={2} style={{ fontSize: '1.5vw' }} >Show Password<input onChange={handleShow} checked={passType} type="checkbox" className="form-check-input" style={{ padding: '0.5vw', marginLeft: '1vw' }} id="passType" /></td>
              </tr>
              <tr>
                <td colSpan={2} style={{ fontSize: '1.5vw', lineHeight: '0.2vw' }} id='link1' ><a onClick={() =>  {goToPhone('customer')}} className="link-warning hovPoint">New here? Create an account</a></td>
              </tr>
              <tr>
                <td colSpan="2"><button type="button" className="btn btn-warning" onClick={handleLogin} style={{ fontSize: '1.5vw', padding: '0vw 1vw', height:'3vw'}}>Login</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      </div>
    </>
  );
}

export default Login;