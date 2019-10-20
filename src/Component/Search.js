import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false
        }
    }

    toggleIsHidden () {
        this.setState((currentState) => ({
            isHidden: !currentState.isHidden, 
        }))
    }


    render() {


        return (
            <div>
                <button onClick={() => this.toggleIsHidden()}>Toggle</button>
                {!this.state.isHidden && this.props.text}
            </div>
        )
    }
}
