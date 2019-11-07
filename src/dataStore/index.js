import { combineReducers , createStore , applyMiddleware , compose} from 'redux' ;
import { loginReducer } from "./loginReducer" ;
import { modelReducer } from "./modelReducer" ;
import { asyncMiddelware } from "./PromiseActionMiddelware" ;

const reducers = combineReducers({
    modelReducer : modelReducer ,
    loginReducer : loginReducer
}) ;

let store ;

if(window.navigator.userAgent.includes('Chrome')){
    store = createStore(reducers , compose(
        applyMiddleware(asyncMiddelware) ,
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    )) ;
}else{
    store = createStore(reducers , compose(applyMiddleware(asyncMiddelware))) ;
}

export default store ;


