import React from "react";
import Image from "next/image";
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
          {/* <Image width={32} height={32} src="/images/ai/VoiceAssistant.svg" className="img"/> */}
          <svg width="32" height="32" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.45486 9.68421C6.96176 9.68421 8.18228 8.27105 8.18228 6.52632C8.18228 4.78158 6.96176 3.36842 5.45486 3.36842C3.94795 3.36842 2.72743 4.78158 2.72743 6.52632C2.72743 8.27105 3.94795 9.68421 5.45486 9.68421ZM5.45486 4.94737C6.2049 4.94737 6.81857 5.65789 6.81857 6.52632C6.81857 7.39474 6.2049 8.10526 5.45486 8.10526C4.70481 8.10526 4.09114 7.39474 4.09114 6.52632C4.09114 5.65789 4.70481 4.94737 5.45486 4.94737ZM5.45486 11.2632C3.6343 11.2632 0 12.3211 0 14.4211V16H10.9097V14.4211C10.9097 12.3211 7.27541 11.2632 5.45486 11.2632ZM1.5 14C1.65001 13.4316 3.62066 12.8421 5.45486 12.8421C7.29587 12.8421 9.36363 13.4395 9.5 14H5L1.5 14ZM9.60055 4.98684C10.1733 5.91842 10.1733 7.12632 9.60055 8.05789L10.7461 9.39211C12.1234 7.79737 12.1234 5.38947 10.7461 3.65263L9.60055 4.98684ZM13.003 1L11.8916 2.28684C13.7803 4.67105 13.7803 8.25526 11.8916 10.7658L13.003 12.0526C15.6623 8.98158 15.6691 4.19737 13.003 1Z" fill="#00d4ff"/>
<path d="M23 14C24.1 14 25 13.1 25 12V2C25 0.9 24.1 0 23 0H7C5.9 0 5 0.9 5 2V12C5 13.1 5.9 14 7 14H3V16H27V14H23ZM7 2H23V12H7V2Z" fill="#00d4ff" fill-opacity="0.4"/>
</svg>
          <h4 className="head">Automate Emails with ORVO AI</h4>
          {/* <p className="desc">.Automate Emails with ORVO AI</p> */}
          <p className="desc">
Generate smart, context-aware emails in seconds using AI.          </p>
        </div>

        <div className="box">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 6H6C4.9 6 4.01 6.9 4.01 8L4 20C4 21.1 4.9 22 6 22H22C23.1 22 24 21.1 24 20V8C24 6.9 23.1 6 22 6Z" fill="#00d4ff" fill-opacity="0.2"/>
