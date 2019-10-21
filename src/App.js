import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from './Component/Layout/Layout'
import Favorite from './Containers/Favorite/Favorite'
import Homepage from './Containers/Homepage/Homepage'
import SelectedCity from './Component/SelectedCity/SelectedCity'
import axios from './axsios-orders'
import Spinner from './Component/UI/Loading/Spinner'
import Model from './Component/UI/Model/Model'



export default class App extends Component {

  state = {
    selectedCity: false,
    tempCityData: {},
    citysName: [],
    citysData: [],
    loading: false,
    error: false
  }


  // Function that calls the information we want to display about the 
  // weather from our API - json file
  componentDidMount() {
    this.setState({
      loading: true
    })
    axios.get("https://adi-wather-app.firebaseio.com/allCitys/-Lr_25BIL0fiK8ink3li.json")
      .then(Response => {
        let citydata = []
        Response.data.map((el, index) => {
          citydata.push({ ...el, favorite: false, index: index })
        }) // Each time we select a State, we are shown the state's index from the array and it can be 
        //added to the Favorit page as long as it is correct
        const citys = []
        Response.data.map(city => {
          citys.push(city.EnglishName)
          return null
        }) //By mapping the array we can pull specific information that we want to display 
        // like city name, temp, weather type etc.
        this.setState({
          citysData: citydata,
          citysName: citys,
          loading: false
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({ error: true })
      })
  } // Error handling - Toast function that catches errors IF when we do something wrong, 
  // And displays a message according to the problem.
  // 1. Whan there is a problem with loading a page.
  // 2. Whan we type some wrong note in the search input, and trying to submtie it.

  // Function that defines the city's selection and makes it true.
  selectedCityHandler = (tempCitydata) => {
    const tempCityDatax = tempCitydata
    this.setState({
      tempCityData: tempCityDatax,
    })
  }

  // Function that returns the selected city to default page.
  backToDefaultPage = () => {
    this.setState({
      selectedCity: false
    })
  }

  // Function that add a city to favorites and updates the Favorite page.
  addFavorite = (index) => {
    let cityData = this.state.tempCityData
    let favorite = cityData.favorite
    favorite = !favorite
    cityData.favorite = favorite
    let updateData = this.state.citysData
    updateData[index] = cityData
    this.setState({
      cityData: updateData
    })
  }

  // Function that remove city from the favorites page.
  removeFavoriteCity = (index) => {
    let cityData = this.state.citysData[index]
    let favorite = cityData.favorite
    favorite = false
    cityData.favorite = favorite
    let updateData = this.state.citysData
    updateData[index] = cityData
    this.setState({
      cityData: updateData
    })
  }



  render() {

    // When the page loads - there is a display of a spinner with a masagge.
    let loading = (
      <Spinner></Spinner>
    )
    if (this.state.error) {
      loading = (
        <p>Somethig went worng :[ </p>
      )
    }


    return (
      
      <div>
        <Router>
          <Layout> 
            {this.state.loading ? <Model show={this.state.loading} >{loading}</Model> : null}
            <Switch>
              <Route exact path="/favorite" component={() => { return <Favorite removeFavoriteCity={this.removeFavoriteCity} citysData={this.state.citysData} /> }} />
              <Route exact path="/" component={() => { return <Homepage citysName={this.state.citysName} selectedCityHandler={this.selectedCityHandler} citysData={this.state.citysData} /> }} />
              <Route exact path="/selectedCity" component={() => { return <SelectedCity backToDefaultPage={this.backToDefaultPage} data={this.state.tempCityData} addFavorite={this.addFavorite} /> }} />
            </Switch>
          </Layout>
        </Router>
      </div>
    )
  }
}

