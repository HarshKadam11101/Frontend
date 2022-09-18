import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../Actions/UserAction';

const Modal = (props)=>{
    const user = useSelector(state=>state.user);
     console.log(user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleDelete(){
        dispatch(deleteUser(user.id));
        document.getElementById('logoutButton').click();
    }
    return(
        <>
        <div
                className="modal fade text-dark"
                id="exampleModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-warning border-3 border-light">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fw-bold" style={{fontSize: '3.5vh'}} id="exampleModalLabel">{props.title}</h5>
                        </div>
                        {/* the view of the writings of modal and next line is not visible properly  */}
                        <div className="modal-body fw-bold text-start" style={{fontSize: '2.5vh'}}>Are you sure?<br/>This can't be undone</div>
                        <div className="modal-footer border-0">
                            <button
                                type="button"
                                className="btn btn-dark"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-dark"
                                data-bs-dismiss="modal"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                            {/* <button type="button" className="btn btn-dark">Delete</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;