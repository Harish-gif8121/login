import React, { useState } from 'react';
import './Login.css';

function LoginPage() {
  
  return (
    <div className="login-container">
      <div className="login-form">
        <img src="https://teksacademy.com/assets/img/logo/mainlogo.svg" alt="Teks login" />
       <h2>Teks login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your email address</label>
            <input type="mail" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Your phone number</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="course">Course</label>
            <input type="text" id="course" name="course" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage
;