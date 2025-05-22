// components/Footer.js
import React from "react";
import "./Footer.css";
import AuroraBackground from "./aurorabg";

const Footer = () => {
  return (
       
    <footer className={"text-dark footerBg"}>
       <AuroraBackground showRadialGradient={true}>
      <div className="container">
        <div className="row text-center text-md-start p-4">
          {/* Logo */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
            <h4 className="fw-bold">LOGO</h4>
          </div>

          {/* Useful Links */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 custom-border px-5">
            <h6 className="fw-bold mb-3 links">Useful Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  Reviews
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="col-12 col-md-4 px-5">
            <h6 className="fw-bold mb-3">Help & support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  FAQS
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  Privacy policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  Analytics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        {/* Bottom Row */}
        <div className="row justify-content-center align-items-center text-center text-md-start p-5 gap-3">
          {/* <div className="col-12 col-md-4 mb-3 mb-md-0">
          
          </div> */}
          <div className="col-12 col-md-7 mb-3 mb-md-0 text-center justify-content-center d-flex gap-1 cborder ">
              <p className="mb-0 text-dark">
              &copy; 2023 Positivus. All Rights Reserved.
            </p>
         <div className="svg">
               <div className="me-2">
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15" cy="15.5" r="15" fill="black" />
                <path
                  d="M8.22154 22.5586H11.3056V12.5742H8.22154V22.5586Z"
                  fill="#ffffff"
                />
                <path
                  d="M7.94116 9.38672C7.94116 10.3711 8.73555 11.168 9.76359 11.168C10.7449 11.168 11.5393 10.3711 11.5393 9.38672C11.5393 8.40234 10.7449 7.55859 9.76359 7.55859C8.73555 7.55859 7.94116 8.40234 7.94116 9.38672Z"
                  fill="#ffffff"
                />
                <path
                  d="M19.8103 22.5586H22.9412V17.0742C22.9412 14.4023 22.3337 12.293 19.2028 12.293C17.7075 12.293 16.6795 13.1367 16.2589 13.9336H16.2122V12.5742H13.2683V22.5586H16.3524V17.6367C16.3524 16.3242 16.586 15.0586 18.2215 15.0586C19.8103 15.0586 19.8103 16.5586 19.8103 17.6836V22.5586Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <div className="me-2">
             
<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 15.5913C30 7.25456 23.2863 0.5 15 0.5C6.71371 0.5 0 7.25456 0 15.5913C0 23.1369 5.44355 29.4047 12.6411 30.5V19.9726H8.83064V15.5913H12.6411V12.3053C12.6411 8.53245 14.879 6.40264 18.2661 6.40264C19.9597 6.40264 21.6532 6.7069 21.6532 6.7069V10.4189H19.7782C17.9032 10.4189 17.2984 11.5751 17.2984 12.7921V15.5913H21.4718L20.8065 19.9726H17.2984V30.5C24.496 29.4047 30 23.1369 30 15.5913Z" fill="black"/>
</svg>

            </div>
            <div className="me-2">
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15.5" r="15" fill="black"/>
<path d="M21.9961 11.9915C22.6854 11.4745 23.3058 10.8541 23.7884 10.1303C23.168 10.406 22.4442 10.6128 21.7204 10.6818C22.4786 10.2337 23.0301 9.54435 23.3058 8.68267C22.6165 9.09628 21.8238 9.40648 21.031 9.57881C20.3417 8.85501 19.4111 8.44141 18.3771 8.44141C16.378 8.44141 14.758 10.0614 14.758 12.0604C14.758 12.3362 14.7925 12.6119 14.8614 12.8876C11.8628 12.7153 9.1744 11.2677 7.38212 9.09628C7.07192 9.61328 6.89959 10.2337 6.89959 10.923C6.89959 12.1638 7.51999 13.2668 8.51953 13.9216C7.93359 13.8872 7.34766 13.7493 6.86512 13.4736V13.508C6.86512 15.2659 8.10593 16.7135 9.76034 17.0581C9.48461 17.1271 9.13994 17.196 8.82973 17.196C8.58847 17.196 8.38166 17.1615 8.1404 17.1271C8.58847 18.5747 9.93267 19.6087 11.5182 19.6432C10.2773 20.6082 8.72633 21.1942 7.03745 21.1942C6.72725 21.1942 6.45152 21.1597 6.17578 21.1252C7.76126 22.1592 9.65694 22.7452 11.725 22.7452C18.3771 22.7452 21.9961 17.2649 21.9961 12.474C21.9961 12.3017 21.9961 12.1638 21.9961 11.9915Z" fill="white"/>
</svg>

            </div>
         </div>
          </div>
          <div className="col-12 col-md-4 text-center">
            <a href="" className="email">
              {" "}
              office@getorvo.com{" "}
            </a>
          </div>
        </div>
      </div>
         </AuroraBackground>
    </footer>
 
  );
};

export default Footer;
