import React, {Component} from 'react';

class MonthChanger extends Component {
    constructor({year, month, setYear, setMonth, changeView}) {
        super();

    }

    goPrevMonth() {
        if (this.props.month == 1) {
            this
                .props
                .setMonth(12);
            this
                .props
                .setYear(this.props.year - 1);
        } else {
            this
                .props
                .setMonth(this.props.month - 1)
        }
    }

    goNextMonth() {
        if (this.props.month == 12) {
            this
                .props
                .setMonth(1);
            this
                .props
                .setYear(this.props.year + 1);
        } else {
            this
                .props
                .setMonth(this.props.month + 1)
        }
    }

    render() {
        return (
            <div className="monthchanger">
                <button
                    onClick={() => {
                        this.goPrevMonth()
                    }}>&lt;</button>
                <h3>
                    <span
                        onClick={() => {
                            this
                                .props
                                .changeView("decade")
                        }}>{this.props.year}</span>
                    年
                    <span
                        onClick={() => {
                            this
                                .props
                                .changeView("year");
                        }}>{this.props.month}
                    </span>月</h3>
                <button
                    onClick={() => {
                        this.goNextMonth()
                    }}>&gt;</button>
            </div>
        );
    }
}

export default MonthChanger;
