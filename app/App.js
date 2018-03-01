import React, {Component} from 'react';
import MonthView from "./Monthview.js"
import MonthChanger from './MonthChanger.js';
import DecadeView from './DecadeView.js';
import DecadeChanger from './DecadeChanger.js';
import YearView from './YearView.js';
import YearChanger from './YearChanger.js';

class App extends Component {
    constructor() {
        super();

        this.state = {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            view: "month"
        }
    }

    setYear(year) {
        this.setState({year})
    }
    setMonth(month) {
        this.setState({month})
    }

    setChanger() {
        if (this.state.view == "month") {
            return <MonthChanger
                year={this.state.year}
                month={this.state.month}
                setYear={this
                    .setYear
                    .bind(this)}
                setMonth={this
                    .setMonth
                    .bind(this)}
                changeView={this
                    .changeView
                    .bind(this)}/>
        } else if (this.state.view == "decade"){
            return <DecadeChanger
                year={this.state.year}
                month={this.state.month}
                setYear={this
                    .setYear
                    .bind(this)}
                changeView={this
                    .changeView
                    .bind(this)}/>
        }else if (this.state.view == "year") {
            return <YearChanger
                year={this.state.year}
                month={this.state.month}
                setYear={this
                    .setYear
                    .bind(this)}
                changeView={this
                    .changeView
                    .bind(this)} />
        }
    }

    setView() {
        if (this.state.view == "month") {
            return <MonthView year={this.state.year} month={this.state.month}/>
        } else if (this.state.view == "decade"){
            return <DecadeView
                year={this.state.year}
                setYear={this
                    .setYear
                    .bind(this)}
                changeView={this
                    .changeView
                    .bind(this)}/>
        } else if (this.state.view == "year") {
            return <YearView
                year={this.state.year}
                setMonth={this
                    .setMonth
                    .bind(this)}
                changeView={this
                    .changeView
                    .bind(this)} />
        }
    }
    changeView(view) {
        this.setState({view})
    }

    render() {
        return (
            <div className="wrap">
                {this.setChanger()}
                {this.setView()}
            </div>
        );
    }
}

export default App;
