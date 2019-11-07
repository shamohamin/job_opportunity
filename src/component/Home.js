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


    handelPictures = (adv) => {
        if(adv.images.length !== 0 && typeof(adv.images) !== "undefined" ){
            return <img style={{height : '50vh' , width:'90%'}} src={adv.images[0].path} alt="room" />
        }else{
            return "this advertise doesnt have image" ;
        }
    }

    render(){
        const style = {
            boxShadow : '10px 10px 10px 10px #888888' ,
            margin : '30px'
        } ;
        const imageStyle = {
            width : '10%' ,
            height : '50vh' 
        };
        return <div>
            <div>
                <Navbar />
            </div>
            <div>
                {
                    !this.props.isLoading ? this.props.data.map(adv => <div className="row" style={style}>
                            <div className="row">
                                <div className="col m-1" style={imageStyle}>
                                    {this.handelPictures(adv)}
                                </div>
                                <div className="col">
                                        <div>
                                            <span className="badge m-1"> fileNumber </span> : {adv.fileNumber}
                                        </div>
                                        <div>
                                            <span className="badge m-1"> RoomCount </span>: {adv.roomCount} 
                                        </div>
                                        <div>
                                            <span className="badge m-1"> Area </span>: {adv.area}
                                        </div>
                                        <div>
                                            <span className="badge m-1"> Address </span> :  {adv.address}
                                        </div>
                                        <div>
                                            <span className="badge m-1">pre Rent</span> : {adv.preRent}
                                        </div>
                                        <div>
                                            <span className="badge m-1">Rent</span> : {adv.rent}
                                        </div>
                                </div>
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