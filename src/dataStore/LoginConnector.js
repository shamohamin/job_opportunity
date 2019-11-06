import {connect} from 'react-redux' ;
import { withRouter } from "react-router-dom";
import { postData } from "./LoginActionCreator" ;

export const LoginConnector = (PresentedComponent) => {
    
    const mapStateToProps = ds => ({...ds.loginReducer}) ;

    const mapDispatchToProps = dispatch => ({
        postData : (data , sucessCallback , failedCallback) => 
                            dispatch(postData(data,sucessCallback,failedCallback)) 
    })

    return withRouter(connect(mapStateToProps , mapDispatchToProps)(PresentedComponent)) ;

} 