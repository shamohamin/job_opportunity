import {LOGIN , LOGOUT, SETUSERDATA} from './action' ;

export const loginReducer = (dataStore , action) => {
    switch(action.type){
        case LOGIN :
            if(typeof(action.payload.userId) !== "undefined"){
                localStorage.setItem('user-id',JSON.stringify(action.payload.userId));
            }           
            return {
                ...dataStore ,
                isAthenticated : typeof(action.payload.err) !== "undefined" ?
                                false : true ,
                userId : typeof(action.payload.userId) === "undefined" ? "" :
                                action.payload.userId ,
                err : typeof(action.payload.err) === "undefined" ? "" :
                                action.payload.err
            }
        case LOGOUT :
            localStorage.removeItem('user-id') ;
            return {
                ...dataStore ,
                isAthenticated : false ,
                userId : ""
            }
        case SETUSERDATA :
            return {
                ...dataStore ,
                isAthenticated : true ,
                userId : action.payload 
            }    
        default :
            return dataStore || {} ;
    }
}