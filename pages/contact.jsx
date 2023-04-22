// pages/contact.js [Server Side]

import PagesLayout from "../Layout/PagesLayout";
import React, { useState } from "react";


export default function ContactPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }
    // console.log(fullname, email, subject, message);
  };


  return (
    <PagesLayout>

      <h1 className="text-2xl font-bold">Get in touch</h1>
      <p>Send me an email if you are interested in me building some software for you, and I will get back to you as soon as possible.</p>
      <div className="border-primary border-solid rounded-md bg-primary-300 text-primary">
        <form onSubmit={handleSubmit} className="rounded-lg mt-4 shadow-xl flex flex-col p-4">
          <label for="fullname" className="font-light mt-8">Full name<span className="text-red-500">*</span></label>
          <input type="text" name="fullname" className="bg-transparent border-b border-primary py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-600 font-light " />

          <label for="email" className="font-light mt-4">E-mail<span className="text-red-500">*</span></label>
          <input type="email" name="email" className="bg-transparent border-b border-primary py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-600 font-light " />

          <label for="subject" className=" font-light mt-4">Subject<span className="text-red-500">*</span></label>
          <input type="text" name="subject" className="bg-transparent border-b border-primary py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-600 font-light " />

          <label for="message" className=" font-light mt-4">Project Description<span className="text-red-500">*</span></label>
          <textarea name="message" className="bg-transparent border-b border-primary py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-600 font-light "></textarea>
          <div className="flex flex-row items-center justify-start">
            <button className="px-10 mt-8 py-2 bg-primary-100 text-primary font-light rounded-md text-lg flex flex-row items-center">
              Send
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-secondary ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </PagesLayout>
  );
}
