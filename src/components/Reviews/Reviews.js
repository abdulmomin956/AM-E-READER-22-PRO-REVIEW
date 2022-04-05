import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [data, setData] = useReviews();
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>All reviews of AM E-Reader 22 Pro</h1>
            <div className="reviews">
                {
                    data.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;