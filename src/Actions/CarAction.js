import axios from "axios";



export const getAllVehicles = async () => {



    const data = await axios.get('http://localhost:8089/vehicle/vehiclelist').then((response) => response.data).catch((error) => console.log(error));
    console.log(data);
    return data;



}
