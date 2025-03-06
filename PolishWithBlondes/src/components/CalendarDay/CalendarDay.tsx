import { FC, useState } from 'react';
import './CalendarDay.scss';
import Modal from 'react-modal';
import { AvailableDay } from '../../types';

interface CalendarDayProps {
  day?: number;
  isBlank: boolean;
  chosenDate: string;
  selectedTimeSetter: React.Dispatch<
    React.SetStateAction<{ start: Date; chosenDate: string } | null>
  >;
  availableDay: AvailableDay | undefined;
}

const CalendarDay: FC<CalendarDayProps> = ({
  day,
  isBlank,
  chosenDate,
  selectedTimeSetter,
  availableDay,
}) => {
  const [hoursAreOpen, setHoursAreOpen] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [selectedHourIndex, setSelectedHourIndex] = useState<
    number | undefined
  >(undefined);

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
  };

  const handleHourClick = (currentIndex: number, timeSlot: Date) => {
    setButtonVisible(true);
    setSelectedHourIndex(currentIndex);

    selectedTimeSetter({ start: timeSlot, chosenDate: chosenDate });
  };

  const handleButtonClick = () => {
    closeHours();
  };

  return (
    <>
      <div
        onClick={handleDayClick}
        className={`${
          availableDay && !isBlank
            ? 'day-container available-day'
            : 'day-container blank'
        }`}
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
              availableDay.quarters.map((timeSlot, index) => (
                <li
                  key={index}
                  className={`${
                    selectedHourIndex === index ? 'hour hour-selected' : 'hour'
                  }`}
                  onClick={() => handleHourClick(index, timeSlot.start)}
                >
                  {timeSlot.start.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                  })}
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
