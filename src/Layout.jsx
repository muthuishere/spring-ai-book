import React from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400 font-semibold border-b-2 border-emerald-600 dark:border-emerald-400"
                    : "hover:text-indigo-600 dark:hover:text-indigo-400"
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/author"
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400 font-semibold border-b-2 border-emerald-600 dark:border-emerald-400"
                    : "hover:text-indigo-600 dark:hover:text-indigo-400"
                }`
              }
            >
              About Author
            </NavLink>
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

      <footer className="bg-gray-100 py-8 mt-24 dark:bg-gray-800 dark:text-gray-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="mb-4 text-lg">
                Stay updated for the latest Spring AI news and updates
              </p>
              <EmailSignupForm />
            </div>

            <div className="border-t dark:border-gray-700 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm">
                  &copy; 2024 Muthukumaran Navaneethakrishnan. All rights
                  reserved.
                </div>
                <div className="flex items-center space-x-6">
                  <Link
                    to="/privacy-policy"
                    className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>

                  <a
                    href="https://x.com/muthuishere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
