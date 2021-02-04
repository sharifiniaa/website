import React from "react";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="contact-from__input-holder">
        <input name="name" type="text" placeholder="نام" />
      </div>
      <div className="contact-from__input-holder">
        <input name="email" type="email" placeholder="ایمیل" />
      </div>
      <div className="contact-from__input-holder">
        <input name="subject" type="text" placeholder="موضوع" />
      </div>
      <div className="contact-from__input-holder">
        <textarea row="6" name="message" placeholder="پیام شما" />
      </div>
    </form>
  );
};

export default ContactForm;
