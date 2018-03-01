import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired
};

class MonthView extends Component {
    constructor({year, month , changeView}) {
        super();
    }

    showTable() {
        var thisMonthDayOne = new Date(this.props.year, this.props.month - 1, 1).getDay();
        var thisMonthDays = new Date(this.props.year, this.props.month + 1, 0).getDate();
        var prevMonthDays = new Date(this.props.year, this.props.month, 0).getDate();
        var arr = [];
        while (thisMonthDayOne--) {
            arr.unshift({
                "prev": true,
                "data": prevMonthDays--
            });
        }
        var count = 1;
        while (thisMonthDays--) {
            arr.push({
                "data": count++
            });
        }
        var count = 1;
        while (arr.length != 35 && arr.length != 42) {
            arr.push({
                "next": true,
                "data": count++
            });
        }
        var domArr = [];
        for (var i = 0; i < arr.length / 7; i++) {
            var temp = [];
            for (var j = 0; j < 7; j++) {
                temp.push(
                    <td
                        key={i * 7 + j}
                        className={cn({
                            "grey" : arr[i * 7 + j].prev || arr[i * 7 + j].next
                        })}>{arr[i * 7 + j].data}</td>

                )
            }
            // console.log(temp);
            domArr.push(<tr key={i}>{temp}</tr>)
        }
        // console.log(domArr);
        return domArr;
    }

    render() {
        return (
            <div className="monthviewwrap">
                <table>
                    <tbody>
                        <tr>
                            <th>日</th>
                            <th>一</th>
                            <th>二</th>
                            <th>三</th>
                            <th>四</th>
                            <th>五</th>
                            <th>六</th>
                        </tr>
                        {this.showTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

MonthView.propTypes = propTypes;

export default MonthView;
