import React from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema, emailSchemaValues } from "../../schemas";

import "./Contact.scss";

import iconError from "/assets/svg/icon-error.svg";

const defaultFormValues = {
  name: "",
  email: "",
  message: "",
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<emailSchemaValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: defaultFormValues,
  });

  const sendEmail = (data: emailSchemaValues) => {
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
      name: data.name,
      email: data.email,
      message: data.message,
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

  const onSubmit = (data: emailSchemaValues) => {
    sendEmail(data);
    reset(defaultFormValues);
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

          <form
            className="form"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <div className={`form__group ${errors.name && "error"}`}>
              <input
                className="form__group-input"
                type="text"
                placeholder="Name"
                {...register("name")}
              />
              <img
                src={iconError}
                alt="icon-error"
                className="form__group-icon"
              />
              <span className="form__group-error">{errors.name?.message}</span>
            </div>

            <div className={`form__group ${errors.email && "error"}`}>
              <input
                className="form__group-input"
                type="text"
                {...register("email")}
                placeholder="Email"
              />
              <img
                src={iconError}
                alt="icon-error"
                className="form__group-icon"
              />
              <span className="form__group-error">{errors.email?.message}</span>
            </div>

            <div className={`form__group ${errors.message && "error"}`}>
              <textarea
                placeholder="Message"
                {...register("message")}
                className="form__group-textarea"
              />
              <img
                src={iconError}
                alt="icon-error"
                className="form__group-icon"
              />
              <span className="form__group-error">
                {errors.message?.message}
              </span>
            </div>

            <button className="btn">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
