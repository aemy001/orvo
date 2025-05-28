import React from "react";
import Navbar from "../Components/Navbar/NavbarBlack";
import Footer from "../Components/Footer/Footer";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="container p-5 blog-view">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-8">
            <div className="blog-heading">
              <header>
                <h2>
                  {" "}
                  Introducing Stablecoin Financial Accounts in 101 countries
                </h2>
              </header>
            </div>
          </div>
          <section className="blog-post">
            <div className="row">
              <div className="col-md-4">
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <Image
                    src="/images/reviews/4.png"
                    alt="blog"
                    width={50}
                    height={50}
                    className="rounded-circle me-2 mt-2"
                  />
                  <span className="fw-bold">George Williams</span>
                </div>
              </div>
              <div className="col-md-8">
                <div className="blog-image">
                  <Image
                    src="/images/blogbanner.webp"
                    width={900}
                    height={450}
                    className="img-fluid rounded"
                    alt="Banner"
                  />
                </div>
                <div className="blog-post-content">
                  <p>
                    Earlier this month at Stripe Sessions, we announced
                    Stablecoin Financial Accounts—our largest effort to date in
                    expanding money management capabilities to businesses across
                    the globe. Entrepreneurs and businesses in 101 countries
                    previously unsupported by Stripe can now
                  </p>
                  <div>
                    <ul>
                      <li>Hold a dollar-denominated stablecoin balance </li>
                      <li>Send and receive US dollars via ACH or wire</li>
                      <li>Send and receive euros via SEPA</li>
                      <li>
                        Send and receive stablecoins globally across eight
                        blockchain networks
                      </li>
                    </ul>
                  </div>
                  <p>
                    Commerce has never been more global, with the cross-border
                    ecommerce market value expected to increase almost six-fold
                    from $2.8 trillion in 2023 to $16.4 trillion by 2032. But
                    while we’re seeing businesses sell into more countries than
                    ever before, money management continues to be far from
                    modern. Much of the world is subject to unstable currencies,
                    high FX fees, and unreliable financial
                    infrastructures—resulting in an unequal playing field when
                    running a global business.
                  </p>
                  <p>
                    We’re changing that with Stablecoin Financial Accounts. Now,
                    businesses in 101 countries can easily access a
                    dollar-denominated account, and move money on stablecoin or
                    established financial rails right from their Stripe
                    Dashboard. Businesses can also pay vendors in global reserve
                    currencies, reduce costs from inflation and currency
                    exchanges, and access the global financial system.
                  </p>
                  <p>
                    Stablecoin Financial Accounts are powered by Bridge—the
                    leading platform for stablecoin orchestration—which Stripe
                    acquired earlier this year. We’ve integrated Bridge’s
                    powerful APIs directly into Stripe, so that businesses can
                    sign up and start managing their global financial operations
                    with no code required.{" "}
                  </p>
                  <p>
                    We’re starting with stablecoin storage in USDC and support
                    for fiat transactions in USD and EUR. We’ll soon expand to
                    offer storage in USDB, Bridge’s own stablecoin, and we plan
                    to add more coins and fiat rails over time.{" "}
                  </p>
                  <p>
                    Stablecoin Financial Accounts are currently in preview with
                    businesses around the world. You can join the waitlist to
                    get access.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
