import React from "react";

const ContactMe = () => {
  return (
    <form
      className="bg-base-300 w-full "
      action="https://formspree.io/f/xyyvrlyb"
      method="POST"
      id="contactMeID"
    >
      <h1 className="text-2xl my-5">Contact Me</h1>
      <div className="grid my-5 p-2">
        <div className=" my-5  flex align-middle justify-center">
          <input
            className="lg:w-1/3 md:w-2/3 sm:w-2/3 w-full p-2 border border-primary rounded-lg"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="my-5  flex align-middle justify-center">
          <textarea
            className="lg:w-1/3 md:w-2/3 sm:w-2/3 w-full p-5 border border-primary rounded-lg"
            name="message"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button className="btn btn-primary lg:w-1/3 md:w-2/3 sm:w-2/3 w-full" type="submit">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactMe;
