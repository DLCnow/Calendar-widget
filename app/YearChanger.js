import React, { Component } from 'react';

class YearChanger extends Component {
    constructor({year , changView , setYear}) {
        super();
        
    }
    goPrevYear() {
        this.props.setYear(this.props.year - 1)
    }
    goNextYear() {
        this.props.setYear(this.props.year + 1)
    }
    
  render() {
    return (
      <div className="yearchangerwrap">
            <button onClick={() => { this.goPrevYear() }}>&lt;</button>
            <h3><span onClick={() => { this.props.changeView("month") }}>{this.props.year}</span>年<span>{this.props.month}</span>月</h3>
            <button onClick={() => { this.goNextYear() }}>&gt;</button>
      </div>
    );
  }
}

export default YearChanger;
