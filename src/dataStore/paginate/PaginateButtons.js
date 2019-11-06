import React from 'react' ;

export class PaginateButtons extends React.Component {

    getNumbers = (current , total) => {
        if(total <= 4){
            return [...Array(total + 1).keys()].slice(1) ;
        }else if(current <= 4){
            return [1,2,3,4,5] ;
        }else if(current < total - 4){
            return [...Array(5).keys()].reverse()
                        .map(v => total - v) ;
        }else {
            return [current - 1 , current , current + 1] ;
        }
    }


    render(){
        const current_page = Number(this.props.curpage) ;
        const page_count = Number(this.props.pageCount) ;

        return <div>
            {
                current_page > 4 && <React.Fragment>
                    <button className="btn-secondary btn-sm"
                            onClick={() => this.props.navTo(1)}>
                        1
                    </button>
                    <span>...</span>
                </React.Fragment>
            }
            {
                this.getNumbers(current_page , page_count).map(number => 
                                <button className={`${current_page === number ?
                                             "btn-primary btn-sm" : "btn-sm btn-secondary"}`}
                                                onClick={() => this.props.navTo(number)}>
                                    {number}
                                </button>) 
            }
            {
                (current_page > 4 && current_page < page_count - 4 ) && <React.Fragment>
                    <span>...</span>
                    <button onClick={() => this.props.navTo(page_count)}
                            className="btn-sm btn-secondary">
                        {page_count}
                    </button>
                </React.Fragment>
            }
        </div>

    }

} 