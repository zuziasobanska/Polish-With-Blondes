import { useState } from 'react';
import './BookALesson.scss';
import Modal from 'react-modal';
import FormDescription from '../../components/Form/FormDescription/FormDescription';
import FormContent from '../../components/Form/FormContent/FormContent';

const BookALesson = () => {
  const [selectedLesson, setSelectedLesson] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setModalIsOpen(true);
  };
  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setModalIsOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLesson(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`The selected lesson is ${selectedLesson}`);
  };

  return (
    <>
      <div className="booklesson-outer-container">
        <div className="container">
          <FormDescription
            titleContent="Request a lesson"
            subheadingContent="Take the most important step in learning Polish today!
"
            descriptionContent="Fill out this form for us to get back to you with available times.
              Fill out this form for us to get back to you with available times.
              Fill out this form for us to get back to you with available times.
              Fill out this form for us to get back to you with available times.
              Fill out this form for us to get back to you with available times."
          />
          <div className="booklesson-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <select
                id="dropdown"
                value={selectedLesson}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select your teacher and lesson type ⬇
                </option>
                <option value="option1">30-minute lesson with Kasia</option>
                <option value="option2">30-minute lesson with Iza</option>
                <option value="option3">30-minute lesson with Zuzia</option>
                <option value="option4">45-minute lesson with Kasia</option>
                <option value="option5">45-minute lesson with Iza</option>
                <option value="option6">45-minute lesson with Zuzia</option>
              </select>
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Your message (optional)"
              />
              <p className="request-privacy-text">
                By clicking below, you will NOT be automatically added to the{' '}
                <u onClick={openModal} className="newsletter">
                  Polish Notes newsletter
                </u>
                .
              </p>
              <input type="submit" value="Request a lesson" className="btn" />
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
        // overlayClassName="nl-modal-overlay"
      >
        <button onClick={closeModal}></button>
        <div className="nl-modal-container">
          <FormDescription
            titleContent="Subscribe to Polish Notes"
            subheadingContent="Join a growing community of Polish learners. 💌"
            descriptionContent="//Every two weeks we share worksheets based on our videos, useful Polish phrases that you can start using right away and additional content to make your language learning journey more fun."
            nlColumnLeft="nlColumnLeft"
            nlTitle="nlTitle"
            nlSubheading="nlSubheading"
            nlDescription="nlDescription"
          />
          <FormContent />
        </div>
      </Modal>
    </>
  );
};

export default BookALesson;
