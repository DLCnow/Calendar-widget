import React, {Component} from 'react';
import cn from 'classnames';

class DecadeView extends Component {
    constructor({year, setYear , changeView}) {
        super();

    }

    showTable() {
        const firstYear = this.props.year - this.props.year % 10 - 10;
        var domArr = [];
        for (var i = 0; i < 10; i++) {
            var temp = [];
            for (var j = 0; j < 3; j++) {
                const year = this.props.year;
                const y = firstYear + j * 10 + i;
                temp.push(<td
                    className={cn({
                        "cur": year == y,
                        "cursor": true
                    })}
                    key={y}
                    onClick={()=>{
                        this.props.changeView("month"),
                        this.props.setYear(y)
                    }}>{y}</td>);
            }
            domArr.push(<tr key={i}>{temp}</tr>);
        }
        return domArr;
    }
    render() {
        return (
            <div className="decadeviewwrap">
                <table>
                    <tbody>
                        {this.showTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DecadeView;
