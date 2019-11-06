import React from 'react' ;
import { Navbar } from './Navbar' ;
import { validate } from './formValidator' ;

export class Login extends React.Component {

    constructor(props){
        super(props) ;
        this.state = {
            formData : {
                username : "",
                filenumber : "",
            },
            rules : {
                username : {required : true} ,
                filenumber : {required : true , isNumber : true }
            },
            serverErr : "",
            fieldErr : {}
        }

    }

    handelChange = (event) => {
        event.persist() ;
        this.setState(state => state.formData[event.target.name] = event.target.value ) 
    }

    handleSubmit = () => {
        console.log(this.formValid) ;
        if(this.formValid){
            this.props.postData(this.state.formData , () => this.props.history.push('/home') ,
                        (err) => this.setState({serverErr : err})) ;
        }
    }

    get formValid(){
        let valid = true ;

        Object.keys(this.state.fieldErr).forEach(key => {
            if(this.state.fieldErr[key].length !== 0){
                valid = false ;
            }
        });

        return valid ;
    }

    static getDerivedStateFromProps(props , state){
        console.log(state) ;

        let fieldErr = validate(state.formData , state.rules) ;

        return {
            fieldErr : fieldErr 
        }
    }

    showErrMassage = (field) => <div className="text-danger">
        {this.state.fieldErr[field]}
    </div> 

    render(){
        console.log(this.props) ;
        return <div>
            <div>
                <Navbar />
            </div>
            {this.state.serverErr === "" ? "" : <div className="alert 
                                                    alert-danger text-center m-3">
                {this.state.serverErr}
            </div>} 
            <div className="m-4">
                <label>username:</label>
                <input className="form-control m-1" autoComplete="off" autoFocus="true"
                    value={this.state.formData.username}
                    name="username" type="text" onChange={this.handelChange}/>
                {this.showErrMassage("username")}
            </div>
            <div className="m-4">
                <label>filenumber:</label>       
                <input className="form-control m-2" name="filenumber" 
                    value={this.state.formData.filenumber}
                    type="text" onChange={this.handelChange} />
                {this.showErrMassage("filenumber")}    
            </div>
            <div className="text-center m-2"> 
                <input className="btn btn-primary m-2" value="Login" 
                    onClick={this.handleSubmit} />  
            </div>      
        </div>
    }

}