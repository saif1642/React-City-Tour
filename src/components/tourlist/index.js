import React, { Component } from 'react';
import Tour from '../tour';
import { tourData } from '../../tourData';
import './tourlist.scss';

export default class TourList extends Component {
    state = {
        tours: tourData
    };
    removeTour = (id) =>{
        console.log(id);
    }
    render() {
        const { tours } = this.state;
        return (
            <section className="tourlist">
                {
                    tours.map((tour) => (
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>
                    ))
                }
            </section>
        )
    }
}
