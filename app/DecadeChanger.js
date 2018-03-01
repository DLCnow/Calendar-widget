import React, { Component } from 'react';

class DecadeChanger extends Component {
    constructor({year , setYear , changeView}) {
        super();
        
    }
    
    goPrevTenYear(){
        this.props.setYear(this.props.year - 10)
    }
    goNextTenYear(){
        this.props.setYear(this.props.year + 10)
    }
  render() {
    return (
            <div className="decadechanger">
                <button onClick={() => { this.goPrevTenYear() }}>&lt;</button>
            <h3><span onClick={()=>{this.props.changeView("month")}}>{this.props.year}</span>年<span>{this.props.month}</span>月</h3>
                <button onClick={() => { this.goNextTenYear() }}>&gt;</button>
            </div>
    );
  }
}

export default DecadeChanger;
