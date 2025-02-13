import { useState } from 'react';
import './BookALesson.scss';
import Modal from 'react-modal';
import FormDescription from '../../components/Form/FormDescription/FormDescription';
import FormContent from '../../components/Form/FormContent/FormContent';
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TeacherName } from '../../types';
import LessonTeachers from '../../components/LessonTeachers/LessonTeachers';
import { TEACHERS } from "../../data";
import { pageLocator } from '../../functions';
import KasiaTeaching from '../../assets/kasia_teaching.mov'

const navigateState = { state: { title: "Thank you", subtitle: "Congrats on taking the first step in your language learning journey! We will get back to you with available times within 48h", actionOne: "Check out our shop with worksheets and listening practice, you can also claim some for free!", buttonOne: "Worksheets", actionTwo: "Subscribe to our monthly Polish Notes Newsletter if you haven't already  💌", buttonTwo: "Subscribe", actionThree: "In the meantime, you can watch our Polish Grammar Cases Explained playlist to begin your learning process", buttonThree: "Playlist", iconOne:"src/assets/worksheet-icon.svg", iconTwo: "src/assets/mail-svgrepo-com.svg", iconThree: "src/assets/youtube-icon.svg", buttonLinkOne: "https://buymeacoffee.com/polishwithblnds/extras", buttonLinkTwo: "/#newsletter", buttonLinkThree: "https://www.youtube.com/watch?v=8EYQ-ozPRUE&list=PLdBAHfZCoj9KX_kswtFSlxGGTIyATifcB" } }

const BookALesson = () => {
    const navigate = useNavigate();
     const location = useLocation();

useEffect(() => {
pageLocator({ targetElementId: "lesson", yOffsetValue: -30 });
}, [location]);

const [thankYouIsDisplayed, setThankYouIsDisplayed] = useState(false);

    const [modalIsOpen, setModalIsOpen] = useState(false);
  const [nameValue, setNameValue] = useState('');
   const [emailValue, setEmailValue] = useState('')
    const [selectedTeacher, setSelectedTeacher] = useState<TeacherName | "">(""); 
    const [selectedLength, setSelectedLength] = useState('');
    const [optionalMessage, setOptionalMessage] = useState('')

   const [nameError, setNameError] = useState(false);
   const nameErrorMessage = 'The name field is required.'
   const [emailError, setEmailError] = useState(false);
         const emailErrorMessage = 'The email field is required.'
      const [emailValidError, setEmailValidError] = useState(false);
      const emailValidErrorMessage = 'Please enter a valid email address.'
    const [teacherError, setTeacherError] = useState(false);
          const teacherErrorMessage = 'Please select a teacher.'
  const [lengthError, setLengthError] = useState(false);
            const lengthErrorMessage = 'Please select a lesson length.'

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

   const handleTeacherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTeacher(event.target.value as TeacherName);
  };

  const handleLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLength(event.target.value);
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
    }
    else if (!isValidEmail(emailValue)) {
      setEmailValidError(true)
    }
    else {
      setEmailError(false);
      setEmailValidError(false);

    }
    if (!selectedTeacher) {
      setTeacherError(true)
    } else {
      setTeacherError(false);
    }

     if (!selectedLength) {
      setLengthError(true)
    } 
    else {
      setLengthError(false);
    }

     const templateParams = {
      to_name: selectedTeacher,
      to_email: TEACHERS.find((teacher)=>teacher.name === selectedTeacher)!.email,
      from_name: nameValue,
      from_email: emailValue,
      length: selectedLength,
      optionalMessage: optionalMessage,
    };

        if (nameValue!=="" && emailValue!=="" && selectedLength!=="" && selectedTeacher!=="" && isValidEmail(emailValue)) {
          emailjs
      .send(
        "service_hjhzlek",
        "template_8sdybro", 
        templateParams,
        "N_b5K58BO5eV-WVg1" 
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setThankYouIsDisplayed(true)
          navigate("/thankyou#thankyou", navigateState)
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
    <>    
    <div className="booklesson-video-container">
      <div className="booklesson-video-overlay"></div>
  <video src={KasiaTeaching} className="booklesson-video" autoPlay loop muted />
  <h1 className="booklesson-video-text">Book a private class</h1>
</div>
    <div className="booklesson-outer-container" id="lesson">
        <div className="container">
          <FormDescription
            titleContent="Request a lesson"
            subheadingContent="Take the most important step in learning Polish today! 💪🏼
"
            descriptionContent="Learn Polish in a relaxed atmosphere with lots of speaking practice and simple explanations. Whether you just want to practise speaking, understand grammar or prepare for an exam, we will adapt the lesson to your needs!
              "
              extraContent='
              30 minutes: 95 PLN
              45 minutes: 115 PLN'
          />
          <div className="booklesson-form">
            <div className="booklesson-action">Fill out this form and we will get back to you with available times</div>
            <form onSubmit={handleSubmit}>
              <div className='radio-outer-container'>
<div className='choose'>Choose your teacher:</div>
            <div className="radio-wrapper">
              <input id="Kasia" type="radio" value="Kasia" name="teacher" onChange={handleTeacherChange}  />
              <label htmlFor="Kasia">Kasia</label>
               <input id="Iza" type="radio" value="Iza" name="teacher" onChange={handleTeacherChange} />
              <label htmlFor="Iza">Iza</label>
               <input id="Zuzia" type="radio" value="Zuzia" name="teacher" onChange={handleTeacherChange}/>
              <label htmlFor="Zuzia">Zuzia</label>
              </div>

              </div>
                          <div className='radio-outer-container'>
              <div className='choose'>Choose your lesson length:</div>
            <div className="radio-wrapper">
              <input id="30" type="radio" value="30" name="length" onChange={handleLengthChange} />
              <label htmlFor="30">30 minutes</label>
               <input id="45" type="radio" value="45" name="length" onChange={handleLengthChange}/>
              <label htmlFor="45">45 minutes</label>
              </div>
              </div>


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
                type="email"
                id="email"
                name="email"
                value={emailValue}
        onChange={handleEmailChange} 
                placeholder="Your email"
                required
              />
              <textarea id="message" name="message" value={optionalMessage} onChange={handleMessageChange} placeholder="Your message (optional)" rows={4}></textarea>

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
                                      {teacherError && <p className="error-text">{teacherErrorMessage}</p>}
                {lengthError && <p className="error-text">{lengthErrorMessage}</p>}

              <button type="submit" className="btn">Request a lesson</button>
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
    <LessonTeachers /></>
      
  );
};

export default BookALesson;



