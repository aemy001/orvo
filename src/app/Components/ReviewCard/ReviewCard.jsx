// ReviewCard.jsx
'use client'
import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import './ReviewCard.css';

export default function ReviewCard({ review }) {
  return (
    <motion.div
      className={`card border-0 shadow-sm rounded-4 overflow-hidden m-auto cardResponsive`}
      style={{ transition: 'transform 0.3s ease-in-out' }}
    >
      <div className="rounded-2 gradient">
        <div className="bg-white rounded-2 position-relative card23">
          <div className="p-bg">
            <p className="fw-bold fs-6 text-dark mb-1 p">“{review.title}”</p>
            <p className="text-muted small mb-4 p">{review.description}</p>
          </div>
          <div className="d-flex gap-1 position-absolute bottom-0 end-0 p-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                fill={i < review.rating ? '#f97316' : 'none'}
                color={i < review.rating ? '#f97316' : '#e5e7eb'}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center gap-3 border-top name">
        <Image
          src={review.image}
          alt={review.name}
          width={44}
          height={44}
          className="rounded-circle object-fit-cover"
        />
        <div>
          <p className="fw-semibold mb-0">{review.name}</p>
          <span className="text-muted small mb-0">{review.position}</span>
        </div>
      </div>
    </motion.div>
  );
}
