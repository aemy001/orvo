import React from 'react'
import Image from "next/image";
import Button from '../Button/Button';
import './pricing.css'

const Pricing = () => { 
     const plans = [
    {
      title: "For Teams",
      subtitle: "/Monthly",
      description: "Take Your Business to the Next Level with Business Plan.",
      price: "$56",
      features: [
        "Advanced Marketing Tools",
        "Customizable Templates",
        "Multi-user Access",
        "Third-party Integrations",
        "24/7 Priority Support",
      ],
    },
    {
      title: "For Individuals",
      subtitle: "/Monthly",
      description: "Take Your Business to the Next Level with Business Plan.",
      price: "$56",
      features: [
        "Advanced Marketing Tools",
        "Customizable Templates",
        "Multi-user Access",
        "Third-party Integrations",
        "24/7 Priority Support",
      ],
    },
  ];
  return (
  <>
  <section className='pricing'>
<h3 className='text-center'>Find Your Perfect Plan</h3>
<p className='text-center'>Discover the ideal plan to fuel your business growth. Our pricing options are carefully crafted to cater to businesses.
Have a secure payment with 7 days refund policy</p>
  <div className="container my-5">
      <div className="row justify-content-center">
        {plans.map((plan, idx) => (
          <div className="col-md-5 mx-2 mb-4" key={idx}>
            <div className="card border-0 p-5 rounded-4">
              <div className="mb-3">
                <img
                  src="/images/PricingIcon.png"
                  alt="icon"
                  width="40"
                  height="40"
                  className="mb-2"
                />
                <h3 className="fw-bold">
                  {plan.title}{" "}
                  <span className="text-muted fs-6">{plan.subtitle}</span>
                </h3>
                <p className="text-muted">{plan.description}</p>
               <div className="d-flex gap-2 align-items-end">
                 <h2 className="fw-bold">{plan.price}</h2>
                <p className="text-muted">per month</p>
               </div>
              </div>
              <hr />
              <ul className="list-unstyled">
                {plan.features.map((feature, i) => (
                  <li className="mb-2 d-flex gap-3 align-items-center" key={i}>
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.6 8.1999C10.35 15.5499 12.1 15.1999 18.75 1.8999" stroke="#1B223C" stroke-width="2" stroke-linecap="round"/>
</svg> {feature}
                  </li>
                ))}
              </ul>
              <button className="btn w-100 mt-4">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  </>
  )
}

export default Pricing
