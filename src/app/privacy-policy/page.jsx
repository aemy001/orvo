// components/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
    <div className='privacy'>
    <div className="container privacy-container ">
      <h1 className="mb-4">Privacy Policy</h1>
      <div className="mb-4">
        <h3>1. Information We Collect</h3>
        <ul>
          <li>Personal Information: Name, email address, profile details.</li>
          <li>Google Contacts Data: With consent, we access and sync your Google Contacts.</li>
          <li>Authentication Data: Required for Google and Facebook login.</li>
          <li>Billing Information: Securely managed via Stripe.</li>
          <li>Usage Analytics: Data related to how you use Orvo.</li>
          <li>Communication Data: Inquiries, support requests, and user feedback.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3>2. How We Use Your Data</h3>
        <ul>
          <li>Providing <strong>contact management</strong> and syncing Google Contacts.</li>
          <li>Authenticating user access via <strong>Google & Facebook login</strong>.</li>
          <li>Processing payments via <strong>Stripe</strong>.</li>
          <li>Enhancing user experience through <strong>analytics</strong>.</li>
          <li>Providing <strong>customer support</strong>.</li>
          <li>Ensuring compliance with <strong>Google API & GDPR regulations</strong>.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3>3. Data Storage and Security</h3>
        <ul>
          <li>GDPR-Compliant Hosting: Secure storage in EU-based data centers.</li>
          <li>SSL Encryption: Securing data transmission.</li>
          <li>Data Encryption: Protecting stored information.</li>
          <li>Access Restrictions: Limited to authorized personnel.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3>4. Data Sharing and Third-Party Services</h3>
        <p>Orvo does not sell or share your data, except with:</p>
        <ul>
          <li>Stripe: For secure subscription payments.</li>
          <li>Google & Facebook: For authentication & contact syncing.</li>
          <li>Legal Authorities: When required by law.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3>5. Google API Compliance</h3>
        <ul>
          <li><strong>Limited Use:</strong> Google Contacts are accessed <strong>only</strong> for syncing.</li>
          <li><strong>User Consent:</strong> Explicit permission is required.</li>
          <li><strong>Data Control:</strong> Users can revoke access anytime.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3>6. User Rights (GDPR)</h3>
        <p>Under GDPR, you have the right to:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of your data.</li>
          <li><strong>Correction:</strong> Update your details.</li>
          <li><strong>Deletion:</strong> Request removal of your data.</li>
          <li><strong>Data Portability:</strong> Download stored information.</li>
        </ul>
        <p>To exercise your rights, contact <a href="mailto:office@getorvo.com">office@getorvo.com</a>.</p>
      </div>

      <div className="mb-4">
        <h3>7. Data Retention Policy</h3>
        <p>User data is stored for <strong>30 days</strong> post-account deletion, after which it is permanently erased.</p>
      </div>

      <div className="mb-4">
        <h3>8. Cookies and Tracking</h3>
        <p>Orvo does <strong>not</strong> use cookies or third-party tracking services.</p>
      </div>

      <div className="mb-4">
        <h3>9. Updates to This Policy</h3>
        <p>We may update this Privacy Policy periodically. Users will be notified via email or in-app alerts.</p>
      </div>

      <div className="mb-4">
        <h3>10. Contact Us</h3>
        <p>For inquiries, contact:</p>
        <p>Email: <a href="mailto:office@getorvo.com">office@getorvo.com</a></p>
      </div>

      <p>By using Orvo, you agree to this Privacy Policy.</p>
    </div>
    </div>

    </>
   
  );
};

export default PrivacyPolicy;
