export const UserReducer=(user = {},action) =>{
    switch(action.type){
        case 'SAVE_USER':
            user=action.payload;
            if(action.payload=== undefined || action.payload ==='' || action.payload===' '){
            return null;
    }
            console.log(action.payload);
        console.log("Error");
        return (user);
        case 'SET_USER':
            console.log("inside reducer")
            console.log(user)

            // user=action.payload;
           // localStorage.setItem('user',JSON.stringfy(user));
            return action.payload;
        case 'FETCH_USER':
            user=action.payload;
            console.log(action.payload);  
            return(user);
        case 'DELETE_USER':
            console.log(action.payload);
            return {};
        default :
        localStorage.getItem('user');
        return(user);
    }
}