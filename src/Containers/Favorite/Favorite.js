import React, { Component } from 'react'
import Daydiv from '../../Component/UI/Daydiv/Daydiv'
import './Favorite.css'


export default class Favorite extends Component {

    constructor(props) {
        super(props)
        this.state = {
            citysData: this.props.citysData
        }
    }


    render() {

        let favoritecitys = []
        let data = this.state.citysData

        for (let i = 0; i < data.length; i++) {
            if (data[i].favorite) {
                favoritecitys.push(data[i])
            }
        }

        let favoriteCitysMap = null
        favoriteCitysMap = (
            <div>
                {favoritecitys.map((city, index) => {
                    return (
                        <Daydiv iconNum={city.WeatherIcon} 
                                numCityIndex={city.index}  
                                removeFavoriteCity={this.props.removeFavoriteCity} 
                                key={index} favorite country={city.Country.EnglishName} 
                                name={city.EnglishName} detail={city.WeatherText} 
                                temp={city.Temperature.Metric.Value.toFixed(0) + "°c"} />
                    )
                })}
            </div>
        )

      
            
        // }


        return (
            <div>
                <div className="favoritediv">
                    <h1 >Favorite citys</h1>
                </div>
                <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'center', marginTop: '60px' }}>
                    {favoriteCitysMap}
                </div>
            </div>

        )
    }
}