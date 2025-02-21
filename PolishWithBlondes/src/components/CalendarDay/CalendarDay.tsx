import { FC, SetStateAction, useState } from 'react';
import './CalendarDay.scss';
import Modal from 'react-modal';
import { AvailableDay } from '../../types';

interface CalendarDayProps {
  day?: number;
  isBlank: boolean;
  chosenDate: string;
  month: number;
  selectedTimeSetter: React.Dispatch<React.SetStateAction<Date | null>>;
  index: number;
  getDayofMonth: (index: number) => number | undefined;
  availableDay: AvailableDay | undefined;
}

const CalendarDay: FC<CalendarDayProps> = ({
  day,
  isBlank,
  chosenDate,
  month,
  selectedTimeSetter,
  index,
  getDayofMonth,
  availableDay,
}) => {
  const date = new Date();

  const [hoursAreOpen, setHoursAreOpen] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [selectedHourIndex, setSelectedHourIndex] = useState<
    number | undefined
  >(undefined);
  const [selectedHour, setSelectedHour] = useState('');

  const openHours = () => {
    document.body.style.overflow = 'hidden';
    setHoursAreOpen(true);
  };

  const closeHours = () => {
    document.body.style.overflow = 'auto';
    setHoursAreOpen(false);
  };

  const handleDayClick = () => {
    if (availableDay) {
      openHours();
    }
    console.log(availableDay?.start.getHours());
  };

  const generateTimeSlots = (availableDay: AvailableDay) => {
    const startMinutes =
      availableDay.start.getHours() * 60 + availableDay.start.getMinutes();
    const endMinutes =
      availableDay.end.getHours() * 60 + availableDay.end.getMinutes() - 30;

    return Array.from(
      { length: Math.floor((endMinutes - startMinutes) / 15) + 1 },
      (_, index) => {
        const totalMinutes = startMinutes + index * 15;
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      }
    );
  };

  const handleHourClick = (
    currentIndex: number,
    timeSlot: SetStateAction<string>
  ) => {
    setButtonVisible(true);
    setSelectedHourIndex(currentIndex);
    setSelectedHour(timeSlot);
  };

  const handleButtonClick = () => {
    const dayOfMonth = getDayofMonth(index);
    const selectedHourNumber = Number(selectedHour.split(':')[0]);

    if (dayOfMonth === undefined || isNaN(selectedHourNumber)) {
      console.error('Invalid date values:', { dayOfMonth, selectedHour });
      return;
    }

    selectedTimeSetter(
      new Date(
        date.getFullYear(),
        date.getMonth() + month,
        dayOfMonth,
        selectedHourNumber
      )
    );
    closeHours();
    console.log(selectedTimeSetter);
  };

  return (
    <>
      <div
        onClick={handleDayClick}
        className={`${availableDay && !isBlank ? 'day-container available-day' : 'day-container blank'}`}
      >
        <div className="day-number">{day}</div>
      </div>
      <Modal
        isOpen={hoursAreOpen}
        onRequestClose={closeHours}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        className="nl-modal-content"
      >
        <div className="hours-container">
          <button onClick={closeHours} className="close-hours">
            x
          </button>
          <h1 className="hours-title">{chosenDate}</h1>
          <ul className="hours">
            {availableDay &&
              generateTimeSlots(availableDay).map((timeSlot, index) => (
                <li
                  key={index}
                  className={`${selectedHourIndex === index ? 'hour hour-selected' : 'hour'}`}
                  onClick={() => handleHourClick(index, timeSlot)}
                >
                  {timeSlot}
                </li>
              ))}
          </ul>
          {buttonVisible && (
            <button className="btn hour-button" onClick={handleButtonClick}>
              Select time
            </button>
          )}
          <footer className="hours-footer">
            The hours you see here are according to your own time zone
          </footer>
        </div>
      </Modal>
    </>
  );
};

export default CalendarDay;
