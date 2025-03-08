import React, { useState } from 'react';
import './Login.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    city: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};
    const namePattern=/^[A-Za-z\s]+$/;
    if (formData.name.trim() === '') {
      errors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.length < 3) {
      errors.name = 'Name must be at least 3 characters long';
      isValid = false;
    }
    else if (!namePattern.test(formData.name)) {
      errors.name = 'Name can only contain letters and spaces';
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (formData.email.trim() === '') {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'Please enter a valid email';
      isValid = false;
    }

  
    const phonePattern = /^[0-9]{10}$/; 
    if (formData.phone.trim() === '') {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phonePattern.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number (10 digits)';
      isValid = false;
    }
    const coursePattern=/^[A-Za-z\s]+$/;
    if (formData.course.trim() === '') {
      errors.name ='course is required';
      isValid = false;
    } 
    else if (!coursePattern.test(formData.course)) {
      errors.course = 'course only contain letters and spaces';
      isValid = false;
    }
    const cityPattern=/^[A-Za-z\s]+$/;
    if (formData.city.trim() === '') {
      errors.city ='city is required';
      isValid = false;
    } 
    else if (!cityPattern.test(formData.course)) {
      errors.city = 'city only contain letters and spaces';
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
    
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img
          src="https://teksacademy.com/assets/img/logo/mainlogo.svg"
          alt="Teks login"
        />
        <h2>Teks login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Your email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Your phone number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="course">Course</label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter course"
            />
            {errors.course && <p className="error-text">{errors.course}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
            />
            {errors.city && <p className="error-text">{errors.city}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
