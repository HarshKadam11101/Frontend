import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllVehicles } from "../Actions/CarAction";
import { setVehicle } from "../Actions/VehicleAction";


const CarList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleBooking = (name) =>{
        console.log(name);
    dispatch(setVehicle(name));
    navigate('/booking');

    }
    const [vehicleList, setVehicleList] = useState(() => {
        return [
            {
                "vehicleId": 0,
                "vehicleName": "",
                "vehicleNumber": "",
                "location": {
                    "city": "",
                    "area": ""
                },
                "rent": 0
            }
        ]


    })


    useEffect(() => {

        console.log("outside return");
        console.log(vehicleList);

        return (async () => {
            const data = await getAllVehicles().then((response) => response).catch((error) => console.log(error));
            setVehicleList(data)
            console.log(data);
            console.log(vehicleList);
            console.log("inside useEffect carList");

        }

        )



    }, [])

    return (
        <div>
            <table className="table table-hover table-warning table-striped"  >
                <thead>
                    <tr>
                        <th scope="col" style={{ bottom: "50vw" }} >Vehicle ID</th>
                        <th scope="col" style={{ bottom: "50vw" }}>Vehicle Name</th>
                        {/* <th scope="col" style={{ bottom: "50vw" }}>Vehicle Brand</th> */}
                        <th scope="col" style={{ bottom: "50vw" }}>Vehicle Number</th>
                        <th scope="col" style={{ bottom: "50vw" }}>City</th>
                        <th scope="col" style={{ bottom: "50vw" }}>Area</th>
                        <th scope="col" style={{ bottom: "50vw" }}>Rent Per Hour(Rs)</th>
                    </tr>
                </thead>
                <tbody >
                    {


                        vehicleList.map((element) => {
                            return (

                                //<li key={element.vehicleId}>

                                <tr key={element.vehicleId} onClick={() => handleBooking(element.vehicleName)} name={element.vehicleName}>
                                    <th scope="row"> {element.vehicleId}</th>
                                    <td> {element.vehicleName}</td>
                                    {/* <td> {element["brand"].brandName}</td> */}
                                    <td>{element.vehicleNumber}</td>
                                    <td>{element["location"].city}</td>
                                    <td>{element["location"].area}</td>
                                    <td> {element.rent}</td>
                                </tr>



                                //     {/* vehicleId = {element.vehicleId}
                                //     vehicleName= {element.vehicleName}
                                //     vehicleNumber= {element.vehicleNumber}
                                //     rent= {element.rent} */}
                                //    // </li>


                            );
                        })
                    }  </tbody>
            </table>
        </div>
    );

}
export default CarList;