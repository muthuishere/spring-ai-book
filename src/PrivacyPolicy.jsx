import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 dark:text-gray-300">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: November 9, 2024</p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p>
            This Privacy Policy explains how we collect and use information when
            you visit https://springaibook.muthuishere.site/ We are committed to
            protecting your privacy and being transparent about our data
            practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Email Collection</h3>
              <p>
                When you sign up for notifications or updates, we collect your
                email address. This is used solely for:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Sending you book updates and announcements</li>
                <li>Communicating important changes or new features</li>
                <li>Providing relevant educational content about Spring AI</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">IP Address Tracking</h3>
              <p>We collect IP addresses for the following limited purposes:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Basic analytics to understand our geographical reach</li>
                <li>Preventing abuse of our services</li>
                <li>Improving website performance for different regions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Google Analytics</h3>
              <p>
                We use Google Analytics to understand website usage patterns.
                This includes:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Pages visited and time spent on pages</li>
                <li>Basic device and browser information</li>
                <li>General location data (country/region level)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
          <p>All collected information is used strictly for:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Improving the website and user experience</li>
            <li>Sending relevant communications about the Spring AI book</li>
            <li>
              Understanding our audience to better serve educational content
            </li>
            <li>Protecting against spam and abuse</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your
            information:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Secure storage of email addresses</li>
            <li>Limited access to collected data</li>
            <li>Regular security reviews and updates</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Unsubscribe from communications at any time</li>
            <li>Request information about your stored data</li>
            <li>Request deletion of your data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            For any privacy-related questions or concerns, please contact us at:{" "}
            <a
              href="mailto:springaibook@gmail.com"
              className="text-blue-500 hover:underline"
            >
              springaibook@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
