import React, { Component } from 'react'
import classes from './SelectedCity.module.css'
import { Link } from 'react-router-dom'
import WeatherIcon from '../UI/Daydiv/WeatherIcon/WeatherIcon'

export default class SelectedCity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }



    render() {
        //* Add button - after clicking on add to favorites it becomes a remove button *//
        let buttonText = 'Add to favorite'
        if (this.state.data.favorite) {
            buttonText = 'Remove from favorite'
        }


        return (


            <div>
                <h1 className={classes.Headr} >{this.state.data.EnglishName}</h1>
                <h2 className={classes.Country} >{this.state.data.Country.EnglishName}</h2>
                <WeatherIcon className={classes.Img} iconNum={this.state.data.WeatherIcon} />
                <h1 className={classes.Tempc}>{this.state.data.Temperature.Metric.Value.toFixed(0)}°c</h1>
                <h3 className={classes.Weather}>{this.state.data.WeatherText}</h3>
                <button class="btn btn-link" className={classes.Button} onClick={() => this.props.addFavorite(this.state.data.index)}><span>&#9825;</span>{buttonText}</button>
                <Link to='/'><button class="btn btn-link" className={classes.Button1}><span>&#8617;</span></button></Link>
            </div>



        )
    }
}




