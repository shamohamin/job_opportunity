import {LOGOUT , LOGIN , SETUSERDATA} from './action' ;
import { RestDataSource } from "./RestDataSource" ;
import { URLS } from './Urls' ;

export const postData = (userInfo , successCallback , failedCallback) => ({
    type : LOGIN ,
    payload : new RestDataSource(URLS.auth).postDataAndGetUser(userInfo)
            .then(res => {
                successCallback() ;
                return {
                    userId : res.data
                }
            })
            .catch(err => {
                console.log(err.response.data) ;
                failedCallback(err.response.data.msg) ;
                return {
                    err : err.response.data.msg
                }
            })
})

export const setUserInfo = (userId) => ({
    type : SETUSERDATA ,
    payload : userId
})

export const logout = () => ({
    type : LOGOUT
})