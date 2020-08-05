import React, { Component } from 'react'

export default class Option extends Component {
    state = {
        filterResult: '',
    }

    handleChange = (e) => {
        this.setState({filterResult: e.target.value})
        console.log(this.state.filterResult)
    }

    render() {
        return (
            <>
            {this.props.images.map(animal => <option key={animal.title} value={animal.keyword}>{animal.keyword}</option>)}
          </>
        )
    }
}
