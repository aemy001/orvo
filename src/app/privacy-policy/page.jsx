// components/PrivacyPolicy.tsx
import React from "react";
import Navbar from "../Components/Navbar/NavbarBlack";
import Footer from "../Components/Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="privacy-page">
        <Navbar />
        <div className="privacy">
          <div className="container privacy-container ">
            <div className="mb-4 privacy-header">
              <h2 className="text-2xl text-center font-bold">Privacy Policy</h2>
              <p className="terms-p  text-center">
                Welcome to **Orvo Personal CRM**. Protecting your privacy is a
                top priority. This Privacy Policy outlines how we collect, use,
                store, and secure your personal data, including Google user
                data, in compliance with GDPR, Google API policies, and other
                applicable privacy laws.
              </p>
            </div>
            <div className="mb-4">
              <h3>1. Information We Collect</h3>
              <p className="terms-p">We collect the following types of data:</p>
              <ul className="py-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  profile details.
                </li>
                <li>
                  <strong>Google Contacts Data:</strong> With consent, we access
                  and sync your Google Contacts.
                </li>
                <li>
                  <strong>Authentication Data:</strong> Required for Google and
                  Facebook login.
                </li>
                <li>
                  <strong>Billing Information:</strong> Securely managed via
                  Stripe.
                </li>
                <li>
                  <strong>Usage Analytics:</strong> Data related to how you use
                  Orvo.
                </li>
                <li>
                  <strong>Communication Data:</strong> Inquiries, support
                  requests, and user feedback.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3>2. How We Use Your Data</h3>
              <p className="terms-p">We use your information for:</p>
              <ul className="py-2">
                <li>
                  Providing <strong>contact management</strong> and syncing
                  Google Contacts.
                </li>
                <li>
                  Authenticating user access via{" "}
                  <strong>Google & Facebook login</strong>.
                </li>
                <li>
                  Processing payments via <strong>Stripe</strong>.
                </li>
                <li>
                  Enhancing user experience through <strong>analytics</strong>.
                </li>
                <li>
                  Providing <strong>customer support</strong>.
                </li>
                <li>
                  Ensuring compliance with{" "}
                  <strong>Google API & GDPR regulations</strong>.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3>3. Data Storage and Security</h3>
              <p className="terms-p">
                We implement strict security measures, including:
              </p>
              <ul className="py-2">
                <li>
                  GDPR-Compliant Hosting: Secure storage in EU-based data
                  centers.
                </li>
                <li>SSL Encryption: Securing data transmission.</li>
                <li>Data Encryption: Protecting stored information.</li>
                <li>Access Restrictions: Limited to authorized personnel.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3>4. Data Sharing and Third-Party Services</h3>
              <p className="terms-p">
                Orvo does not sell or share your data, except with:
              </p>
              <ul className="py-2">
                <li>Stripe: For secure subscription payments.</li>
                <li>
                  Google & Facebook: For authentication & contact syncing.
                </li>
                <li>Legal Authorities: When required by law.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3>5. Google API Compliance</h3>
              <p className="terms-p">
                Orvo adheres to{" "}
                <strong>Google API Services User Data Policy</strong>:
              </p>
              <ul className="py-2">
                <li>
                  <strong>Limited Use:</strong> Google Contacts are accessed{" "}
                  <strong>only</strong> for syncing.
                </li>
                <li>
                  <strong>User Consent:</strong> Explicit permission is
                  required.
                </li>
                <li>
                  <strong>Data Control:</strong> Users can revoke access
                  anytime.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3>6. User Rights (GDPR)</h3>
              <p className="terms-p">Under GDPR, you have the right to:</p>
              <ul className="py-2">
                <li>
                  <strong>Access:</strong> Request a copy of your data.
                </li>
                <li>
                  <strong>Correction:</strong> Update your details.
                </li>
                <li>
                  <strong>Deletion:</strong> Request removal of your data.
                </li>
                <li>
                  <strong>Data Portability:</strong> Download stored
                  information.
                </li>
              </ul>
              <p className="terms-p">
                To exercise your rights, contact{" "}
                <a href="mailto:office@getorvo.com">office@getorvo.com</a>.
              </p>
            </div>

            <div className="mb-4">
              <h3>7. Data Retention Policy</h3>
              <p className="terms-p">
                User data is stored for <strong>30 days</strong> post-account
                deletion, after which it is permanently erased.
              </p>
            </div>

            <div className="mb-4">
              <h3>8. Cookies and Tracking</h3>
              <p className="terms-p">
                Orvo does <strong>not</strong> use cookies or third-party
                tracking services.
              </p>
            </div>

            <div className="mb-4">
              <h3>9. Updates to This Policy</h3>
              <p className="terms-p">
                We may update this Privacy Policy periodically. Users will be
                notified via email or in-app alerts.
              </p>
            </div>

            <div className="mb-4">
              <h3>10. Contact Us</h3>
              <p className="terms-p">For inquiries, contact:</p>
              <p>
                Email:{" "}
                <a href="mailto:office@getorvo.com">office@getorvo.com</a>
              </p>
            </div>

            <p className="terms-p">
              By using Orvo, you agree to this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
