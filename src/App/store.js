import {configureStore} from "@reduxjs/toolkit";
import { UserReducer } from "../Reducers/UserReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { VehicleReducer } from "../Reducers/VehicleReducer";

export default  configureStore({
    reducer: { user: UserReducer , vehicle: VehicleReducer},
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk).concat(logger),
    devTools: [composeWithDevTools]
})

// export const store = configureStore({
//     reducer: persistReducer,  
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })