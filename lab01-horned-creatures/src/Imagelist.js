import React, { Component } from 'react'
import ImageItem from './ImageItem.js'

export default class Imagelist extends Component {
    render() {
        return (
            <ul id="animal-list">
                {this.props.images.map(animal => (
                    <ImageItem key={animal.title} src={animal}/>
                ))}
            </ul>
        )
    }
}
