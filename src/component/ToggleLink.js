import React from 'react' ;
import {Link , Route} from 'react-router-dom' ; 


export const NavLink = ({exact , to , children}) => {
    return <Route path={to} exact={exact} children={routeProps => {
        const baseClass = "nav-link" ;
        const disactiveClass = "text-secondary" ;
        const activeClass = "text-warning" ;
        console.log(routeProps.match) ;
        const combineClass = `${baseClass} 
                            ${routeProps.match ? activeClass : disactiveClass}` ;
        return <Link to={to} exact={exact} className={combineClass} >
            {children}
        </Link>
    }} />
} 