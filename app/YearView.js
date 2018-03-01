import React, { Component } from 'react';

class YearView extends Component {
    constructor(setMonth , changeView) {
        super();
        
    }

    componentDidMount(){
        var self = this;
        $(this.refs.yearviewwrap).delegate("td" , "click" , function(){
            self.props.setMonth(Number($(this).data("m")));
            self.props.changeView("month");
        })
    }
    
  render() {
    return (
      <div className="yearviewwrap" ref="yearviewwrap">
        <table>
            <tbody>
                <tr>
                    <td data-m="1">一月</td>
                    <td data-m="2">二月</td>
                </tr>
                <tr>
                    <td data-m="3">三月</td>
                    <td data-m="4">四月</td>
                </tr>
                <tr>
                    <td data-m="5">五月</td>
                    <td data-m="6">六月</td>
                </tr>
                <tr>
                    <td data-m="7">七月</td>
                    <td data-m="8">八月</td>
                </tr>
                <tr>
                    <td data-m="9">九月</td>
                    <td data-m="10">十月</td>
                </tr>
                <tr>
                    <td data-m="11">十一月</td>
                    <td data-m="12">十二月</td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default YearView;
