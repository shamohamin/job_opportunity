import React from 'react' ;
import "bootstrap/js/src/collapse.js";
import {NavLink} from './ToggleLink' ;
import { connect } from "react-redux"; 
import { logout } from "../dataStore/LoginActionCreator";
import { withRouter } from "react-router-dom";

const mapStateToProps = ds => ({
    isAthenticated : ds.loginReducer.isAthenticated
});

const mapDispatchToProps = dispatch => ({
    logout : () => dispatch(logout()) 
});

const mergeProps = (ds , functionProps , routeProps) => {
    const functionProp = {
        logout : () => {
            functionProps.logout() ;
            routeProps.history.push('/login') ;
        }
    }

    return Object.assign({} , ds , functionProp) ;
}

export const Navbar = withRouter(connect(mapStateToProps,mapDispatchToProps,mergeProps)(
    class extends React.Component {

        render(){
            console.log(this.props); 
            return <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="navbar navbar-brand">Menu</div>
                <button className="navbar-toggler" type="button" 
                    data-toggle="collapse" data-target="#navbarSupportedContent" 
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink to="/home/1" children="Advertises" />
                        </li>
                        {this.props.isAthenticated ? "" : <li className="nav-item">
                            <NavLink to="/login" exact={true} children="login" />
                        </li>}
                        {this.props.isAthenticated ? <li onClick={() => this.props.logout()}
                                        style={{cursor:"pointy"}} className="mt-2 text-secondary nav-item">
                            Logout
                        </li> : ""}
                    </ul>
                </div>
            </nav>
        }

}))

