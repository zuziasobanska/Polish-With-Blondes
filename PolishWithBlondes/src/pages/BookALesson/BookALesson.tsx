import { useState, useEffect } from 'react';
import './BookALesson.scss';
import Modal from 'react-modal';
import FormDescription from '../../components/Form/FormDescription/FormDescription';
// import FormContent from '../../components/Form/FormContent/FormContent';
// import emailjs from 'emailjs-com';
// import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { SelectedType, TeacherName } from '../../types';
import LessonTeachers from '../../components/LessonTeachers/LessonTeachers';
// import { TEACHERS } from '../../data';
import { pageLocator } from '../../functions';
import KasiaTeaching from '../../assets/kasia_teaching.mov';
import Calendar from '../../components/Calendar/Calendar';

// const navigateState = {
//   state: {
//     title: 'Thank you',
//     subtitle:
//       'Congrats on taking the first step in your language learning journey! We will get back to you with available times within 48h',
//     actionOne:
//       'Check out our shop with worksheets and listening practice, you can also claim some for free!',
//     buttonOne: 'Worksheets',
//     actionTwo:
//       "Subscribe to our monthly Polish Notes Newsletter if you haven't already  💌",
//     buttonTwo: 'Subscribe',
//     actionThree:
//       'In the meantime, you can watch our Polish Grammar Cases Explained playlist to begin your learning process',
//     buttonThree: 'Playlist',
//     iconOne: 'src/assets/worksheet-icon.svg',
//     iconTwo: 'src/assets/mail-svgrepo-com.svg',
//     iconThree: 'src/assets/youtube-icon.svg',
//     buttonLinkOne: 'https://buymeacoffee.com/polishwithblnds/extras',
//     buttonLinkTwo: '/#newsletter',
//     buttonLinkThree:
//       'https://www.youtube.com/watch?v=8EYQ-ozPRUE&list=PLdBAHfZCoj9KX_kswtFSlxGGTIyATifcB',
//   },
// };

