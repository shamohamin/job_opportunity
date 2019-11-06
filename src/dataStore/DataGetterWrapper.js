import React from 'react' ;

export const DataGetterWrapper = (PresentedComponent) => {

    return class extends React.Component {

        componentDidMount = () => this.getData() ;
        componentDidUpdate = () => this.getData() ;

        getData = () => {
            const dsData = this.props.params || {} ;

            const rtData = {
                page :  Number(this.props.match.params.page) || 1 ,
                limit : Number(this.props.limit) || 5 ,
            };

            if(Object.keys(rtData).find(key => dsData[key] !== rtData[key])){
                this.props.getData(rtData) ;
            } 
        }

        render(){
            return <PresentedComponent {...this.props} />
        }

    }

}