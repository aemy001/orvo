// components/NoCodeOptions.js

import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className="container p-5">
  <div className="headings">
        <h6 className="text-primary mb-3 fw-bold blog-head">Build Meaningful Connections</h6>
      <h3 className="fw-bold mb-3">Smart Tools to Strengthen Customer Relationships</h3>
      <p className="text-muted mb-3">
      Orvo helps you manage leads, automate conversations, and track interactions—so you can focus on building real, lasting connections with your customers.
      </p>
  </div>

      <div className="row mt-4">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className={`card h-100 cardShadow`}>
            <div className="card-body">
              <img src="/images/blog.png" alt="Platforms" className="img-fluid mb-3" />
              <h5 className="card-title px-3">Use a pre-integrated platform</h5>
              <p className="card-text px-3">
                Explore our directory to find out-of-the-box solutions that connect with Stripe, 
                such as <a href="#">Squarespace</a> and <a href="#">Lightspeed</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className={`card h-100 cardShadow`}>
            <div className="card-body">
              <img src="/images/blog.png" alt="Experts" className="img-fluid mb-3" />
              <h5 className="card-title px-3">Build with Stripe-certified experts</h5>
              <p className="card-text px-3">
                Work with a Stripe consulting partner that can integrate and deploy Stripe solutions for you.
              </p>
              <a href="#" className="text-primary px-3">View partners →</a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className={`card h-100 cardShadow`}>
            <div className="card-body">
              <img src="/images/blog.png" alt="No Code UI" className="img-fluid mb-3" />
              <h5 className="card-title px-3">Try our no-code products</h5>
              <p className="card-text px-3">
                Create an <a href="#">invoice</a>, accept an <a href="#">in-person payment</a> with your phone, or 
                share a <a href="#">payment link</a> directly from your Dashboard to start generating revenue in minutes—
                no code required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
