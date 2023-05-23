import React, { useState } from 'react';
import './Reviews.css';
import NavBar from '../NavBar';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      const newReview = {
        name,
        comment,
        date: new Date().toLocaleDateString(),
      };
      setReviews([...reviews, newReview]);
      setName('');
      setComment('');
    }
  };

  const handleDelete = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  return (
    <div>
    <NavBar/>
    <div className="review-page">
    
      <div className="review-form">
        <h1>Review Page</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Write your review"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button type="submit">Submit Review</button>
        </form>
      </div>
      <div className="review-list">
        <h2>Submitted Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div className="review" key={index}>
              <h3>{review.name}</h3>
              <p>{review.comment}</p>
              <span>{review.date}</span>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default ReviewPage;