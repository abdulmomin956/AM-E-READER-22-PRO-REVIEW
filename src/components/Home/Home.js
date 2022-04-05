import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'


const Home = () => {
    const [reviews, setReview] = useReviews();
    return (
        <main className='main'>
            <section className='main-part'>
                <div className='text-part'><h1>The best E-READER is <br /><span className='brand'>AM E-READER 22 PRO</span></h1>
                    <p>The Kids version improves on the Kindle Paperwhite’s great display, adjustable color temperature, even lighting, and waterproofing with a cover, a longer warranty, and no ads.</p>
                </div>
                <div>
                    <img src='image.jpg' alt="" />
                </div>
            </section>
            <section className='review-part'>
                <h2 style={{ textAlign: 'center' }}>Customer Reviews(3)</h2>
                <div className="reviews">
                    {
                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <button><Link to='/reviews'>See All Reviews</Link></button>
            </section>
        </main>

    );
};

export default Home;