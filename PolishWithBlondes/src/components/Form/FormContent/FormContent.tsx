import './FormContent.scss'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const navigateState = { state: { title: "Thank you", subtitle: "You're officially subscribed to the Polish Notes monthly newsletter! Please check your inbox to confirm the subscription 💌", actionOne: "Check out our shop with worksheets and listening practice, you can also claim some for free!", buttonOne: "Worksheets", actionTwo: "Book a private online lesson or conversation practice with one of us", buttonTwo: "Choose teacher", actionThree: "Watch our Polish Grammar Cases Explained playlist to begin your learning process", buttonThree: "Playlist", iconOne:"src/assets/worksheet-icon.svg", iconTwo: "src/assets/mail-svgrepo-com.svg", iconThree: "src/assets/youtube-icon.svg", buttonLinkOne: "https://buymeacoffee.com/polishwithblnds/extras", buttonLinkTwo: "/lessons#lesson", buttonLinkThree: "https://www.youtube.com/watch?v=8EYQ-ozPRUE&list=PLdBAHfZCoj9KX_kswtFSlxGGTIyATifcB" } }


const FormContent = () => {

    const navigate = useNavigate();
   const [nameValue, setNameValue] = useState('');
   const [emailValue, setEmailValue] = useState('');
   const [nameError, setNameError] = useState(false);
   const [emailError, setEmailError] = useState(false);
  const [emailValidError, setEmailValidError] = useState(false);
  const nameErrorMessage = 'The name field is required.'
  const emailErrorMessage = 'The email field is required.'
  const emailValidErrorMessage = 'Please enter a valid email address.'

    const isValidEmail = (email: string) => {
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   };

   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
 setNameValue(event.target.value.replace(/^\s+$/, ""));
  };

   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
 setEmailValue(event.target.value.replace(/^\s+$/, ""));
     isValidEmail(event.target.value)
  };
     
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

     if (!nameValue.trim()) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!emailValue.trim()) {
      setEmailError(true);
    } else if (!isValidEmail(emailValue)) {
      setEmailValidError(true);
    }
    else {
      setEmailError(false);
        }

    if (nameValue!=="" && emailValue!=="" && isValidEmail(emailValue)) {
   navigate("/thankyou#thankyou", navigateState )
    }
  }

  return (
    <div className="column-right">
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input type="text" id="fname" name="fname" placeholder="First Name"
        value={nameValue}
        onChange={handleNameChange}                 required
/>
        <input type="text" id="email" name="email" placeholder="Email"
        value={emailValue}
        onChange={handleEmailChange}                required
/>
        {nameError && <p className="error-text">{nameErrorMessage}</p>}
        {emailError && <p className="error-text">{emailErrorMessage}</p>}
        {emailValidError && <p className="error-text">{emailValidErrorMessage}</p>}
        <p className="privacy-text">
          By signing up, you'll receive communications from Polish with Blondes.
          For more information, see our
          <a href="#"> privacy policy</a>.
        </p>
 <button type="submit" className="btn modal-btn">Subscribe</button>  
      
      </form>
    </div>
  );
};


export default FormContent;


