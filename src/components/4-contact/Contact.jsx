import React from 'react'
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact_us.json";

const Contact = () => {
    const [state, handleSubmit] = useForm("xdoqwldq");
    return (
        <section className='contact-us ' id='contact'>
            <h1 className='title'>
                <span className="icon-envelope"></span>
                Contact Us
            </h1>
            <p className='sub-title'>Contact us for more information and Get notified
                when i publish something new
            </p>
            <div style={{justifyContent:"space-between"}} className="flex">
                <form onSubmit={handleSubmit} action="">
                    <div className='flex'>
                        <label htmlFor="email">Email Address : </label>{/* htmlFor take the same value of input's id*/}
                        <input autoComplete='off' required type="email" name="email" id="email" placeholder='Enter E-mail'/>
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className='flex' style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your message : </label>
                        <textarea required name="message" id="message" placeholder='Enter Your Message'/>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button className='submit' type="submit" disabled={state.submitting}>
                        {state.submitting ? "Submitting...." : "Submit"}
                    </button>
                    {state.succeeded && (
                        <p style={{ fontSize: "18px", marginTop: "1.7rem" }} className='flex'>
                            <Lottie loop={false} style={{ height: 40 }} animationData={doneAnimation} />
                            Your message has been sent successfully 👌</p>)}
                </form>
                <div className="animation">
                <Lottie style={{height: 400}} className='contactAnimation' animationData={contactAnimation} />
                </div>
            </div>
        </section>

    )
}

export default Contact