import React from 'react';
import ButtonOutline from '../Buttons/ButtounOutline';

const ContactForm = () => {
  return (
    <form className="contact-form bg-color-dark-blue p-3 p-sm-5">
      <div className="py-3 mt-2 mb-0 text-5">
        <input name="name" type="text" placeholder="Name" />
      </div>
      <div className="py-3 mt-2 mb-0 text-5">
        <input name="email" type="email" placeholder="Email" />
      </div>
      <div className="py-3 mt-2 mb-0 text-5">
        <input name="subject" type="text" placeholder="Subject" />
      </div>
      <div className="py-3 mt-2 mb-0 text-5">
        <textarea rows={6} name="message" placeholder="Message" />
      </div>
      <ButtonOutline square className="d-block" title="SEND" />
      <style scoped jsx>
        {`
          .contact-form input,
          .contact-form textarea {
            border: 0;
            border-bottom: 2px solid #fff;
            height: 2rem;
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
