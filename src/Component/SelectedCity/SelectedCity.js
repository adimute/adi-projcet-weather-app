import React, { Component } from 'react'
import classes from './SelectedCity.module.css'

export default class SelectedCity extends Component {

    constructor(props) { 
        super(props);
        this.state = { 
            data: this.props.data
        }
    }

    render() {
        let buttonText = 'Add to favorite'
        if (this.state.data.favorite){ 
            buttonText = 'Remove from favorite'
        }

      

        return (
            <div>
                <h1>{this.state.data.EnglishName}</h1>
                <h2>{this.state.data.Country.EnglishName}</h2>
                <h1>{this.state.data.Temperature.Metric.Value} °c</h1>
                <h3>{this.state.data.WeatherText}</h3>
                <button className={classes.Button} onClick = {() =>this.props.addFavorite(this.state.data.index)}>{buttonText}</button>
                <button className={classes.Button1} onClick = {() =>this.props.backToDefaultPage()}>Go-back</button>
            </div>
        )
    }
}
