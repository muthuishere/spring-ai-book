import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
function encodeStringToBase64(input) {
  try {
    return btoa(unescape(encodeURIComponent(input)));
  } catch (e) {
    console.error("Encoding failed:", e);
    return null;
  }
}

function decodeBase64ToString(encoded) {
  try {
    return decodeURIComponent(escape(atob(encoded)));
  } catch (e) {
    console.error("Decoding failed:", e);
    return null;
  }
}

var ip = null;
function user_location() {
  if (ip) {
    return Promise.resolve(ip); // Return the cached IP as a resolved promise
  }

  return new Promise((resolve, reject) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // console.log(this.responseText);
        ip = JSON.parse(this.responseText).ip; // Cache the IP address

        resolve(ip);
      }
    };
    xhttp.open("GET", "//api.ipify.org?format=json", true);
    xhttp.send();
  });
}

export function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const ipHeader = await user_location();

    var formUrl = "";

    formUrl =
      "aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J6a00ycjJwbXk4UUowS180anJ3WThoRW9LSGUwNU5tOTdMbEZVV1IybG5ScWxMZDE3VHpPVlJWWHZCWDZPU1NpejIwQS9leGVj";

    formUrl = decodeBase64ToString(formUrl);

    formUrl =
      "https://script.google.com/macros/s/AKfycbzc3T6FCY1DDzpz4bOL8bhHHOOUjxvdSGtvdFguN8SEDRY9sOmTZOnbatp0qimLR_qt/exec";
    // Create URLSearchParams object
    const formData = new URLSearchParams();
    formData.append("email", email);

    const myHeaders = new Headers();

    try {
      myHeaders.append("Content-Type", "application/json");
      // myHeaders.append("x-forwarded-for", ipHeader);
      const raw = JSON.stringify({
        email: email,
        sheetName: "controlled-autologin",
        ip: ipHeader,
        comment: "springaibook",
      });

      const requestOptions = {
        method: "POST",
        mode: "no-cors",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const rawOutput = await fetch(formUrl, requestOptions);
      const result = await rawOutput.text();
      // console.log(result);

      // Due to no-cors mode, we can't actually check the response status
      // So we'll just assume it was successful if no error was thrown
      setSubmitStatus("success");
      setEmail(""); // Clear the email input
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3"
    >
      <div className="w-full ">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full dark:bg-gray-700 dark:text-white"
          required
        />
      </div>
      <div className="w-full sm:w-1/3">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full dark:bg-gray-600 dark:text-white"
        >
          {isSubmitting ? "Submitting..." : "Get Notified"}
        </Button>
      </div>
      {submitStatus && (
        <div className="w-full text-center mt-2">
          {submitStatus === "success" && (
            <p className="text-green-600 dark:text-green-400">
              Thank you for signing up!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-600 dark:text-red-400">
              An error occurred. Please try again.
            </p>
          )}
        </div>
      )}
    </form>
  );
}

export default EmailSignupForm;
