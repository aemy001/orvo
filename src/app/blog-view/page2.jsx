import React from 'react'
import Navbar from '../Components/Navbar/NavbarBlack'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <Navbar />
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Left Sidebar (Author Info) */}
            <div className="col-md-1 d-none d-md-flex flex-column align-items-center">
              <Image
                src="/images/reviews/1.jpg" 
                width={40}
                height={40}
                className="rounded-circle mb-2"
                alt="Author"
              />
              <small className="text-muted">John Egan</small>
              <small className="text-muted">Crypto</small>
            </div>

            {/* Main Blog Content */}
            <div className="col-md-11">
              <div className="blog-heading mb-3">
                <h2 className="fw-bold">
                  Introducing Stablecoin Financial Accounts in 101 countries
                </h2>
                <p className="text-muted mb-4">May 20, 2025</p>
              </div>

              {/* Blog Banner Image */}
              <div className="blog-post mb-4">
                <Image
                  src="/images/blogbanner.webp" 
                  width={900}
                  height={450}
                  className="img-fluid rounded"
                  alt="Banner"
                />
              </div>

              {/* Blog Content */}
              <div className="blog-content">
                <p>
                  Earlier this month at <a href="#">Stripe Sessions</a>, we announced Stablecoin Financial Accounts—our
                  largest effort to date in expanding money management capabilities to businesses across the globe.
                  Entrepreneurs and businesses in 101 countries previously unsupported by Stripe can now:
                </p>

                <ul>
                  <li>Hold a dollar-denominated stablecoin balance</li>
                  <li>Send and receive US dollars via ACH or wire</li>
                  <li>Send and receive euros via SEPA</li>
                  <li>Send and receive stablecoins globally across eight blockchain networks</li>
                </ul>

                <p>
                  Commerce has never been more global, with the cross-border ecommerce market value expected to increase
                  almost six-fold from $2.8 trillion in 2023 to $16.4 trillion by 2032. But while we’re seeing businesses
                  sell into more countries than ever before, money management continues to be far from modern. Much of the
                  world is subject to unstable currencies, high FX fees, and unreliable financial infrastructures—resulting
                  in an unequal playing field when running a global business.
                </p>

                <p>
                  We’re changing that with Stablecoin Financial Accounts. Now, businesses in 101 countries can easily access
                  a dollar-denominated account, and move money on stablecoin or established financial rails right from their
                  Stripe Dashboard. Businesses can also pay vendors in global reserve currencies, reduce costs from inflation
                  and currency exchanges, and access the global financial system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
