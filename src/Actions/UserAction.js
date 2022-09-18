import axios from "axios";

export const saveUser = (user) => {
    return async(dispatch) => {
        const data = await axios.post('http://localhost:8089/customer/save', user).then((response)=> response.data).catch((error)=> console.log(error));
        
        dispatch({
            type: 'SAVE_USER',
            payload: data
        })
    }
}

export const setUser = (id)=>{
    //const user = await axios.get('http://localhost:8089/customer/fetch/'+id).then((response)=> response.data).catch((error)=> console.log(error));
   // console.log(user)
    return async(dispatch) => {
        const user = await axios.get('http://localhost:8089/customer/fetch/'+id).then((response)=> response.data).catch((error)=> console.log(error));
    console.log(user)
        dispatch({
            type: 'SET_USER',
            payload: user
        })
    }
}
export const validateUser = async(userName,password) => {
    
        const credentials={
            userName:userName,
            password:password
        }
        console.log(credentials);
        const data = await axios.post('http://localhost:8089/customer/validate',credentials).then((response)=> response.data).catch((error)=> console.log(error));
        console.log(data);
        return data;
        
        
    
}

export const deleteUser = (id)=>{

    return async(dispatch) => {
        const response = await axios.delete('http://localhost:8089/customer/delete/'+id);
        console.log('RESULT Data: ', response.data);
        dispatch({
            type: 'DELETE_USER',
            payload: response.data
        })
    }
}

export const getUser = (id)=>{

    return async(dispatch) => {
        const data = await axios.get('http://localhost:8089/customer/fetch/'+id).then((response)=> response.data).catch((error)=> console.log(error));
        console.log(data);
        dispatch({
            type: 'FETCH_USER',
            payload: data
        })
    }
}