<path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#00d4ff"/>
</svg>

                    {/* <Image width={32} height={32} src="/images/ai/Mail.svg" className="img"/> */}
          <h4 className="head">Transcribe Voicemails Instantly</h4>
          {/* <p className="desc">ORVO AI Email Precision</p> */}
          <p className="desc">
       ORVO AI converts voice interactions into clear, searchable transcripts.
          </p>
        </div>

        <div className="box">
          <svg width="32" height="32" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3496 14.129C19.4761 13.9979 19.5961 13.8547 19.7132 13.6946C19.8268 13.5393 19.9303 13.3767 20.0116 13.213L21.5909 13.1825C21.7309 13.1799 21.8518 13.067 21.8676 12.93L22.0822 10.6224C22.1001 10.4721 21.9995 10.3474 21.8642 10.3016L20.3243 9.90062C20.2082 9.53485 20.0558 9.18732 19.8449 8.85684L20.5656 7.49359C20.6307 7.3626 20.5906 7.20756 20.4702 7.12051L18.5433 5.7277C18.4229 5.64065 18.2672 5.65423 18.162 5.7562L17.0801 6.85831C16.6989 6.76078 16.3108 6.72507 15.9336 6.7269L15.075 5.39413C14.993 5.27551 14.8391 5.22366 14.7009 5.2869L12.5644 6.20534C12.4296 6.26373 12.3575 6.40442 12.4081 6.54491L12.8661 8.048C12.7346 8.17545 12.5974 8.3211 12.4874 8.47154C12.3774 8.62199 12.2704 8.78939 12.189 8.95312L10.6097 8.9836C10.4697 8.98626 10.3488 9.09916 10.333 9.23612L10.1184 11.5437C10.1006 11.694 10.2012 11.8187 10.3364 11.8645L11.8763 12.2655C11.9924 12.6313 12.1448 12.9788 12.3557 13.3093L11.635 14.6725C11.575 14.8071 11.61 14.9586 11.7304 15.0456L13.6573 16.4384C13.7777 16.5255 13.9384 16.5155 14.0386 16.4099L15.1206 15.3078C15.5018 15.4053 15.8863 15.4459 16.267 15.4392L17.1256 16.772C17.2077 16.8906 17.3615 16.9425 17.4998 16.8792L19.6413 15.9644C19.7796 15.9012 19.8432 15.7617 19.7975 15.6248L19.3496 14.129ZM14.8229 12.8302C13.8293 12.112 13.5913 10.7382 14.2939 9.7773C14.9964 8.81639 16.3842 8.61778 17.3777 9.33595C18.3713 10.0541 18.6093 11.4279 17.9068 12.3888C17.2042 13.3497 15.8164 13.5483 14.8229 12.8302Z" fill="#00d4ff" fill-opacity="0.4"/>
<path d="M10.6207 5.51984C11.55 5.51984 12.3103 6.27584 12.3103 7.19984C12.3103 8.12384 11.55 8.87984 10.6207 8.87984C9.69137 8.87984 8.93103 8.12384 8.93103 7.19984C8.93103 6.27584 9.69137 5.51984 10.6207 5.51984ZM10.6207 13.0798C12.9017 13.0798 15.5207 14.1634 15.6896 14.7598V15.5998H5.55172V14.7682C5.72068 14.1634 8.33965 13.0798 10.6207 13.0798ZM10.6207 3.83984C8.75361 3.83984 7.24137 5.34344 7.24137 7.19984C7.24137 9.05624 8.75361 10.5598 10.6207 10.5598C12.4877 10.5598 14 9.05624 14 7.19984C14 5.34344 12.4877 3.83984 10.6207 3.83984ZM10.6207 11.3998C8.36499 11.3998 3.86206 12.5254 3.86206 14.7598V17.2798H17.3793V14.7598C17.3793 12.5254 12.8764 11.3998 10.6207 11.3998Z" fill="#00d4ff"/>
</svg>

           {/* <Image width={32} height={32} src="/images/ai/Leads.svg" className="img"/> */}
          <h4 className="head">Automate Lead Flows with Smart Tasks</h4>
          {/* <p className="desc">Countries Engaged</p> */}
          <p className="desc">
       Streamline task assignment, tracking, and follow-ups—no manual work.
          </p>
        </div>

        <div className="box">
          <svg width="32" height="32" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 6L23.5 12V22C23.5 23.1 22.6 24 21.5 24H10.49C9.39 24 8.5 23.1 8.5 22L8.51 8C8.51 6.9 9.4 6 10.5 6H17.5ZM16.5 13H22L16.5 7.5V13Z" fill="#00d4ff" fill-opacity="0.3"/>
<path d="M15.5 5H8.5C7.4 5 6.51 5.9 6.51 7L6.5 21C6.5 22.1 7.39 23 8.49 23H19.5C20.6 23 21.5 22.1 21.5 21V11L15.5 5ZM8.5 21V7H14.5V12H19.5V21H8.5Z" fill="#00d4ff"/>
</svg>

            {/* <Image width={32} height={32} src="/images/ai/Extension.svg" className="img"/> */}
          <h4 className="head">Extend Sorin with Custom Apps</h4>
          {/* <p className="desc">Lead Conversion Speed</p> */}
          <p className="desc">Add powerful plugins and tools tailored to your workflows.
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
