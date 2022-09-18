export const VehicleReducer = (vehicle = 'booking',action)=>{
    switch (action.type) {
        case 'SET_VEHICLE':
           // vehicle = action.vehicle;
           // localStorage.setItem('stage',stage);
            return action.vehicle;

        default:
            //stage = localStorage.getItem('stage');
            return vehicle;
    }
}

// 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