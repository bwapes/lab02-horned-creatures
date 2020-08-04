import React, { Component } from 'react'
import Header from './Header.js'
import Imagelist from './Imagelist.js'
import Select from './select.js'
import './App.css';

import images from './data.js'

export default class App extends Component {
    state = {
        filter: images
    }

    handleFilterChange = (e) => {
        const filterResult = e.target.value
        this.setState({filter: images.filter(image => image.keyword === filterResult)})
    }


    render() {
        return (
        <main>
            <Header />
            <select onChange={this.handleFilterChange}>
            <Select images={images} />
            </select>
            <Imagelist images={this.state.filter}/>
        </main>
        )
    }
}

