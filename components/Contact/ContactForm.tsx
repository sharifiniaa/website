import React from 'react';
import {useForm, SubmitHandler} from "react-hook-form";


type Inputs = {
    name: string;
    mail: string;
    subject: string;
    message: string;
}

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <form className="contact-form bg-color-dark-blue p-3 p-sm-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="py-3 mt-2 mb-0 text-5">
        <input type="text" className={errors.name ? 'is-error' : undefined} placeholder="Name" {...register('name', {required: 'please write your name'})} />
          {errors.name && <small className='color-danger text-3'>{errors.name?.message}</small>}
      </div>
      <div className="py-3 mt-2 mb-0 text-5">
        <input type="email" className={errors.mail ? 'is-error' : undefined} placeholder="Email" {...register('mail', {required: 'Please insert valid Email address'})} />
          {errors.mail && <small className='color-danger text-3'>{errors.mail?.message}</small>}
      </div>
      <div className="py-3 mt-2 mb-0 text-5">
        <input className={errors.subject ? 'is-error' : undefined} type="text" placeholder="Subject" {...register('subject', {required: 'Please insert subject'})} />
          {errors.subject && <small className='color-danger text-3'>{errors.subject?.message}</small>}
      </div>
      <div className="py-3 mt-2 mb-0 text-5">
        <textarea rows={6} className={errors.message ? 'is-error' : undefined} placeholder="Message" {...register('message', {required: 'Please write a message for me'})} />
          {errors.message && <small className='color-danger text-3'>{errors.message?.message}</small>}
      </div>
        <button className='contact-button d-block mt-3' type='submit'>SEND</button>

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
          .contact-button {
            all: unset;
            padding: 1rem 2rem 1rem 2rem;
            border: #fff 2px solid;
            color: #fff;
            cursor: pointer;
            transition: all 250ms linear;
            text-align: center;
            letter-spacing: 8px;
            box-sizing: border-box;
            width: 100%;
          }
          .is-error {
            border-bottom-color: #dc3545 !important;
            color: #dc3545 !important;
          }
        `}
      </style>
    </form>
  );
};

export default ContactForm;
