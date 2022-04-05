import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, text, rating } = props.review
    return (
        <div className='review'>
            <h2>{name}<span className='review-time'>1 day ago</span></h2>
            <p>{text}</p>
            <h3>Rating: {rating}</h3>
        </div>
    );
};

export default Review;