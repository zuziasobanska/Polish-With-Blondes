import CalendarMonth from '../CalendarMonth/CalendarMonth';
import { MONTHS } from '../../data';
import { dayNames } from '../../data';
import './Calendar.scss';
import { FC, useEffect, useState } from 'react';
import { pageLocator } from '../../functions';
import { useLocation } from 'react-router-dom';
import { SelectedType, TeacherName } from '../../types';

interface CalendarProps {
  selectedTeacher: TeacherName;
  selectedTimeSetter: React.Dispatch<React.SetStateAction<SelectedType | null>>;
}

const Calendar: FC<CalendarProps> = ({
  selectedTeacher,
  selectedTimeSetter,
}) => {
  const location = useLocation();
  useEffect(() => {
    const timeoutId = pageLocator({
      locationId: 'calendar-container',
      yOffsetValue: -30,
    });

    return () => {
      clearTimeout(timeoutId);
    };
  }, [location]);

  const date = new Date();
  const currentMonth = MONTHS[date.getMonth()];
  const nextMonth = MONTHS[date.getMonth() + 1];
  const currentMonthNumber = date.getMonth();

  const [visibleMonth, setVisibleMonth] = useState(0);

  const handleCurrentMonthClick = () => {
    setVisibleMonth(0);
  };
  const handleNextMonthClick = () => {
    setVisibleMonth(1);
  };

  return (
    <div className="calendar-container" id="calendar-container">
      <h1 className="calendar-title">{` ${selectedTeacher}'s available times`}</h1>
      <h2 className="calendar-subtitle">
        Select the day that suits you to see the hours
      </h2>
      <div className="months-container">
        <ul className="month-list">
          <li
            className={
              visibleMonth === 0 ? 'month-name active-month' : 'month-name'
            }
            onClick={handleCurrentMonthClick}
          >
            {currentMonth}
          </li>
          <li
            className={
              visibleMonth === 1 ? 'month-name active-month' : 'month-name'
            }
            onClick={handleNextMonthClick}
          >
            {nextMonth}
          </li>
        </ul>
        <div className="day-names">
          {dayNames.map((day, index) => (
            <div key={index} className="day-name">
              {day}
            </div>
          ))}
        </div>
      </div>
      <CalendarMonth
        selectedTeacher={selectedTeacher}
        month={visibleMonth}
        selectedTimeSetter={selectedTimeSetter}
        currentMonthNumber={currentMonthNumber}
      />
    </div>
  );
};

export default Calendar;
