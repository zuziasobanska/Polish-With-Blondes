import { FC, useEffect, useState } from 'react';
import './CalendarDay.scss';
import Modal from 'react-modal';
import { AvailableDay, Quarter, SelectedType } from '../../types';
import clsx from 'clsx';

interface CalendarDayProps {
  day?: number;
  isBlank: boolean;
  chosenDate: string;
  selectedTimeSetter: React.Dispatch<React.SetStateAction<SelectedType | null>>;
  availableDay: AvailableDay | undefined;
}

const CalendarDay: FC<CalendarDayProps> = ({
  day,
  isBlank,
  chosenDate,
  selectedTimeSetter,
  availableDay,
}) => {
  const [quarters, setQuarters] = useState<Quarter[]>([]);
  const [hoursAreOpen, setHoursAreOpen] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [selectedHourIndex, setSelectedHourIndex] = useState<
    number | undefined
  >(undefined);
  const [selectedQuarterIsTaken, setSelectedQuarterIsTaken] = useState(false);

  useEffect(() => {
    if (selectedQuarterIsTaken) {
      setButtonVisible(false);
    } else {
      setButtonVisible(true);
    }
  }, [selectedQuarterIsTaken]);

  useEffect(() => {
    const fetchQuartersForDay = async (dayId: number) => {
      try {
        const response = await fetch(
          `http://localhost:3000/quarters?dayId=${dayId}`
        );
        if (!response.ok)
          throw new Error('Failed to fetch quarters for this day');
        const data: Quarter[] = await response.json();
        setQuarters(data);
      } catch (error) {
        console.error('Error fetching quarters:', error);
      }
    };

    if (availableDay) {
      fetchQuartersForDay(availableDay.id);
    }
  }, [availableDay]);

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

  const handleHourClick = (
    currentIndex: number,
    start: string,
    id: number,
    isTaken: boolean,
    nextQuarterId: number,
    thirdQuarterId: number
  ) => {
    setSelectedQuarterIsTaken(isTaken);
    setSelectedHourIndex(currentIndex);

    selectedTimeSetter({
      start: new Date(start),
      chosenDate: chosenDate,
      quarterId: id,
      nextQuarterId,
      // nextQuarterId: nextQuarterId
      thirdQuarterId,
      //same here, its an abbreviation when key and value are of the same name
    });
    // here we need to add information about the next two time slots (we assume they are always available (see ticket no 2 - fronted data display basing on available quarters))
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
            {quarters.map((quarter, index, arrayOfQuarters) => (
              <li
                key={index}
                className={clsx('hour', {
                  'hour-selected': selectedHourIndex === index,
                  'taken-hour': quarter.isTaken,
                })}
                onClick={() =>
                  handleHourClick(
                    index,
                    quarter.start,
                    quarter.id,
                    quarter.isTaken,
                    arrayOfQuarters[index + 1]?.id,
                    arrayOfQuarters[index + 2]?.id
                  )
                }
              >
                {new Date(quarter.start).toLocaleTimeString([], {
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
