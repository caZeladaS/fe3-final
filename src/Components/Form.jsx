import React, { useState } from "react";

const Form = () => {
  const [formValues, setFormValues] = useState({ name: "", email: "", subject: "" });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

  };

  const validateForm = (values) => {
    const errors = {};
    const regexName = /^[a-zA-Z\s]*$/; // Solo permite letras y espacios
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; // Validación simple de email

    if (!values.name) {
      errors.name = "El nombre es requerido";
    } else if (!regexName.test(values.name)) {
      errors.name = "El nombre solo puede contener letras y espacios";
    }

    if (!values.email) {
      errors.email = "El email es requerido";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "El formato del email no es correcto";
    }

    if (!values.subject) {
      errors.subject = "El asunto es requerido";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formValues);
    if (Object.keys(errors).length === 0) {
  
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <code>Send us your questions and we will contact you</code>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formValues.name}
          onChange={handleChange}
          required
        />
        {formErrors.name && <p>{formErrors.name}</p>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        {formErrors.email && <p>{formErrors.email}</p>}

        <label htmlFor="subject">Subject</label>
        <textarea
          className="textarea"
          id="subject"
          name="subject"
          value={formValues.subject}
          onChange={handleChange}
          required
          rows="3"
        />
        {formErrors.subject && <p>{formErrors.subject}</p>}
        <button type="submit" className="contactButton">Send</button>
      </form>
    </div>
  );
};

export default Form;
