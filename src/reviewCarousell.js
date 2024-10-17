import React, { useState, useEffect } from "react";

const styles = `
  .carousel-container {
    position: relative;
    width: 90%;
    margin: 0 auto;
  }
  .review-card {
    background-color: #f3f4f6;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .review-card.fade-out {
    opacity: 0;
    transform: translateX(-20px);
  }
  .stars {
    color: #fbbf24;
    font-size: 24px;
    margin-bottom: 12px;
  }
  .review-text {
    margin-bottom: 16px;
  }
  .author-info {
    display: flex;
    align-items: center;
  }
  .author-initial {
    background-color: #065f46;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-right: 12px;
  }
  .author-name {
    font-weight: 600;
  }
  .review-date {
    color: #6b7280;
    font-size: 14px;
  }
  .google-logo {
    height: 24px;
    margin-top: 16px;
  }
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .prev-button { left: -20px; }
  .next-button { right: -20px; }
`;

const ReviewCard = ({ review, isFading }) => (
  <div className={`review-card ${isFading ? "fade-out" : ""}`}>
    <div className="stars">
      {"★".repeat(review.rating)}
      {"☆".repeat(5 - review.rating)}
    </div>
    <p className="review-text">{review.text}</p>
    <div className="author-info">
      <div className="author-initial">{review.author[0].toUpperCase()}</div>
      <div>
        <p className="author-name">{review.author}</p>
        <p className="review-date">{review.date}</p>
      </div>
    </div>
    <img
      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
      alt="Google"
      className="google-logo"
    />
  </div>
);

const GoogleReviewsCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const nextReview = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setIsFading(false);
    }, 300);
  };

  const prevReview = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
      );
      setIsFading(false);
    }, 300);
  };

  useEffect(() => {
    const intervalId = setInterval(nextReview, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="carousel-container">
        <ReviewCard review={reviews[currentIndex]} isFading={isFading} />
        <button onClick={prevReview} className="nav-button prev-button">
          &#8249;
        </button>
        <button onClick={nextReview} className="nav-button next-button">
          &#8250;
        </button>
      </div>
    </>
  );
};

// Sample reviews data
const sampleReviews = [
  {
    rating: 5,
    text: "Simon is such a friendly onwer a skilled craftsman. Lovely items. He has moved to the nearby Roxy Square.",
    author: "coty chan",
    date: "47 Weeks ago",
  },
  {
    rating: 5,
    text: "very nice owner with beautiful work, especially the glass pieces!",
    author: "naomi",
    date: "49 weeks ago",
  },
  {
    rating: 5,
    text: "Great product!",
    author: "Charmaine k",
    date: "49 weeks ago",
  },
];

const GoogleReviews = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>What our clients say!</h1>
      <GoogleReviewsCarousel reviews={sampleReviews} />
      <p style={{ textAlign: "center", marginBottom: "10%"}}>Powered by Web Wizards Wigets</p>
    </div>
  );
};

export default GoogleReviews;
