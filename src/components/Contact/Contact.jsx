import React, {useState} from "react";

//styles
import "./Contact.scss";

//imgs and icons
import iconError from "../../assets/svg/icon-error.svg";

const Contact = () => {
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmit(true);
		setFormErrors(validateForm(formValues));

		if (!validateForm(formValues).hasOwnProperty("name") && !validateForm(formValues).hasOwnProperty("email") && !validateForm(formValues).hasOwnProperty("message")) {
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
		const params = {
			name: formValues.name,
			email: formValues.email,
			message: formValues.message,
		};

		emailjs.send("service_b8lp4xr", "template_oz9sonn", params);
	};

	const validateForm = (values) => {
		const errors = {};
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
						<p className="contact__info-text">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
					</div>

					<form className="form" onSubmit={handleSubmit} autoComplete="off">
						<div className={formErrors.name && isSubmit ? "form__group error" : "form__group"}>
							<input className="form__group-input" type="text" name="name" value={formValues.name} placeholder="Name" onChange={handleChange} />
							<img src={iconError} alt="icon-error" className="form__group-icon" />
							<span className="form__group-error">{formErrors.name}</span>
						</div>

						<div className={formErrors.email && isSubmit ? "form__group error" : "form__group"}>
							<input className="form__group-input" type="text" name="email" value={formValues.email} placeholder="Email" onChange={handleChange} />
							<img src={iconError} alt="icon-error" className="form__group-icon" />
							<span className="form__group-error">{formErrors.email}</span>
						</div>

						<div className={formErrors.message && isSubmit ? "form__group error" : "form__group"}>
							<textarea placeholder="Message" name="message" value={formValues.message} className="form__group-textarea" onChange={handleChange} />
							<img src={iconError} alt="icon-error" className="form__group-icon" />
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
