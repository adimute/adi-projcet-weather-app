import React, { Component } from 'react'
import './Search.css';
import axios from '../../../axsios-orders';


export default class AutoComplete extends Component {

        
        state = {
            suggestions: [],
            text: '',
            citysName : this.props.citysName,
            selectedCity: {}
        }; 
     

    onTextChange = (e) => {
        const citys  = this.props.citysName;
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`${value}`, 'i');
            suggestions = citys.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text:value }));
    }

    suggestionsSelected (value) {

        const citysdata = this.props.citysData;
        for (let i = 0; i < citysdata.length; i++){ 
            if(value === citysdata[i].EnglishName) {
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
                {suggestions.map((city) => <li onClick={() => this.suggestionsSelected(city)}>{city}</li>)}
            </ul>
        );
    }


    render() {
        const { text } = this.state;
        
        const inputStyle = {
            display: 'flex',
            alignItems: 'center',
        }

        return (
            <div className="autocomplete">
            <input style={inputStyle} value={text} onChange={this.onTextChange} type="text" placeholder="Tal Aviv"/>
                {this.renderSuggestion()}
            </div>
        )
    }
}