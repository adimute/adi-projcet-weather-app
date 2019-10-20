import React, { Component } from 'react'
import axios from '../../axsios-orders'
import Daydiv from '../../Component/UI/Daydiv/Daydiv'
import Search from './Search/Search'
export default class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            maxTemp: '',
        }
    }

    componentDidMount() {
        axios.get("/telavivdefault/-LrZKUJJaUAfvB7yfZ6d/DailyForecasts.json")
            .then(Response => {
                this.setState({
                    data: Response.data,
                    maxTemp: ((Number(Response.data[0].Temperature.Maximum.Value) - 32) * 5 / 9).toFixed(0) + "°c",

                })
            }
        )
    }

    render() {
        let mapmap = this.state.data.map((day, i) => {
            const dayToCheck = new Date(day.Date).getDay()
            let dayAns = ''
            switch (dayToCheck) {
                case 0:
                    dayAns = 'Sun'
                    break;
                case 1:
                    dayAns = 'Mon'
                    break;
                case 2:
                    dayAns = 'Tue'
                    break;
                case 3:
                    dayAns = 'Wed'
                    break;
                case 4:
                    dayAns = 'Thu'
                    break;
                case 5:
                    dayAns = 'Fri'
                    break;
                case 6:
                    dayAns = 'Sat'
                    break;
                default: 
                dayAns = ''
                break
            }
            const tempx = ((Number(day.Temperature.Maximum.Value) - 32) * 5 / 9).toFixed(0) + "°C";
            return <Daydiv key = {i} temp={tempx} detail={day.Day.IconPhrase} date={dayAns} />
        })

        
        return (
            <div>
                <Search citysName = {this.props.citysName}
                 selectedCityHandler = {this.props.selectedCityHandler}
                 citysData = {this.props.citysData}/>
                <h1>Tal Aviv</h1>
                <h3>{this.state.maxTemp}</h3>  
                <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'center' }}>
                    {mapmap}
                </div>
                
            </div>
        )
    }
}

