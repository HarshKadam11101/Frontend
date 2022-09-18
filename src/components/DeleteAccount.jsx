import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { deleteUser, validateUser } from '../Actions/UserAction';

const DeleteAccount = (props) => {
    const user = useSelector(state => state.user);
    const [popUp, setPopUp] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleName(e) {
        setUserName(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    //function handleDelete(e) {
        const handleDelete = async () => {
           
            let isValid = await validateUser(userName,password).then((response)=> response).catch((error)=> console.log(error));
            console.log(isValid);
            
            if(isValid)
            {
                //document.getElementById('modalToggle').click();
                alert("Are you sure?");
                dispatch(deleteUser(user.id));
                //console.log(user.id)
                  setPopUp('');
                  navigate('/')
            }
            else{
                setPopUp('Incorrect Credentials');
            }
            setUserName('');
            setPassword('');
        }
        //console.log(user.userName);
        // console.log(user.password);
        // if (userName === user.userName && password === user.password) {
        //     document.getElementById('modalToggle').click();
        //     setPopUp('');
        // }
    //     else{
    //         setPopUp('Incorrect Credentials');
    //     }
    //     setUserName('');
    //     setPassword('');
    // }

    return (
        <>
            <form>
                <table className="table text-light table-borderless table-responsive-xl" style={{ marginTop: '0vw', height:'20vw' }}>
                    <tbody>
                        <tr>
                            <td colSpan={3} style={{ height: '5vw' }}><span className='position-relative text-warning fw-bold text-decoration-underline' style={{ top: '1vw' }}>Enter your password to continue</span></td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{ fontSize: '1.5vw', lineHeight: '0.2vw', position: 'relative', right: '5vw' }} className="text-danger fw-bold" >{popUp}</td>
                        </tr>
                        <tr>
                            <td className="text-end" style= {{fontSize:'2.5vw',top:'2vw'}}>Username: </td>
                            <td ><input type="text" value={userName} onChange={handleName} className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} placeholder="Enter your username" /></td>
                        </tr>
                        <tr>
                            <td className="text-end" style={{fontSize:'2.5vw'}}>Password: </td>
                            <td ><input type="password" value={password} onChange={handlePassword} className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} placeholder="Enter your password" /></td>
                        </tr>
                        {/* <tr>
                            <td className="text-end">Confirm Password: </td>
                            <td ><input type="password" className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} placeholder="Confirm your password" /></td>
                        </tr> */}
                        {/* an email will be sent to the user whose account will be deleted */}
                        <tr>
                            <td colSpan={2}>
                                <button
                                    type="button"
                                    className="btn btn-warning fw-bold position-relative"
                                    style={{ fontSize: '2vw', padding: '1vw 2vw', top: '2vw' }}
                                    onClick={handleDelete}
                                >
                                    Confirm Deletion
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button
                                    type="button"
                                    className="btn btn-warning fw-bold position-relative"
                                    id='modalToggle'
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    style={{ fontSize: '2vw', padding: '1vw 2vw', top: '2vw', display: 'none' }}
                                >
                                    Toggle
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
}

export default DeleteAccount;