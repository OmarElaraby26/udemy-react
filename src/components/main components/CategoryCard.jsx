import React, { Component } from 'react';

function CategoryCard(props) {
    const [state, setState] = React.useState(props.card);

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="category-card">
                <a href="#">
                    <div className="category-card-img">
                        <img src={state.image} alt="design" />
                    </div>
                    <div className="category-card-title">
                        <span>{state.title}</span>
                    </div>
                </a>
            </div>
        </div>
    );
}


export default CategoryCard;