const BookALesson = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timeoutId = pageLocator({ locationId: 'lesson', yOffsetValue: -30 });
    return () => {
      if (timeoutId !== -1) {
        clearTimeout(timeoutId);
      }
    };
  }, [location]);

  // const [thankYouIsDisplayed, setThankYouIsDisplayed] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherName | ''>('');
  const [selectedLength, setSelectedLength] = useState('');
  const [optionalMessage, setOptionalMessage] = useState('');

  const [selectedTime, setSelectedTime] = useState<SelectedType | null>(null);

  const [calendarMessage, setCalendarMessage] = useState('');

  // const [nameError, setNameError] = useState(false);
  // const nameErrorMessage = 'The name field is required.';
  // const [emailError, setEmailError] = useState(false);
  // const emailErrorMessage = 'The email field is required.';
  // const [emailValidError, setEmailValidError] = useState(false);
  // const emailValidErrorMessage = 'Please enter a valid email address.';
  // const [teacherError, setTeacherError] = useState(false);
  // const teacherErrorMessage = 'Please select a teacher.';
  // const [lengthError, setLengthError] = useState(false);
  // const lengthErrorMessage = 'Please select a lesson length.';

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
    console.log(nameValue);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
    isValidEmail(event.target.value);
  };

  const handleTeacherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTeacher(event.target.value as TeacherName);
    setCalendarMessage('Scroll down to see the calendar');
  };

  const handleLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLength(event.target.value);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setOptionalMessage(event.target.value);
  };

  const updateTimeSlots = async () => {
    if (!selectedTime) return;
    const { quarterId, nextQuarterId, thirdQuartedId } = selectedTime;
    if (!quarterId) {
      return;
    }

    console.log(selectedTime);
    // Na razie zaktualizowalismy tylko klikniety timeslot.
    // quarterId pozwala na zneleziene jego startu.
    //ten start/godzine musimy tak zmodifikowac zeby moc do niego dodac 15 minut i 30 minut
    //to musza byc nowe variables
    //jesli bedzie sie zgadzal z kolejnymi timeslotami, to wtedy je zablokujemy

    // DO ZROBIENIA:
    // Step 1. first ticket (json server data manipulation)
    // Request a lesson should update data in json server as following:
    // 1. jak 30min zablokuj obecny + 1
    // 2. jak 45min zablokuj obecny + 2
    // Create a Pull Request
    // Merge

    // Step 2. separate ticket (fronted data display basing on available quarters)
    // Properly display time slots basing on:
    // - time availability from json server (time qurters that are not taken)
    // - selected time length
    // examples:
    // EXAMPLE 1
    // - available time slots in JSON server: 9:00, 9:15, 9:30, 9:45 (meaning a teacher works from 9:00 till 10:00)
    // - Modal should display:
    //   - 9:00 and 9:15 when lesson length === 45min
    //   - 9:00, 9:15, 9:30 when lesson length === 30min
    // EXAMPLE 2
    // - available time slots in JSON server: 9:00, 9:15, 10:00, 10:15 (meaning a teacher works from 9:00 till 10:30 but has a lesson scheduled between 9:30 and 10:00)
    // - Modal should display:
    //   - nothing when lesson length === 45min
    //   - 9:00, and 10:00 when lesson length === 30min

    // Step 3. (lesson lenght management basing on selected time slot)
    // - Think about the case when a user already selected time slot and lesson length
    // - Basing on quarters availability and lesson lenght disable 45min button
    // examples:
    // EXAMPLE 1
    // - available time slots in JSON server: 9:00, 9:15, 9:30, 9:45 (meaning a teacher works from 9:00 till 10:00)
    // - user selected lesson length === 30min and lesson time 9:30 (meaning the lesson starts at 9:30 and finishes at 10:00)
    // - in this case, the 45min button should be disabled (because the lesson cant last 45 min)
    // EXAMPLE 2
    // - available time slots in JSON server: 9:00, 9:15, 9:30, 9:45 (meaning a teacher works from 9:00 till 10:00)
    // - user selected lesson length === 45min and lesson time 9:15 (meaning the lesson starts at 9:15and finishes at 10:00)
    // - in this case, nothing happens, both 30min and 45min buttons should be enabled (just make sure this is how the app works)
    // if length 30 min - patch selected and next quarter
    // if length 45min  - patch selected and next and next

    if (selectedLength === '30') {
      const patchResponse = await fetch(
        `http://localhost:3000/quarters/${quarterId}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isTaken: true }),
        }
      );

      if (!patchResponse.ok) {
        throw new Error('Failed to update');
      }

      const patchResponseTwo = await fetch(
        `http://localhost:3000/quarters/${nextQuarterId}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isTaken: true }),
        }
      );

      if (!patchResponseTwo.ok) {
        throw new Error('Failed to update');
      }
    } else if (selectedLength === '45') {
      const patchResponse = await fetch(
        `http://localhost:3000/quarters/${quarterId}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isTaken: true }),
        }
      );

      if (!patchResponse.ok) {
        throw new Error('Failed to update');
      }

      const patchResponseTwo = await fetch(
        `http://localhost:3000/quarters/${nextQuarterId}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isTaken: true }),
        }
      );

      if (!patchResponseTwo.ok) {
        throw new Error('Failed to update');
      }
      const patchResponseThree = await fetch(
        `http://localhost:3000/quarters/${thirdQuartedId}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isTaken: true }),
        }
      );

      if (!patchResponseThree.ok) {
        throw new Error('Failed to update');
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if (!nameValue.trim()) {
    //   setNameError(true);
    // } else {
    //   setNameError(false);
    // }

    // if (!emailValue.trim()) {
    //   setEmailError(true);
    // } else if (!isValidEmail(emailValue)) {
    //   setEmailValidError(true);
    // } else {
    //   setEmailError(false);
    //   setEmailValidError(false);
    // }
    // if (!selectedTeacher) {
    //   setTeacherError(true);
    // } else {
    //   setTeacherError(false);
    // }

    // if (!selectedLength) {
    //   setLengthError(true);
    // } else {
    //   setLengthError(false);
    // }

    // const templateParams = {
    //   to_name: selectedTeacher,
    //   to_email: TEACHERS.find((teacher) => teacher.name === selectedTeacher)!
    //     .email,
    //   from_name: nameValue,
    //   from_email: emailValue,
    //   length: selectedLength,
    //   optionalMessage: optionalMessage,
    // };

    // if (
    //   nameValue !== '' &&
    //   emailValue !== '' &&
    //   selectedLength !== '' &&
    //   selectedTeacher !== '' &&
    //   isValidEmail(emailValue)
    // ) {
    //   emailjs
    //     .send(
    //       'service_hjhzlek',
    //       'template_8sdybro',
    //       templateParams,
    //       'N_b5K58BO5eV-WVg1'
    //     )
    //     .then(() => {
    //       setThankYouIsDisplayed(true);
    updateTimeSlots();
    //       navigate('/thankyou#thankyou', navigateState);
    //     })
    //     .catch((error) => {
    //       console.error('Email send error:', error);
    //     });
    // }
  };

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
        <video
          src={KasiaTeaching}
          className="booklesson-video"
          autoPlay
          loop
          muted
        />
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
            extraContent="
              30 minutes: 95 PLN
              45 minutes: 115 PLN"
          />
          <div className="booklesson-form">
            <div className="booklesson-action">
              Fill out this form and we will get back to you to confirm your
              chosen day and time
            </div>
            <form onSubmit={handleSubmit}>
              <div className="radio-outer-container">
                <div className="choose">Choose your teacher:</div>
                <div className="radio-wrapper">
                  <input
                    id="Kasia"
                    type="radio"
                    value="Kasia"
                    name="teacher"
                    onChange={handleTeacherChange}
                  />
                  <label htmlFor="Kasia">Kasia</label>
                  <input
                    id="Iza"
                    type="radio"
                    value="Iza"
                    name="teacher"
                    onChange={handleTeacherChange}
                  />
                  <label htmlFor="Iza">Iza</label>
                  <input
                    id="Zuzia"
                    type="radio"
                    value="Zuzia"
                    name="teacher"
                    onChange={handleTeacherChange}
                  />
                  <label htmlFor="Zuzia">Zuzia</label>
                </div>
              </div>
              <div className="radio-outer-container">
                <div className="choose">Choose your lesson length:</div>
                <div className="radio-wrapper">
                  <input
                    id="30"
                    type="radio"
                    value="30"
                    name="length"
                    onChange={handleLengthChange}
                  />
                  <label htmlFor="30">30 minutes</label>
                  <input
                    id="45"
                    type="radio"
                    value="45"
                    name="length"
                    onChange={handleLengthChange}
                  />
                  <label htmlFor="45">45 minutes</label>
                </div>
              </div>
              <div className="selected-time">
                {!selectedTime ? (
                  calendarMessage
                ) : (
                  <p>
                    Your selected time:{' '}
                    <b className="selected-time-inner">
                      {`${selectedTime.chosenDate}, `}
                      {''}
                      {selectedTime.start.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                      })}
                      <b>
                        {selectedLength !== '' &&
                          ` - ${new Date(
                            selectedTime.start.getTime() +
                              Number(selectedLength) * 60000
                          ).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                          })}`}
                      </b>
                    </b>
                  </p>
                )}
              </div>

              <input
                type="text"
                id="fname"
                value={nameValue}
                onChange={handleNameChange}
                name="fname"
                placeholder="Your name"
                // required
              />
              <input
                type="email"
                id="email"
                name="email"
                value={emailValue}
                onChange={handleEmailChange}
                placeholder="Your email"
                // required
              />
              <textarea
                id="message"
                name="message"
                value={optionalMessage}
                onChange={handleMessageChange}
                placeholder="Your message (optional)"
                rows={4}
              ></textarea>

              <p className="request-privacy-text">
                By clicking below, you will NOT be automatically added to the{' '}
                <u onClick={openModal} className="newsletter">
                  Polish Notes newsletter
                </u>
                .
              </p>
              {/* {nameError && <p className="error-text">{nameErrorMessage}</p>}
              {emailError && <p className="error-text">{emailErrorMessage}</p>}
              {emailValidError && (
                <p className="error-text">{emailValidErrorMessage}</p>
              )}
              {teacherError && (
                <p className="error-text">{teacherErrorMessage}</p>
              )}
              {lengthError && (
                <p className="error-text">{lengthErrorMessage}</p>
              )} */}

              <button type="submit" className="btn">
                Request a lesson
              </button>
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
          <button onClick={closeModal} className="close-modal btn">
            x
          </button>
          <FormDescription
            titleContent="Subscribe to Polish Notes"
            subheadingContent="Join a growing community of Polish learners. 💌"
            descriptionContent="Every two weeks we share worksheets based on our videos, useful Polish phrases that you can start using right away and additional content to make your language learning journey more fun."
            nlColumnLeft="nlColumnLeft"
            nlTitle="nlTitle"
            nlSubheading="nlSubheading"
            nlDescription="nlDescription"
          />
          {/* {!thankYouIsDisplayed && <FormContent />} */}
        </div>
      </Modal>
      {selectedTeacher && (
        <Calendar
          selectedTeacher={selectedTeacher}
          selectedTimeSetter={setSelectedTime}
        />
      )}
      <LessonTeachers />
    </>
  );
};

export default BookALesson;
