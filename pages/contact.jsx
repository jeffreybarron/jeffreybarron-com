// pages/contact.js 
import PagesLayout from "../Layout/PagesLayout";
import React, { useState } from "react";

export default function ContactPage() {

  const [userData, setuserData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const { fullname, email, subject, message } = userData;
 
  // update userData on change 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form data
  const validate = (userData) => {
    let errors = {};
    const { fullname, email, subject, message } = userData;

    if (!fullname) {
      errors.fullname = "Name is required";
    } else if (fullname.length < 3 || fullname.length > 50) {
      errors.fullname = "Name must be between 3 and 50 characters";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (email.length < 7 || email.length > 50) {
      errors.email = "Email must be between 7 and 50 characters";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }

    if (!subject) {
      errors.subject = "Subject is required";
    } else if (subject.length < 10 || subject.length > 120) {
      errors.subject = "Subject must be between 10 and 120 characters";
    }

    if (!message) {
      errors.message = "Message is required";
    } else if (message.length < 3 || message.length > 4000) {
      errors.message = "Message must be between 3 and 4000 characters";
    }

    return errors;
  };  
  
  const handleSubmit = async (e) => {

    e.preventDefault();
    // validate form data
    const errors = validate(userData);

    const isError = Object.keys(errors).length > 0; // any errors sets to true
    if (isError){
      setErrors(errors);
      // there are errors, do not submit form
      return;
    }

    try {
      // send email to 
      const res = await fetch("/api/send-contact-form-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }); 

      if (res.status === 200) {
        setuserData({ fullname: "", email: "", subject: "", message: "" });
      } else {
        alert("Message failed to send");
      }

    } catch(err) {
      console.error(err);
    }

  }

  return (
    <PagesLayout>

      <h1 className="text-2xl font-bold">Get in touch</h1>
      <p>Send me an email if you are interested in me building some software for you, and I will get back to you as soon as possible.</p>
      <div className="shadow-xl m-1">
        <form onSubmit={handleSubmit} className="rounded-2xl rounded-bl-2xl mt-4 flex flex-col p-4 bg-primary-contrast text-primary">
          <div className="form-group">
            <label for="fullname" className="font-light mr-4 mt-4">Full name<span className="text-red-500">*</span></label>
            <input 
              name="fullname" 
              type="text" 
              required
              minLength="3"
              maxLength="50"
              onChange={handleChange}
              className={`bg-white bg-transparent border-b border-primary py-1 my-1 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-600 font-light`}/>
            <div className={`${errors.fullname ? 'visible' : 'invisible'}`}>{errors.fullname?.message}</div>
          </div>

          <div className="form-group">
            <label for="email" className="font-light mr-4 mt-4">E-mail<span className="text-red-500">*</span></label>
            <input 
              name="email" 
              type="email" 
              required
              minLength="7"
              maxLength="50"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onChange={handleChange}
              className="bg-white bg-transparent border-b border-primary py-1 my-1 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-600 font-light " />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          <div className="form-group">
            <label for="subject" className=" font-light mr-4 mt-4">Subject<span className="text-red-500">*</span></label>
            <input 
              name="subject" 
              type="text" 
              required
              minLength="10"
              maxLength="120"
              onChange={handleChange}
              className="bg-white bg-transparent border-b border-primary py-1 my-1 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-600 font-light " />
            <div className="invalid-feedback">{errors.subject?.message}</div>
          </div>

          <div className="form-group">
            <label for="message" className=" font-light mr-4 mt-4">Project Description<span className="text-red-500">*</span></label>
            <textarea 
              name="message" 
              required
              minLength="3"
              maxLength="4000"
              onChange={handleChange}
              className="bg-white align-top bg-transparent border-b border-primary py-1 my-1 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-600 font-light ">
            </textarea>
            <div className="invalid-feedback">{errors.message?.message}</div>
          </div>
        
          <div className="form-group">
            <div className="flex flex-row items-center justify-start">
              <button className="px-10 mt-8 py-1 my-1 bg-primary-100 text-primary font-light rounded-md text-lg flex flex-row items-center">
                Send 
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-secondary ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
          
        </form>
      </div>
    </PagesLayout>
  );
}
