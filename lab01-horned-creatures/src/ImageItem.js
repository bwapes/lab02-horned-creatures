import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <li>
                <h1>{this.props.src.title}</h1>
                <img src={this.props.src.url} alt={this.props.title} />
                <p> {this.props.src.description} </p>
            </li>
        )
    }
}
