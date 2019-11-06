import validator from 'validator' ;

export const validate = (data , rules) => {
    let err = {};

    Object.keys(data).forEach(key => {
        let errFiled = [] ;
        let fieldData = data[key] ;

        if(validator.isEmpty(fieldData)){
            errFiled.push("VAlUE REQUIRED!!") ;
        }else{
            console.log(rules[key])
            if(rules[key].isNumber){
                if(!validator.isNumeric(fieldData)){
                    errFiled.push("MUST BE NUMERIC!!") ;
                }
            }
        }
        err[key] = errFiled ;
    });
    return err ;
}