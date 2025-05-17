"use client"
import React,{ useState } from 'react'
import Image from "next/image";
import './faqs.css'

const FAQS = ({ data }) => {
  // const [openIndex, setOpenIndex] = useState(null);
const [openIndex, setOpenIndex] = useState(0); 
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
   <>
   <section className='faqs'>
<h3 className='text-center'>Frequently Asked Questions</h3>
  <div className="container mt-4">
      <div className="row">
        {[0, 1].map((col) => (
          <div className="col-md-6" key={col}>
            {data
              .filter((_, idx) => idx % 2 === col)
              .map((item, index) => {
                const actualIndex = col + index * 2;
                const isOpen = openIndex === actualIndex;

                return (
                  <div className="card mb-4" key={actualIndex}>
                    <div
                      className="card-header d-flex align-items-center"
                      onClick={() => toggle(actualIndex)}
                      style={{ cursor: "pointer" }}
                    >
                         <span>
                        {isOpen ? (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.8"
                              y="7.5"
                              width="18"
                              height="3"
                              rx="1.5"
                              fill="#1B1139"
                            />
                            <rect
                              opacity="0.8"
                              x="10.5"
                              width="18"
                              height="3"
                              rx="1.5"
                              transform="rotate(90 10.5 0)"
                              fill="#1B1139"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="22"
                            height="3"
                            viewBox="0 0 22 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.8"
                              width="22"
                              height="3"
                              rx="1.5"
                              fill="#52BD95"
                            />
                          </svg>
                        )}
                      </span>
                      <h5 className="mb-0">{item.title}</h5>
                   
                    </div>
                    {isOpen && (
                      <div className="card-body">
                        <p>{item.content}</p>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </div>
   </section>
   </>

  )
}

export default FAQS
