// ReviewSlider.jsx
'use client'
import { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import ReviewCard from '../ReviewCard/ReviewCard';
import './ReviewSlide.css'

const reviews = [
  {
    title: 'I finally found a CRM that works the way I do.',
    description: 'Intuitive, customizable, and beautifully designed—it’s a game-changer!',
    rating: 4,
    image: '/images/reviews/1.jpg',
    name: 'Sarah Johnson',
    position: 'Marketing Manager, Meta',
  },
  {
    title: 'We use this tool to share everything within our company.',
    description: 'It has simplified and allowed us to save tens of hours! Really a life changer',
    rating: 5,
    image: '/images/reviews/1.jpg',
    name: 'Sam Osborne',
    position: 'Procurement Director, TechCorp',
  },
  {
    title: 'Orvo is crucial for me to get my notes organized.',
    description: 'From my courses, my social circle, and my professional network.',
    rating: 4,
    image: '/images/reviews/1.jpg',
    name: 'Andrew Ling',
    position: 'Duke University, Student',
  },
  {
    title: 'This CRM helps keep my relationships on track.',
    description: 'Being a successful sales lead is keeping your customers happy. Orvo is like your personal database.',
    rating: 5,
    image: '/images/reviews/1.jpg',
    name: 'Nick George',
    position: 'Regional Sales US East, SalesCo',
  },
];

export default function ReviewSlider() {
 const progressBarRef = useRef(null);
  const progressLabelRef = useRef(null);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => {
      const totalSlides = reviews.length - 1;
      const calc = (next / totalSlides) * 100;

      if (progressBarRef.current) {
        progressBarRef.current.style.backgroundSize = `${calc}% 100%`;
        progressBarRef.current.setAttribute('aria-valuenow', calc.toString());
      }

      if (progressLabelRef.current) {
        progressLabelRef.current.textContent = `${Math.round(calc)}% completed`;
      }
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="reviewslider" id="reviews">
  <div className="container ">
      <h3 className="text-center mb-4">Hear From Those Who Trust Us</h3>
      <p className='text-center'>Real stories and feedback from people who rely on our solutions.</p>
    <Slider {...settings}>
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </Slider>
     <div
          className="slider-progress"
          ref={progressBarRef}
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="slider__label sr-only" ref={progressLabelRef}></span>
        </div>
  
    </div>
    
    </section>

   
  );
}
