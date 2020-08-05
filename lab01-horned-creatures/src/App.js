import React, { Component } from 'react'
import Header from './Header.js'
import Imagelist from './Imagelist.js'
import Option from './Option.js'
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
            <div id="filter-section">
                <p>Filter by Keyword</p>
                <select onChange={this.handleFilterChange}>
                <Option images={images} />
                </select>
            </div>
            <Imagelist images={this.state.filter}/>
        </main>
        )
    }
}

