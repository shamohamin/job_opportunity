import React from "react" ;
import { BrowserRouter as Router , Route , Switch , Redirect }
         from "react-router-dom";
import { Login } from "./component/Login";
import { LoginConnector } from './dataStore/LoginConnector' ;
import { Home } from './component/Home' ;
import { connect } from "react-redux";
import { setUserInfo } from "./dataStore/LoginActionCreator";
import { DataConnector } from "./dataStore/DataConnector";

const HomeComponent = DataConnector(Home) ;

const LoginComponnent = LoginConnector(Login) ;

const mapDispatchToProps = dispatch => ({
    setUserInfo : (data) => dispatch(setUserInfo(data)) 
});

export const Connect = connect(ds => ({}), mapDispatchToProps)(
    class extends React.Component {

        componentDidMount(){
            if(localStorage.getItem('user-id') !== null){
                this.props.setUserInfo(JSON.parse(localStorage.getItem('user-id'))) ;
            }
        }

        selectComponent = (routeProps) => {
            
            switch(routeProps.match.params.mode){
                case "login":
                    return <LoginComponnent />
                case "home":
                    return <HomeComponent /> ;    
                default :
                    return <Redirect to="/login" />
            }

        }

        render(){
            console.log(this.props) ;
            return <Router>
                <Switch>
                    <Route path="/:mode?/:page?" render={routeProps => 
                                this.selectComponent(routeProps)} />
                    <Redirect to="/login" />            
                </Switch>
            </Router>
        }

})
