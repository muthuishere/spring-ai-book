// Layout.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import EmailSignupForm from "./EmailSignup";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <header className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold text-primary dark:text-gray-200">
            <Link to="/">Spring AI for Your Organization</Link>
          </h1>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-600 text-lg">
              Home
            </Link>
            <Link to="/author" className="hover:text-blue-600 text-lg">
              About Author
            </Link>
            <a
              href="http://leanpub.com/springai"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now
            </a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12 space-y-24 dark:bg-gray-900">
        <Outlet />
      </main>

      <footer className="bg-gray-100 py-6 mt-24 dark:bg-gray-800 dark:text-gray-400">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Stay updated with the latest Spring AI developments
          </p>
          <EmailSignupForm />
          <p className="mt-6">
            &copy; 2024 Muthukumaran Navaneethakrishnan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
