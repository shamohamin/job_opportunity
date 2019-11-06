import { GETDATA, SETLIMIT } from "./action" ;
import { RestDataSource } from "./RestDataSource" ;
import { URLS } from "./Urls" ;

export const getData = params => ({

    type : GETDATA ,
    payload : new RestDataSource(URLS.advertise).getUserData(params)
    .then(res => {
        console.log(res.data)
        return {
            advertise : res.data ,
            total : res.data.total ,
            params ,
            limit : res.data.limit
        }
    })
    .catch(err => ({ err : err.response.data }))

})

export const setLimit = limit => ({
    type : SETLIMIT ,
    payload : limit
});
