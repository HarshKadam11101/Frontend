import { useEffect, useState } from "react";
import { FormGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getVehicleByName } from "../Actions/VehicleAction";


const Booking = () =>{

    const myStyle={
        backgroundImage: 
    "url('https://brendanfoot.co.nz/wp-content/uploads/2018/08/Swift-2020_1000x600_8.png')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    // const vehicle = useSelector( state => state.vehicle);
    // console.log(vehicle);
    const name = useSelector( state => state.vehicle);
    const navigate = useNavigate();
    const handleConfirmDetails = (e) =>{
       navigate('/confirm')

    }
    const [vehicle, setVehicle] = useState();
    const getVehicleByName1 = async()=>{

        const data = await getVehicleByName(name).then((response) => response).catch((error) => console.log(error));

        console.log(data);

        setVehicle(data);


    } 
    useEffect(()=>{
        console.log("inside useEffect");
        return async()=>{
           await getVehicleByName1();
        }
        }
    ,[]);


    return (
        <>
        <div style={myStyle}>

         <div className="conatiner bg-dark w-50 m-auto text-center text-light position-relative" style={{  top: '10vw', fontSize: '3vw',  borderRadius: '3vw', paddingTop: '2vw', height: '35vw' ,left:'20vw', opacity:'60%'}}>
          {/* <div className="bg-warning position-absolute p-0 end-0" style={{ width: '70vw', height: '85%', borderBottomLeftRadius: '20px' ,borderRadius:'10px'}}> */}
          <form>
          <table className="table text-warning table-borderless" style={{ marginTop: '5vw' }}>
            <tbody>

            <tr>
                <td className="text-end position-relative" style={{ fontSize:'2.5vw', bottom:'3vw'}} >Pickup Date: </td>
                <td ><input type={"date"} className="form_group position-relative" style={{fontSize:'1.5vw',bottom:'4vw',width:'20vw',height:'3vw',right:'5vw'}} placeholder= "Pickup Date" required /></td>
              </tr> 

              
              <tr>
                <td className="text-end position-relative" style={{ fontSize:'2.5vw',  bottom:'3vw'}} >Pickup Time: </td>
                <td ><input type={"time"} className="form_group position-relative" style={{fontSize:'1.5vw',bottom:'4vw',width:'20vw',height:'3vw',right:'5vw'}} placeholder= "Pickup Time" required /></td>
              </tr>
 

              <tr>
                <td className="text-end position-relative" style={{ fontSize:'2.5vw' , bottom:'3vw'}} >Return Date: </td>
                <td ><input type={"date"} className="form_group  position-relative" style={{fontSize:'1.5vw',bottom:'4vw',width:'20vw',height:'3vw',right:'5vw'}} placeholder= "Return Date" required /></td>
              </tr>


              <tr>
                <td className="text-end position-relative" style={{ fontSize:'2.5vw', bottom:'3vw'}} >Return Time: </td>
                <td ><input type={"time"} className="form_group  position-relative" style={{fontSize:'1.5vw',bottom:'4vw',width:'20vw',height:'3vw',right:'5vw'}} placeholder= "Return Time" required /></td>
              </tr>

              <tr>
                            <td colSpan={2}>
                                <button
                                    type="button"
                                    className="btn btn-warning fw-bold position-relative"
                                    style={{ fontSize: '2vw', padding: '1vw 2vw', top: '-2vw' , height:'5vw'}}
                                    onClick={handleConfirmDetails}
                                >
                                    Confirm Details
                                </button>
                            </td>
                        </tr>

              </tbody>
              </table>
              </form>
            {/* <FormGroup className="form_group">
                <input type={"time"} placeholder= "Pickup Time" required />
            </FormGroup>

            <FormGroup className="form_group">
                <input type={"time"} placeholder= "Return Time" required />
            </FormGroup> */}

            </div>
            </div>
            </>
    );
    



}
export default Booking;