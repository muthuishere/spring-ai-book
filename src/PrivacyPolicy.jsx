// src/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: 25-Sep-2024</p>
      <p className="mb-4">
        This Privacy Policy describes how autologin.pro ("we", "us", or "our")
        collects, uses, and shares your personal information when you use our
        website and services.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Information We Collect
      </h2>
      <p className="mb-4">We collect the following information:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Email address when you sign up for our newsletter or subscription
          services.
        </li>
        <li>
          IP address and location information for analysis and improving our
          services.
        </li>
        <li>
          Usage data and interaction with our website collected through Google
          Analytics.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        How We Use Your Information
      </h2>
      <p className="mb-4">
        We use the information we collect for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>To provide, maintain, and improve our services.</li>
        <li>
          To communicate with you about updates, promotions, and news related to
          our services.
        </li>
        <li>
          To analyze usage patterns and improve user experience on our website.
        </li>
        <li>
          To comply with legal obligations and prevent fraudulent activities.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Google Analytics</h2>
      <p className="mb-4">
        We use Google Analytics to help us understand how our visitors use the
        site. Google Analytics collects information about your interaction with
        our website, including pages visited, time spent on pages, and other
        similar information. You can read more about how Google uses your
        information here:
        <a
          href="https://www.google.com/intl/en/policies/privacy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Google Privacy Policy
        </a>
        .
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. Any changes will be
        posted on this page, and we will update the "Last updated" date above.
        We encourage you to review this Privacy Policy periodically for any
        updates or changes.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy or our data
        practices, please contact us at:
        <a
          href="mailto:autologinpro@deemwar.com"
          className="text-blue-500 underline ml-1"
        >
          autologinpro@deemwar.com
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
