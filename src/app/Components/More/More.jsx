// components/GetStartedSection.js
import Image from 'next/image';
import styles from './More.module.css';
import Button from "../Button/Button";

export default function GetStartedSection() {
  return (
    <section className={` py-5 ${styles.sectionBg}`}>
        <div className="container">
 <div className="row text-center text-md-start align-items-start gx-5">
        {/* Column 1: Get Started */}
        <div className="col-md-4 mb-4 mb-md-0">
          <h5 className="fw-bold text-dark mb-3">Ready to get started with Orvo?</h5>
          <p className="  text-muted fs-6 fw-semibold ">
            Create your Orvo account instantly or talk to our team to tailor a plan for your business needs.
          </p>
          <div className="d-flex gap-3 flex-wrap mt-3">
                    <Button
                        text="Start now"
                        type="blackButtonWithBackground"
                    ></Button>
                    <Button
                        text="View Pricing"
                        type="blackButtonNoBackground"
                    ></Button>
          </div>
        </div>

        {/* Column 2: Pricing */}
        <div className={`col-md-4 mb-4 mb-md-0 ${styles.withDivider}`}>
          <div className="d-flex align-items-start flex-column gap-3">
         <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <foreignObject x="-29" y="-38" width="100" height="100">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: 'blur(20px)',
            clipPath: 'url(#bgblur_0_107_2221_clip_path)',
            height: '100%',
            width: '100%',
          }}
        />
      </foreignObject>
      <path
        d="M30.41 11.58L21.41 2.58C21.05 2.22 20.55 2 20 2L14 2.58C12.9 2.58 12 3.48 12 4.58L11 11C11 11.55 11.22 12.05 11.59 12.42L20.59 21.42C20.95 21.78 21.45 22 22 22C22.55 22 23.05 21.78 23.41 21.41L30.41 14.41C30.78 14.05 31 13.55 31 13C31 12.45 30.77 11.94 30.41 11.58ZM14.5 7.5C13.67 7.5 13 6.33 13 5.5C13 4.67 13.67 4 14.5 4C15.33 4 16.5 5.17 16.5 6C16.5 6.83 15.33 7.5 14.5 7.5Z"
        fill="url(#paint0_linear_107_2221)"
        fillOpacity="0.6"
      />
      <path
        d="M22.2981 21.0983L21.7178 8.38362C21.6946 7.87503 21.4736 7.37547 21.0674 7.0047L15.8971 2.28577C15.0846 1.54422 13.8131 1.60225 13.0716 2.41472L8.35266 7.58499C7.98189 7.99122 7.80732 8.50884 7.83117 9.03155L8.41146 21.7462C8.43468 22.2548 8.65567 22.7544 9.06191 23.1252C9.46814 23.4959 9.98576 23.6705 10.5011 23.6399L20.3903 23.1886C20.9063 23.1721 21.4058 22.9511 21.7766 22.5449C22.1474 22.1386 22.3213 21.6069 22.2981 21.0983ZM13.6343 6.99002C13.0213 6.43048 12.9781 5.48395 13.5376 4.8709C14.0971 4.25785 15.0437 4.21466 15.6567 4.77419C16.2698 5.33372 16.313 6.28025 15.7534 6.8933C15.1939 7.50635 14.2474 7.54955 13.6343 6.99002Z"
        fill="url(#paint1_linear_107_2221)"
      />
      <defs>
        <clipPath id="bgblur_0_107_2221_clip_path" transform="translate(29 38)">
          <path d="M30.41 11.58L21.41 2.58C21.05 2.22 20.55 2 20 2L14 2.58C12.9 2.58 12 3.48 12 4.58L11 11C11 11.55 11.22 12.05 11.59 12.42L20.59 21.42C20.95 21.78 21.45 22 22 22C22.55 22 23.05 21.78 23.41 21.41L30.41 14.41C30.78 14.05 31 13.55 31 13C31 12.45 30.77 11.94 30.41 11.58ZM14.5 7.5C13.67 7.5 13 6.33 13 5.5C13 4.67 13.67 4 14.5 4C15.33 4 16.5 5.17 16.5 6C16.5 6.83 15.33 7.5 14.5 7.5Z" />
        </clipPath>
        <linearGradient
          id="paint0_linear_107_2221"
          x1="11"
          y1="2.52632"
          x2="31.6201"
          y2="16.4255"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3D19" />
          <stop offset="1" stopColor="#4992B3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_107_2221"
          x1="14.0651"
          y1="1.32624"
          x2="19.9254"
          y2="25.493"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3D19" />
          <stop offset="1" stopColor="#4992B3" />
        </linearGradient>
      </defs>
    </svg>
            <div>
              <p className="fw-semibold text-dark mb-1">Know your costs upfront</p>
              <p className="  text-muted fs-6 fw-semibold  mb-1">Simple AI-based pricing with no surprise charges. Pay only for what you use.</p>
              {/* <a href="#" className="text-decoration-none text-primary fw-semibold">Pricing details →</a> */}
            </div>
          </div>
        </div>

        {/* Column 3: Integration */}
        <div className={`col-md-4 ${styles.withDivider}`}>
          <div className="d-flex align-items-start flex-column gap-3">
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.4"><rect x="2" y="2" width="20" height="24" rx="4" fill="url(#paint0_linear_107_2228)"/></g><rect width="20" height="24" rx="4" fill="url(#paint1_linear_107_2228)"/><path d="M8.48329 21.1833L5.79996 18.5L8.48329 15.8167L7.66663 15L4.16663 18.5L7.66663 22L8.48329 21.1833ZM11.5166 21.1833L14.2 18.5L11.5166 15.8167L12.3333 15L15.8333 18.5L12.3333 22L11.5166 21.1833Z" fill="#2D002A"/><defs><linearGradient id="paint0_linear_107_2228" x1="12" y1="2" x2="12" y2="26" gradientUnits="userSpaceOnUse"><stop stop-color="#CE58BC"/><stop offset="1" stop-color="#A47DE6"/></linearGradient><linearGradient id="paint1_linear_107_2228" x1="10" y1="0" x2="10" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#CE58BC"/><stop offset="1" stop-color="#A47DE6"/></linearGradient></defs></svg>
            <div>
              <p className="fw-semibold text-dark mb-1">Integrate in minutes</p>
              <p className="  text-muted fs-6 fw-semibold  mb-1">Connect Orvo to your stack — CRMs, voice, and email — and go live in under 10 minutes</p>
              {/* <a href="#" className="text-decoration-none text-primary fw-semibold">API reference →</a> */}
            </div>
          </div>
        </div>
      </div>
        </div>
     
    </section>
  );
}
