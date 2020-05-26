import React from 'react';


const ContactForm = () => {
    return (
        <form className="contact-form">
            <div className="contact-from__input-holder">
                <input name="name" type="text" />
            </div>
            <div className="contact-from__input-holder">
                <input name="email" type="email" />
            </div>
            <div className="contact-from__input-holder">
                <input name="subject" type="text" />
            </div>
            <div className="contact-from__input-holder">
                <textarea row="6" name="message" />
            </div>
        </form>
    )
};

export default ContactForm;