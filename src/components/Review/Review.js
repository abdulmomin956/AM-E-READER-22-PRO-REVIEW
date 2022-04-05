import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, text, rating } = props.review
    return (
        <div className='review'>
            <h2>Rating: {rating}</h2>
            <p>{text}</p>
            <p>{name}<span className='review-time'>1 day ago</span></p>
        </div>
    );
};

export default Review;