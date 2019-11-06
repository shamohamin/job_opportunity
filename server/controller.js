const Axios = require('axios') ;
const URL = "http://api.asanshahr.com/api/offers?pageSize=10&pageNumber=1" ;
const _ = require('lodash') ;
 
const controller = {
    auth : (req , res) => {
        const fileNumber = req.body.filenumber ;
        Axios.get(URL)
        .then(response => {
            const user = response.data.find(user => 
                                user.fileNumber === Number(fileNumber)) ;
            typeof(user) === "undefined" ? res.status(404).send({msg : 'user not found'}) 
                                    : res.status(200).send({userId : user.id}) ;
        })
        .catch(err => res.status(500).send({msg : err})) ;
    },
    get : (req , res) => {
        const credential = _.pick(req.query , ['limit' , 'page']) ;
        credential.limit = typeof(credential.limit) === "undefined" ? 
                                    5 : Number(credential.limit) ;
        credential.page = typeof(credential.page) === "undefined" ? 
                                    1 : Number(credential.page) ;                            
        Axios.get(URL)
        .then(response => {
            const pre = (credential.page - 1) * credential.limit ;
            const next = credential.page * credential.limit ;
            const total = response.data.length ; 
            console.log(pre + " " + next + " " + total) ;
            console.log(response.data.slice(pre , next).length) ;
            res.status(200)
            .send({
                data : response.data.slice(pre , next) ,
                limit : credential.limit ,
                total 
            }) ;
        })
        .catch(err => {
            console.log(err) ;
            res.status(500).send({msg : err})
        }) ;
    }
}

module.exports = controller ;