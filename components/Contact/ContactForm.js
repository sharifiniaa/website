import React from 'react';
import ButtonOutline from '../Buttons/ButtounOutline';

const ContactForm = () => {
  return (
    <form className="contact-form bg-color-dark-blue p-5">
      <div className="py-3 mt-2 mb-0 text-5">
        <input name="name" type="text" placeholder="نام" />
      </div>
      <div className="py-3 mt-2 mb-0 text-5">
        <input name="email" type="email" placeholder="ایمیل" />
      </div>
      <div className="py-3 mt-2 mb-0 text-5">
        <input name="subject" type="text" placeholder="موضوع" />
      </div>
      <div className="py-3 mt-2 mb-0 text-5">
        <textarea row="6" name="message" placeholder="پیام شما" />
      </div>
      <ButtonOutline title="ارسال پیام" />
      <style scoped jsx>
        {`
          .contact-form input,
          .contact-form textarea {
            border: 0;
            border-bottom: 2px solid #fff;
            height: 2rem;
            font-family: vazir;
            width: 100%;
            line-height: 2rem;
            background-color: transparent;
            outline: none;
            color: #fff;
          }
          .contact-form textarea {
            height: 150px;
          }
          ::placeholder {
            color: white;
          }
        `}
      </style>
    </form>
  );
};

export default ContactForm;
