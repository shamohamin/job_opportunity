import { GETDATA, SETLIMIT } from "./action";

export const modelReducer = (dataStore = {advertise : [] , isLoading : true } , action) => {

    switch(action.type) {
        case GETDATA :
            return {
                ...dataStore ,
                isLoading : typeof(action.payload.advertise) === "undefined" ?
                                            true : false ,
                advertise : typeof(action.payload.advertise) === "undefined" ? 
                                        "" : action.payload.advertise.data ,
                err : typeof(action.payload.advertise) === "undefined" ?
                                        action.payload.err : "" ,
                total : typeof(action.payload.advertise) === "undefined" ?
                                        "" : action.payload.total ,
                params : typeof(action.payload.advertise) === "undefined" ? 
                                        "" : action.payload.params ,
                limit :  typeof(action.payload.advertise) === "undefined" ?
                                        5 : action.payload.limit 
            } ;
        case SETLIMIT :
            return {
                ...dataStore ,
                limit : action.payload 
            }    
        default :
            return dataStore || {} ;    
    }

}