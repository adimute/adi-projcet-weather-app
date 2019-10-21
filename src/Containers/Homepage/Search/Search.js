import React, { Component } from 'react'
import './Search.css';
import { Link } from 'react-router-dom'
import Model from '../../../Component/UI/Model/Model'
 


export default class AutoComplete extends Component {


    state = {
        suggestions: [],
        text: '',
        citysName: this.props.citysName,
        selectedCity: {},
        error: false
    };


    onTextChange = (e) => {
        const citys = this.props.citysName;
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`${value}`, 'i');
            suggestions = citys.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text: value }));
    }


    suggestionsSelected(value) {
        const citysdata = this.props.citysData;
        for (let i = 0; i < citysdata.length; i++) {
            if (value === citysdata[i].EnglishName) {
                console.log(citysdata[i].EnglishName)
                this.props.selectedCityHandler(citysdata[i])
            }
        }
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }


    renderSuggestion() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((city) => <Link to='/selectedCity' ><li onClick={() => this.suggestionsSelected(city)}>{city}</li></Link>)}            </ul>
        );
    }

    checkSearchContent = () => {
        this.setState({
            error: true,
            text: ''
        })
    }



    render() {
        const { text } = this.state;


        const btnStyle ={
            boxSizing: 'border-box',
            display: 'block',
            border: 'none',
            width: '100%',
            textDecoration: 'none',
            color: '#5eb7b7',
            fontFamily: "'Courier New', Courier, monospace",
            outline: 'none',
            outlineStyle: 'none',
            fontWeight: 'bold',
        }

        const searchButton ={
            display: 'block',
            border: 'none',
            color: '#5eb7b7',
            outline: 'none',
            outlineStyle: 'none',
            float: 'right',
            marginTop: '-35px'

            }
        

        const errorMassege = (
            <div>
                <h6>Somethig went worng :[ </h6>
                <p><b>Hint</b> - Use autocomplete for better resultes</p>
                <button style={btnStyle} onClick={() => this.setState({ error: false })}>Let's try again...</button>
            </div>
        )

        let buttoncheck = null;
        buttoncheck = (
            <button class="btn btn-link" style={searchButton} onClick={this.checkSearchContent} ><span>&#128269;</span></button>
        )

        let userSearchWord = this.state.text
        const citysdata = this.props.citysData
        for (let i = 0; i < citysdata.length; i++) {

            if (userSearchWord === citysdata[i].EnglishName) {
                buttoncheck = (
                    <Link to='/selectedCity' ><button style={searchButton} onClick={() => this.props.selectedCityHandler(citysdata[i])}></button></Link>
                )
                break;
            }
        }


        const inputStyle = {
            display: 'flex',
            alignItems:'center',
            color: '#dbdbdb',
            height: '40px',

        }        


        
        return (
            <div className="autocomplete">
                    <Model show={this.state.error} >{errorMassege}</Model>
                    <input style={inputStyle} value={text} onChange={this.onTextChange} type="text" placeholder="  Tal Aviv..." />
                    {this.renderSuggestion()}
                    {buttoncheck}
                </div>
        )
    }
}


