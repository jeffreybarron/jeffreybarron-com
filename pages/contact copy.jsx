// pages/contact.js 
import PagesLayout from "../Layout/PagesLayout";
import React, { useState } from "react";

export default function ContactPage() {

  const [userData, setuserData] =   useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [apiResponse, setApiResponse] = useState({
    status: null,
    statusText: null,
    url: null,
  }); // [error, setErrors
  const { fullname, email, subject, message } = userData;
 
  // update userData on change 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData((prev) => ({ ...prev, [name]: value }));
    setApiResponse({
      status: null,
      statusText: null,
      url: null});
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
      <div className="shadow-xl m-1">
        <form onSubmit={handleSubmit} className="w-full rounded-2xl rounded-bl-2xl mt-4 flex flex-col p-4 bg-primary-contrast text-primary">
          <div className="grid grid-cols-12 gap-2 form-group p-1">
            <label htmlFor="fullname" className="col-span-2 p-1 font-bodyText"><span className="text-red-500"><sup>*</sup></span>Full name</label>
            <input 
              name="fullname" 
              type="text" 
              required
              minLength="3"
              maxLength="50"
              onChange={handleChange}
              value={fullname}
              placeholder="Given name followed by your family name"
              className={`col-span-10 bg-white bg-transparent border-b border-primary p-1 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-600 font-light`}/>
            <div className={errors.fullname ? `inline-block` : 'hidden'}>Error:{errors.fullname?.message}</div>
          </div>

          <div className="grid grid-cols-12 gap-2 form-group p-1">
            <label htmlFor="email" className="col-span-2 p-1 font-bodyText"><span className="text-red-500"><sup>*</sup></span>E-mail</label>
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
              className={`col-span-10 bg-white bg-transparent border-b border-primary p-1 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-600 font-light`}/>
            <div className={errors.email ? 'block' : 'hidden'}>{errors.email?.message}</div>
          </div>

          
          <div className="grid grid-cols-12 gap-2 form-group p-1">
            <label htmlFor="subject" className="col-span-2 p-1 font-bodyText"><span className="text-red-500"><sup>*</sup></span>Subject</label>
            <input 
              name="subject" 
              type="text" 
              required
              minLength="10"
              maxLength="120"
              onChange={handleChange}
              value={subject}
              placeholder="What is your project about?"
              className={`col-span-10 bg-white bg-transparent border-b border-primary p-1 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-600 font-light`}/>
            <div className={`{errors.subject ? 'block' : 'hidden'}`}>{errors.subject?.message}</div>
          </div>

          <div className="grid grid-cols-12 gap-2 form-group p-1">
            <label htmlFor="message" className="col-span-2 p-1 font-bodyText"><span className="text-red-500"><sup>*</sup></span>Project Description</label>
            <textarea 
              name="message" 
              required
              minLength="10"
              maxLength="4000"
              rows="6"
              onChange={handleChange}
              value={message}
              placeholder="Describe your project in as much detail as possible (max 4000 characters)"
              className={`col-span-10 bg-white bg-transparent border-b border-primary p-1 focus:outline-none focus:rounded-md focus:ring-1 ring-primary-600 font-light`}>
            </textarea>
            <div className={`{errors.message ? 'block' : 'hidden'}`}>{errors.message?.message}</div>
          </div>
        
          <div className="grid grid-cols-12 gap-2 form-group p-1">
            <div className=" col-span-2 p-1 font-bodyText items-center justify-start">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Send message

              </button>
            </div>
            <div className="col-span-10 col-start-3 p-1 font-bodyText flex-col">
              {/* 
                If apiResponse.status is null then dont show anything
                elseif apiResponse.status is not 200 then apiResponse.statusText
                else show success message
              */}

              {apiResponse.status === null ? null : (
                <>
                  {apiResponse.status !== 200 ? (
                    <div className="text-red-500">Error: {apiResponse.statusText}</div>
                  ) : (
                    <div className="text-green-500">{apiResponse.statusText}</div>
                  )}
                </>
              )}


            </div>
          </div>

        </form>

      </div>
    </PagesLayout>
  );


}
