import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

export const PaginateConnector = (PresentedComponent) => {

    const mapStateToProps = ds => ({
        total : ds.modelReducer.total ,
        limit : ds.modelReducer.limit
    });

    const mergeProps = (ds , functions , routeProps) => {
        const props = {
            curpage : routeProps.match.params.page ,
            limit : ds.limit ,
            pageCount : Math.ceil(ds.total/(ds.limit || 5))
        };
        console.log(props.pageCount) ;
        const functionProp = {
            navTo : (page) => routeProps.history.push(`/home/${page}`) 
        };
        return Object.assign({} , props , functionProp , routeProps) ;
    };

    return withRouter(connect(mapStateToProps , {} , mergeProps)(PresentedComponent)) ;

}