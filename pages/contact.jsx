// pages/contact.js 
import PagesLayout from "../Layout/PagesLayout";
import React, { useState } from "react";

export default function ContactPage() {
  
  const [userData, setuserData] =   useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
    newsletter: "",
  });
  const [apiResponse, setApiResponse] = useState({
    status: null,
    statusText: null,
    url: null,
  }); 
  const { fullname, email, subject, message, newsletter } = userData;
  const [errors, setErrors] = useState({});
  
  // update userData on change 
  const handleChange = (e) => {
    const { name, type, value, checked  } = e.target;
    // if checkbox then else 

    if (type === "checkbox" || type === "radio") {
      setuserData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setuserData((prev) => ({ ...prev, [name]: value }));
    }
    setApiResponse({
      status: null,
      statusText: null,
      url: null});

  };

  // Validate form data
  const validate = (userData) => {
    let errors = {};
    const { fullname, email, subject, message, newsletter } = userData;

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
        setApiResponse({
          status: res.status,
          statusText: "Your message has been sent. Thank you!",
          url: res.url});
        setuserData({ fullname: "", email: "", subject: "", message: "" });
      } else {
        setApiResponse({
          status: res.status || 500,
          statusText: res.statusText,
          url: res.url});
      }
      // console.log(apiResponse.status, apiResponse.statusText, apiResponse.url)

    } catch(err) {
      console.error(err);
    }

  }

  return (
    <PagesLayout>

      <h1 className="text-2xl font-bold">Get in touch</h1>
      <p>Please send me a message if you would like to chat about your next project!</p>
      <p>I will get back to you as soon as possible (usually by the end of the next business day).</p>
      <div className="shadow-xl m-1 mt-8">
        <form onSubmit={handleSubmit} className="w-full">
          {/* Full Name */}
          <div className="md:flex sm:mb-2">
            {/* Label */}
            <div className="md:w-1/5 py-1 sm:py-2">
              <label className="block text-primary-contrast font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="fullname"><span className="text-red-500"><sup>*</sup></span>Full name</label>
            </div>
            {/* Input */}
            <div className="md:w-4/5">
              <input 
                name="fullname" 
                type="text" 
                required
                minLength="3"
                maxLength="50"
                onChange={handleChange}
                value={fullname}
                placeholder="GivenName FamilyName"
                className={`bg-primary-contrast appearance-none border-2 border-primary-contrast rounded w-full py-1 px-2 sm:py-2 sm:px-4 text-primary leading-tight focus:outline-none focus:bg-tertiary-light focus:border-secondary-light`}/>
              <div className={errors.fullname ? `inline-block` : 'hidden'}>Error:{errors.fullname?.message}</div>
            </div>
          </div>

          <div className="md:flex sm:mb-2">
            {/* Label */}
            <div className="md:w-1/5 py-1 sm:py-2">
              <label className="block text-primary-contrast font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email"><span className="text-red-500"><sup>*</sup></span>E-mail</label>
            </div>
            {/* Input */}
            <div className="md:w-4/5">
              <input 
              name="email" 
              type="email" 
              required
              minLength="7"
              maxLength="50"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onChange={handleChange}
              value={email}
              placeholder="Your email address"
              className={`bg-primary-contrast appearance-none border-2 border-primary-contrast rounded w-full py-1 px-2 sm:py-2 sm:px-4 text-primary leading-tight focus:outline-none focus:bg-tertiary-light focus:border-secondary-light`}/>
            <div className={errors.email ? 'block' : 'hidden'}>{errors.email?.message}</div>
            </div>
          </div>

          {/* Subject Field */}
          <div className="md:flex sm:mb-2">
            {/* Label */}
            <div className="md:w-1/5 py-1 sm:py-2">
              <label className="block text-primary-contrast font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="subject"><span className="text-red-500"><sup>*</sup></span>Subject</label>
            </div>
            {/* Input */}
            <div className="md:w-4/5">
              <input 
              name="subject" 
              type="text" 
              required
              minLength="10"
              maxLength="120"
              onChange={handleChange}
              value={subject}
              placeholder="What is your project about?"
              className={`bg-primary-contrast appearance-none border-2 border-primary-contrast rounded w-full py-1 px-2 sm:py-2 sm:px-4 text-primary leading-tight focus:outline-none focus:bg-tertiary-light focus:border-secondary-light`}/>
            <div className={`{errors.subject ? 'block' : 'hidden'}`}>{errors.subject?.message}</div>
            </div>
          </div>

          {/* Message TextArea Field */}
          <div className="md:flex sm:mb-2">
            {/* Label */}
            <div className="md:w-1/5 py-1 sm:py-2">
              <label className="block text-primary-contrast font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="message"><span className="text-red-500"><sup>*</sup></span>Project Description</label>
            </div>
            {/* Input */}
            <div className="md:w-4/5">
              <textarea 
              name="message" 
              required
              minLength="10"
              maxLength="4000"
              rows="6"
              onChange={handleChange}
              value={message}
              placeholder="Describe your project in as much detail as possible (max 4000 characters)"
              className={`bg-primary-contrast appearance-none border-2 border-primary-contrast rounded w-full py-1 px-2 sm:py-2 sm:px-4 text-primary leading-tight focus:outline-none focus:bg-tertiary-light focus:border-secondary-light`}>
            </textarea>
            <div className={`{errors.message ? 'block' : 'hidden'}`}>{errors.message?.message}</div>
            </div>
          </div>

          {/* Newsletter Field */}
          <div className="md:flex sm:mb-2">
            {/* Label */}
            <div className="md:w-1/5 py-1 sm:py-2">
              <label className="block text-primary-contrast font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="newsletter">Newsletter</label>
            </div>
            {/* Input */}
            <div className="md:w-4/5 flex items-center">
              <input 
              name="newsletter" 
              type="checkbox" 
              onClick={handleChange}
              value={newsletter}
              className={`w-4 h-4 accent-secondary rounded focus:ring-secondary focus:ring-1`}/>
              <p className="ml-2">Hey!, can you also subscribe me to your newsletter for FREE!&nbsp;[ Yes, Opt In ]</p>
            <div className={`{errors.newsletter ? 'block' : 'hidden'}`}>{errors.newsletter?.message}</div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:flex sm:mb-2">
            {/* Label */}
            <div className="md:w-1/5 py-1 sm:py-2">
              <div className="block text-primary-contrast font-bold md:text-right mb-1 md:mb-0 pr-4">
                <button className="bg-success hover:bg-success-dark text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded">
                  Send Message
                </button>
              </div>
            </div>
            <div className="md:w-4/5">
              <div className="appearance-none w-full py-1 px-2 sm:py-2 sm:px-4">
                {/* 
                  If apiResponse.status is null then dont show anything
                  elseif apiResponse.status is not 200 then apiResponse.statusText
                  else show success message
                */}
                {apiResponse.status === null ? null : (
                  <>
                    {apiResponse.status !== 200 ? (
                      <div className="text-danger bg-primary-contrast appearance-none border-1 border-primary-contrast rounded w-full py-1 px-2 sm:py-2 sm:px-4">Error: {apiResponse.statusText}</div>
                    ) : (
                      <div className="text-success bg-primary-contrast appearance-none border-1 border-primary-contrast rounded w-full py-1 px-2 sm:py-2 sm:px-4">{apiResponse.statusText}</div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </PagesLayout>
  );


}
