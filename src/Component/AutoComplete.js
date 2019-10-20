import React, { Component } from 'react'
import './AutoComplete.css';


export default class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            text: ''
        }; 
    } 

    onTextChange = (e) => {
        const { citys } = this.props;
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`${value}`, 'i');
            suggestions = citys.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text:value }));
    }

    suggestionsSelected (value) {
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
        const {text} = this.state;
            
        

        return (
            <div className="autocomplete">
                <input value={text} onChange={this.onTextChange} type="text" placeholder="Tal Aviv" />
                {this.renderSuggestion()}
            </div>
        )
    }
}

