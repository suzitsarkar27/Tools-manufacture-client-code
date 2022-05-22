import React from "react";

const ContactsUs = () => {
  return (
    <section className=" mt-20 mb-20">
      <div class="card w-full shadow-2xl">
      <div className="text-center pt-10">
        <h4 className="text-2xl text-secondary font-normal">Contact Us</h4>
        <h4 className="text-4xl text-secondary">Stay connected with us</h4>
      </div>
      <div className="text-center flex">
        <form action="# " className="mt-10 mx-auto">
          <input
            type="email"
            placeholder="Type Your Email"
            className="input input-bordered input-info w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type Subject"
            className="input input-bordered input-info w-full max-w-xs mt-5"
          />
          <textarea
            className="textarea textarea-info w-full max-w-xs mt-5"
            placeholder="Type Your Bio or Infro"
          ></textarea>
          <br />
          <div className="text-center mt-5">
            <button className="mx-auto btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary mb-10"> Submit </button>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
};

export default ContactsUs;
