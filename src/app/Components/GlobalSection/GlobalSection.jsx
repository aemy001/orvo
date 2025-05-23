import React from "react";
// import {GlobeDemo} from './myglobedemo'
// import Globe from '../Globe/Globe'
import "./globe.css";
import dynamic from "next/dynamic";

const GlobeComponent = dynamic(() => import("../Globe/Globe"), {
  ssr: false,
});

function Global() {
  return (
    <section className="global ">
      <div className="global-lines">
        <div className="tall">
          <div className="short"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 col-lg-5">
          <div className="global-content">
            <span className="global-head">Global Reach</span>

            <div className="global-title">
              <h2>The backbone for modern relationship management</h2>
            </div>

            <p className="global-desc">
              Sorin empowers businesses to build, manage, and grow lasting
              customer relationships at scale. Our intelligent platform
              centralizes interactions, automates communication, and delivers
              real-time insights—helping teams across the globe stay connected,
              productive, and aligned with every client touchpoint.
            </p>
          </div>
        </div>
        <div className="col-md-7 col-lg-7">
          <div className="globe-wrapper">
    <GlobeComponent />
  </div>
        </div>
      </div>
      <div className="global-details col-md-12">
        <div className="box">
          <h4 className="head">1.1M+</h4>
          <p className="desc">Smart Tasks Automated</p>
          <p className="desc">
            Over one million tasks assigned, prioritized, and completed each
            month through AI workflows.
          </p>
        </div>

        <div className="box">
          <h4 className="head">95%</h4>
          <p className="desc">ORVO AI Email Precision</p>
          <p className="desc">
            Emails generated with 95% accuracy, helping teams communicate
            clearly and efficiently.
          </p>
        </div>

        <div className="box">
          <h4 className="head">37+</h4>
          <p className="desc">Countries Engaged</p>
          <p className="desc">
            Sorin is trusted by professionals in 70+ countries to streamline
            client interactions daily.
          </p>
        </div>

        <div className="box">
          <h4 className="head">4.3X Faster</h4>
          <p className="desc">Lead Conversion Speed</p>
          <p className="desc">
            Respond to leads three times faster using real-time Kanban boards
            and instant alerts.
          </p>
        </div>
      </div>
       <div className="terminal-lines">
                <div className="tall1">
                    <div className="short1"></div>
                </div>
            </div>
    </section>
  );
}

export default Global;
