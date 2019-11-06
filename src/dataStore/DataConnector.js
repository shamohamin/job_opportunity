import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getData , setLimit } from './ModelActionCreator' ;
import { DataGetterWrapper } from './DataGetterWrapper' ;

export const DataConnector = PresentedComponent => {

    const mapStateToProps = ds => ({
        data : ds.modelReducer.advertise ,
        isLoading : ds.modelReducer.isLoading ,
        params : ds.modelReducer.params ,
        limit : ds.modelReducer.limit === undefined ? 5 : ds.modelReducer.limit
    });

    const mapDispatchToProps = dispatch => ({
        getData : (params) => dispatch(getData(params)) ,
        setLimit : (limit) => dispatch(setLimit(limit)) 
    }) ;

    return withRouter(connect(mapStateToProps ,
                    mapDispatchToProps)(DataGetterWrapper(PresentedComponent))) ;

}

