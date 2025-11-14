import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { IFormErrors, IFormValues } from "../../types";

import "./Contact.scss";

import iconError from "/assets/svg/icon-error.svg";
import toast from "react-hot-toast";

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<IFormErrors>({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(validateForm(formValues));

    if (
      !validateForm(formValues).hasOwnProperty("name") &&
      !validateForm(formValues).hasOwnProperty("email") &&
      !validateForm(formValues).hasOwnProperty("message")
    ) {
      sendEmail();
      resetForm();
    }
  };

  const resetForm = () => {
    setFormValues({
      name: "",
      email: "",
      message: "",
    });
  };

  const sendEmail = () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "EmailJS configuration error: Missing environment variables. Please check your .env file."
      );
      return;
    }

    const params = {
      name: formValues.name,
      email: formValues.email,
      message: formValues.message,
    };

    emailjs
      .send(serviceId, templateId, params, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Email sent successfully!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        toast.error(
          "Something went wrong while sending an email, please try again later!"
        );
      });
  };

  const validateForm = (values: IFormValues) => {
    const errors = {} as any;
    const nameRgx = /^[A-Za-z\s]*$/;
    const emailRgx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!values.name) {
      errors.name = "Can't be empty";
    } else if (!nameRgx.test(values.name)) {
      errors.name = "Sorry, only letters are allowed";
    }

    if (!values.email) {
      errors.email = "Can't be empty";
    } else if (!emailRgx.test(values.email)) {
      errors.email = "Sorry, invalid format here";
    }

    if (!values.message) {
      errors.message = "Can't be empty";
    }

    return errors;
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__inner" data-aos="fade-in">
          <div className="contact__info">
            <h2 className="contact__info-title">Contact</h2>
            <p className="contact__info-text">
              Got a question or proposal, or just want to say hello? Go ahead.
              I’ll try my best to get back to you!
            </p>
          </div>

          <form className="form" onSubmit={handleSubmit} autoComplete="off">
            <div
              className={
                formErrors.name && isSubmit
                  ? "form__group error"
                  : "form__group"
              }
            >
              <input
                className="form__group-input"
                type="text"
                name="name"
                value={formValues.name}
                placeholder="Name"
                onChange={handleChange}
              />
              <img
                src={iconError}
                alt="icon-error"
                className="form__group-icon"
              />
              <span className="form__group-error">{formErrors.name}</span>
            </div>

            <div
              className={
                formErrors.email && isSubmit
                  ? "form__group error"
                  : "form__group"
              }
            >
              <input
                className="form__group-input"
                type="text"
                name="email"
                value={formValues.email}
                placeholder="Email"
                onChange={handleChange}
              />
              <img
                src={iconError}
                alt="icon-error"
                className="form__group-icon"
              />
              <span className="form__group-error">{formErrors.email}</span>
            </div>

            <div
              className={
                formErrors.message && isSubmit
                  ? "form__group error"
                  : "form__group"
              }
            >
              <textarea
                placeholder="Message"
                name="message"
                value={formValues.message}
                className="form__group-textarea"
                onChange={handleChange}
              />
              <img
                src={iconError}
                alt="icon-error"
                className="form__group-icon"
              />
              <span className="form__group-error">{formErrors.message}</span>
            </div>

            <button className="btn">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
