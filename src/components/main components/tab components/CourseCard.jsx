import React, { Component } from "react";

import '../../../css/main/courses.css';

export default class CourseCard extends Component {
    state = this.props.card;

    render() {
        return (
            <div className="item">
                <div className="courses-card">
                    <div className="card-img"> <img src={this.state.image} alt="thumbnail" /></div>
                    <h3><a href="#"> {this.state.title} </a></h3>
                    <div className="card-author">
                        <span> {this.state.author} </span>
                    </div>
                    <div className="card-review">
                        <span>
                            <span>{this.state.rating} </span>
                            <span className="card-review--star">
                                {[...Array(Math.round(this.state.rating))].map(_ => <i className="fa-solid fa-star"></i>)}
                            </span>
                            <span> {this.state.reviews_number}</span>
                        </span>
                    </div>
                    <div className="card--price">
                        <span>{this.state.price}</span>
                    </div>
                </div>
            </div>
        );
    }
}