import React, { Component } from 'react'

export default class Tour extends Component {
    render() {
        const {id, city, img, name, info} = this.props.tour;
        const { removeTour } = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt=""/>
                    <span className="close-btn">
                        <i className="fas fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h3>{name}</h3>
                    info <span><i className="fas fa-caret-square-down"></i></span>
                    <p>{info}</p>
                </div>
            </article>
        )
    }
}
