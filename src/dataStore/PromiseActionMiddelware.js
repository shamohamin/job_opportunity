const isPromise = (payload) => 
                    (typeof(payload) === "object" || typeof(payload) === "function")
                                && typeof(payload.then) === "function" ;

export const asyncMiddelware = ({dispatch , getState}) => next => action => {

    if(isPromise(action.payload)){
        action.payload.then(res => next({...action , payload : res})) ;
    }else{
        next(action) ;
    }

}
