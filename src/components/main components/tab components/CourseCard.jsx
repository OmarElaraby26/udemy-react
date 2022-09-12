import React, { Component } from "react";

import '../../../css/components/main/courses.css';

function CourseCard(props) {
    const [image, setImage] = React.useState(props.card.image);
    const [title, setTitle] = React.useState(props.card.title);
    const [author, setAuthor] = React.useState(props.card.author);
    const [rating, setRating] = React.useState(props.card.rating);
    const [reviews_number, setReviews_number] = React.useState(props.card.reviews_number);
    const [price, setPrice] = React.useState(props.card.price);
    const [link, setLink] = React.useState(props.card.link);


    return (
        <div className="item">
            <div className="courses-card">
                <div className="card-img"> <img src={image} alt="thumbnail" /></div>
                <h3><a href={link}> {title} </a></h3>
                <div className="card-author">
                    <span> {author} </span>
                </div>
                <div className="card-review">
                    <span>
                        <span>{rating} </span>
                        <span className="card-review--star">
                            {[...Array(Math.max(1, Math.round(rating)))].map(_ => <i className="fa-solid fa-star"></i>)}
                        </span>
                        <span> {reviews_number}</span>
                    </span>
                </div>
                <div className="card--price">
                    <span>{price}</span>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;