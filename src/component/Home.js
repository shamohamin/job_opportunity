import React from 'react' ;
import { Navbar } from "./Navbar";
import { PaginateControl } from '../dataStore/paginate/PaginateControl' ;

export class Home extends React.Component {

    constructor(props){
        super(props) ;

        this.state = {
            pageSize : props.limit ,
            pageSizeGroup : [5 , 10 , 20] 
        }
    }

    handelChangeSize = (event) => {
        this.setState({pageSize : event.target.value} , 
                        () => this.props.setLimit(Number(this.state.pageSize))) ;
    }

    render(){
        const style = {
            boxShadow : '10px 10px 10px 10px #888888' ,
            margin : '30px'
        } ;
        console.log(this.props) ;
        return <div>
            <div>
                <Navbar />
            </div>
            <div>
                {
                    !this.props.isLoading ? this.props.data.map(adv => <div style={style}>
                            <div className="text-center">
                                fileNumber : {adv.fileNumber}
                            </div>
                            <div className="text-center">
                                roomCount : {adv.roomCount} 
                            </div>
                        </div>) : <div className="mt-4 text-center">
                            isloading...
                        </div>
                }
            </div>
            <div className="text-center">
                <PaginateControl />

                <select onChange={this.handelChangeSize} value={this.state.pageSize}>
                    {this.state.pageSizeGroup.map(item => <option value={item} key={item}
                        className="form-control">
                        {item}
                    </option>)}
                </select>

            </div>
        </div> ;
    }
}