
import { useState } from 'react';
import './Contact.scss'
import FormDescription from '../../components/Form/FormDescription/FormDescription';
import FormContent from '../../components/Form/FormContent/FormContent';
import emailjs from "emailjs-com";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TEACHERS } from "../../data";
import { pageLocator } from '../../functions';

const navigateState = { state: { title: "Thank you", subtitle: "We will get back to you soon, most likely within 48h", actionOne: "Check out our shop with worksheets and listening practice, you can also claim some for free!", buttonOne: "Worksheets", actionTwo: "Subscribe to our monthly Polish Notes Newsletter if you haven't already  💌", buttonTwo: "Subscribe", actionThree: "Watch our Polish Grammar Cases Explained playlist to begin your learning process", buttonThree: "Playlist", iconOne:"src/assets/worksheet-icon.svg", iconTwo: "src/assets/mail-svgrepo-com.svg", iconThree: "src/assets/youtube-icon.svg", buttonLinkOne: "https://buymeacoffee.com/polishwithblnds/extras", buttonLinkTwo: "/#newsletter", buttonLinkThree: "https://www.youtube.com/watch?v=8EYQ-ozPRUE&list=PLdBAHfZCoj9KX_kswtFSlxGGTIyATifcB" } }


const Contact = () => {
    const navigate = useNavigate();

const [thankYouIsDisplayed, setThankYouIsDisplayed] = useState(false);


    const [modalIsOpen, setModalIsOpen] = useState(false);
  const [nameValue, setNameValue] = useState('');
   const [emailValue, setEmailValue] = useState('')
    const [optionalMessage, setOptionalMessage] = useState('')

   const [nameError, setNameError] = useState(false);
   const nameErrorMessage = 'The name field is required.'
   const [emailError, setEmailError] = useState(false);
         const emailErrorMessage = 'The email field is required.'
      const [emailValidError, setEmailValidError] = useState(false);
      const emailValidErrorMessage = 'Please enter a valid email address.'

    const isValidEmail = (email: string) => {
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   };

   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
    isValidEmail(event.target.value)
  };

   const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOptionalMessage(event.target.value);
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

     const templateParams = {
      to_name: "Polish with Blondes",
      to_email: TEACHERS.find((teacher)=>teacher.name === "Zuzia")!.email,
      from_name: nameValue,
      from_email: emailValue,
      optionalMessage: optionalMessage,
    };

        if (nameValue!=="" && emailValue!=="" && isValidEmail(emailValue)) {
          emailjs
      .send(
        "service_hjhzlek",
        "template_h75huhq", 
        templateParams,
        "N_b5K58BO5eV-WVg1" 
      )
      .then(
        () => {
          setThankYouIsDisplayed(true)
          navigate("/thankyou#thankyou", navigateState )
        })
        .catch((error) => {
          console.error("Email send error:", error);
        }
      );
    }
  }

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setModalIsOpen(true);
  };
  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setModalIsOpen(false);
  };



  return (
    <><div className="contact-outer-container" id="contact">
        <div className="container">
          <FormDescription
            titleContent="Contact us  ✉️"
            subheadingContent="Get in touch if you have any suggestions, questions or want to collaborate with us.
            Let's connect!"
            descriptionContent="Polish With Blondes"
          />
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="fname"
                value={nameValue}
                onChange={handleNameChange}
                name="fname"
                placeholder="Your name"
                required
              />
              <input
                type="text"
                id="email"
                name="email"
                value={emailValue}
        onChange={handleEmailChange} 
                placeholder="Your email"
                required
              />
              <textarea id="message" name="message" value={optionalMessage} onChange={handleMessageChange} placeholder="Your message" rows={4}></textarea>

              <p className="request-privacy-text">
                By clicking below, you will NOT be automatically added to the{' '}
                <u onClick={openModal} className="newsletter">
                  Polish Notes newsletter
                </u>
                .
              </p>
                {nameError && <p className="error-text">{nameErrorMessage}</p>}
        {emailError && <p className="error-text">{emailErrorMessage}</p>}
        {emailValidError && <p className="error-text">{emailValidErrorMessage}</p>}
              <button type="submit" className="btn">Send message</button>
            </form>
            
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        className="nl-modal-content"
      >
        <div className="nl-modal-container">
          <button onClick={closeModal} className='close-modal btn'>x</button>
          <FormDescription
            titleContent="Subscribe to Polish Notes"
            subheadingContent="Join a growing community of Polish learners. 💌"
            descriptionContent="Every two weeks we share worksheets based on our videos, useful Polish phrases that you can start using right away and additional content to make your language learning journey more fun."
            nlColumnLeft="nlColumnLeft"
            nlTitle="nlTitle"
            nlSubheading="nlSubheading"
            nlDescription="nlDescription"
          />
          {!thankYouIsDisplayed && <FormContent />}
        </div>
      </Modal>
    </>
      
  );
};

export default Contact;



