import React from 'react';
import { nanoid } from 'nanoid';

const Footer = () => {
  // Static hardcoded data
  const brand = [
    { type: 'logo', src: <img src="/logo.svg" alt="Logo" /> },
    {
      type: 'location',
      icon: <span role="img" aria-label="location">📍</span>,
      currentLocation: 'New York, USA',
    },
    {
      type: 'language',
      icon: <span role="img" aria-label="language">🌐</span>,
      currentLanguage: 'English',
    },
    {
      type: 'commerce',
      icon: <span role="img" aria-label="cart">🛒</span>,
      text: 'Shop Now',
    },
  ];

  const products = [
    { name: 'Product 1', href: '/products/1' },
    { name: 'Product 2', href: '/products/2' },
    { name: 'Product 3', href: '/products/3' },
  ];

  const solutions = [
    { name: 'Solution A', href: '/solutions/a' },
    { name: 'Solution B', href: '/solutions/b' },
  ];

  const customSolutions = [
    { name: 'Custom 1', href: '/custom/1' },
    { name: 'Custom 2', href: '/custom/2' },
  ];

  const developers = [
    { name: 'Developer Docs', href: '/developers/docs' },
    { name: 'API Reference', href: '/developers/api' },
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Help Center', href: '/help' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="footer">
      <div className="tall-left">
        <div className="short-left"></div>
      </div>
      <div className="tall-right">
        <div className="short-right"></div>
      </div>
      <div className="footer-content">
        <div className="footer-content__brand">
          <div className="footer-content__brand-logo">
            {brand
              .filter((br) => br.type === 'logo')
              .map((br) => (
                <div key={nanoid()}>{br.src}</div>
              ))}
          </div>

          <div className="footer-content__brand-location">
            {brand
              .filter((br) => br.type === 'location')
              .map((br) => (
                <button key={nanoid()}>
                  <span>{br.icon}</span>
                  <span>{br.currentLocation}</span>
                </button>
              ))}
          </div>

          <div className="footer-content__brand-language">
            {brand
              .filter((br) => br.type === 'language')
              .map((br) => (
                <button key={nanoid()}>
                  <span>{br.icon}</span>
                  <span>{br.currentLanguage}</span>
                </button>
              ))}
          </div>

          <div className="footer-content__brand-commerce">
            {brand
              .filter((br) => br.type === 'commerce')
              .map((br) => (
                <div key={nanoid()}>
                  <span>{br.icon}</span>
                  <span>{br.text}</span>
                </div>
              ))}
          </div>
        </div>

        <div className="center-links">
          <div className="footer-content__links">
            <div className="footer-content-box">
              <h4>Products</h4>
              <ul className="footer-content__products">
                {products.map((product) => (
                  <li key={nanoid()}>
                    <a href={product.href}>{product.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-content-box">
              <h4>Solutions</h4>
              <ul className="footer-content__solutions">
                {solutions.map((solution) => (
                  <li key={nanoid()}>
                    <a href={solution.href}>{solution.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-content-box">
              <h4>Integrations & CustomSolutions</h4>
              <ul className="footer-content__customSolutions">
                {customSolutions.map((custom) => (
                  <li key={nanoid()}>
                    <a href={custom.href}>{custom.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-content-box">
              <h4>Developers</h4>
              <ul className="footer-content__developers">
                {developers.map((developer) => (
                  <li key={nanoid()}>
                    <a href={developer.href}>{developer.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-content-box">
              <h4>Resources</h4>
              <ul className="footer-content__resources">
                {resources.map((resource) => (
                  <li key={nanoid()}>
                    <a href={resource.href}>{resource.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-content-box">
              <h4>Company</h4>
              <ul className="footer-content__company">
                {company.map((co) => (
                  <li key={nanoid()}>
                    <a href={co.href}>{co.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
