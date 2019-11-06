import Axios from 'axios' ;

export class RestDataSource {

    constructor(baseurl){
        this.BASEURL = baseurl ;
    }

    getUserData = (params) => this.sendRequest("get" , this.BASEURL , params ) 

    postDataAndGetUser = (data) => this.sendRequest( "post" , this.BASEURL , {} , data ) ;
    
    sendRequest = (method , url , params ,data) => 
                Axios.request({method , url , params , data }) ;
}