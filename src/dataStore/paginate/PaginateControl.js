import React from 'react' ;
import { PaginateConnector } from "./PaginateConnector";
import { PaginateButtons } from "./PaginateButtons";

const PaginateConnected = PaginateConnector(PaginateButtons) ;

export class PaginateControl extends React.Component {

    render(){
        return <div className="text-center">
            <PaginateConnected />
        </div>
    }

}
