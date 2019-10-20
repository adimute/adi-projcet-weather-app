import React, { Component } from 'react'
import Layout from './Component/Layout/Layout'
// import Favorite from './Favorite/Favorite'
import Homepage from './Containers/Homepage/Homepage'
import SelectedCity from './Component/SelectedCity/SelectedCity'
import axios from './axsios-orders';
export default class App extends Component {

  state = {
    selectedCity: false,
    tempCityData: {},
    citysName: [],
    citysData: [],
  }

  componentDidMount() {
    axios.get("https://adi-wather-app.firebaseio.com/allCitys/-Lr_25BIL0fiK8ink3li.json")
      .then(Response => {
        let citydata = []
        Response.data.map((el, index) =>{    
          citydata.push({...el, favorite: false, index: index })
      } )       
        const citys = []
        Response.data.map(city => {
          citys.push(city.EnglishName)
          return null
        })
        this.setState({
          citysData: citydata,
          citysName: citys,
        })
      })
  }

  selectedCityHandler = (tempCitydata) => {
    const tempCityDatax = tempCitydata
    this.setState({
      tempCityData: tempCityDatax,
      selectedCity: true
    })
  }

  backToDefaultPage = () => {
    this.setState({
      selectedCity: false
    })
  }

  addFavorite = (index) => { 
    let cityData = this.state.tempCityData
    let favorite = cityData.favorite
    favorite = !favorite
    cityData.favorite = favorite
    let updateData = this.state.citysData
    updateData[index] = cityData
    console.log(updateData)
    console.log(index)
    this.setState({
      cityData: updateData
    })
  }

  render() {

    return (
      <div>
        <Layout>

          {this.state.selectedCity ? <SelectedCity backToDefaultPage={this.backToDefaultPage}
                                                   data={this.state.tempCityData}
                                                   addFavorite = {this.addFavorite} />
            : <Homepage citysName = {this.state.citysName}
             selectedCityHandler={this.selectedCityHandler}
             citysData = {this.state.citysData} />}

        </Layout>
      </div>
    )
  }
}
