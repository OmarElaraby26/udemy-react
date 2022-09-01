import React, { Component } from 'react';

export default class CategoryCard extends Component {
    state = this.props.card;

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="category-card">
                    <a href="#">
                        <div className="category-card-img">
                            <img src={this.state.image} alt="design" />
                        </div>
                        <div className="category-card-title">
                            <span>{this.state.title}</span>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}