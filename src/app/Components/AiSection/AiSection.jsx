import React from "react";
// import {GlobeDemo} from './myglobedemo'
import "./ai.css";

function AISection() {
  return (
    <section className="ai ">
      <div className="ai-lines">
        <div className="tall">
          <div className="short"></div>
        </div>
      </div>
      <div className="row d-block">
        <div className="col-md-5">
          <div className="ai-content">
            <span className="ai-head">Built for smart relationship workflows</span>

            <div className="ai-title">
              <h2>Automate faster with intelligent and easy-to-integrate AI tools</h2>
            </div>

            <p className="ai-desc">
              Streamline your relationship management with ORVO AI — Sorin’s powerful automation engine. Whether you're transcribing calls or crafting emails, our AI does the heavy lifting so your team can focus on closing deals, building loyalty, and managing relationships smarter.Sorin blends voice understanding and communication automation into one intuitive CRM. Built to scale with startups and enterprises alike.
            </p>
          </div>
        </div>
        <div className="col-md-7">
          <div className="container"></div>
        </div>
      </div>
      <div className="ai-details col-md-12">
        <div className="box">
          <h4 className="head">Automate Emails with ORVO AI</h4>
          {/* <p className="desc">.Automate Emails with ORVO AI</p> */}
          <p className="desc">
    Streamline task assignment, tracking, and follow-ups—no manual work.
          </p>
        </div>

        <div className="box">
          <h4 className="head">Extend Sorin with Custom Apps</h4>
          {/* <p className="desc">ORVO AI Email Precision</p> */}
          <p className="desc">
           Add powerful plugins and tools tailored to your workflows.
          </p>
        </div>

        <div className="box">
          <h4 className="head">Automate Lead Flows with Smart Tasks</h4>
          {/* <p className="desc">Countries Engaged</p> */}
          <p className="desc">
         Streamline task assignment, tracking, and follow-ups—no manual work.
          </p>
        </div>

        <div className="box">
          <h4 className="head">Extend Sorin with Custom Apps</h4>
          {/* <p className="desc">Lead Conversion Speed</p> */}
          <p className="desc">
 Add powerful plugins and tools tailored to your workflows.
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

export default AISection;
