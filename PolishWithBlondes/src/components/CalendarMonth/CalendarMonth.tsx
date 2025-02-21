import './CalendarMonth.scss';
import CalendarDay from '../CalendarDay/CalendarDay';
import { FC, useEffect, useState } from 'react';
import { MONTHS } from '../../data';
import { availability } from '../../data';
import { TeacherName } from '../../types';

interface CalendarMonthProps {
  selectedTeacher: TeacherName;
  month: number;
  selectedTimeSetter: React.Dispatch<React.SetStateAction<Date | null>>;
  currentMonthNumber: number;
}

const CalendarMonth: FC<CalendarMonthProps> = ({
  month,
  selectedTimeSetter,
  selectedTeacher,
  currentMonthNumber,
}) => {
  const date = new Date();
  const firstDayObject = new Date(
    date.getFullYear(),
    date.getMonth() + month,
    1
  );

  const firstDayIndex = firstDayObject.getDay() - 1;

  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1 + month,
    0
  ).getDate();

  const [visibleDaySquares, setVisibleDaySquares] = useState(35);

  useEffect(() => {
    if (firstDayIndex === 5 && daysInMonth === 31) {
      setVisibleDaySquares(42);
    } else if (firstDayIndex === 6 && daysInMonth >= 30) {
      setVisibleDaySquares(42);
    } else {
      setVisibleDaySquares(35);
    }
  }, [firstDayIndex, daysInMonth]);

  const getDayofMonth = (index: number) => {
    return index >= firstDayIndex && index - firstDayIndex + 1 <= daysInMonth
      ? index - firstDayIndex + 1
      : undefined;
  };

  const getChosenDate = (index: number) => {
    return `${getDayofMonth(index)} ${MONTHS[date.getMonth() + month]} ${date.getFullYear()}`;
  };

  const filterAvailabilityForTeacher = (teacherName: TeacherName) => {
    return availability.filter((object) => object.teacherName === teacherName);
  };

  const aviailabilityForTeacher = filterAvailabilityForTeacher(selectedTeacher);

  const getAvailableDayForCalendarDay = (dayOfMonth: number | undefined) => {
    return aviailabilityForTeacher.find(
      (availableDay) =>
        availableDay.start.getDate() === dayOfMonth &&
        availableDay.start.getMonth() === currentMonthNumber + month
    );
    //this will return either the object or undefined, depending on if we had added avail. for
    //that day.
  };

  const calendarDaysArray = Array.from(
    { length: visibleDaySquares },
    (_, index) => (
      <CalendarDay
        key={index}
        index={index}
        day={getDayofMonth(index)}
        isBlank={getDayofMonth(index) === undefined}
        availableDay={getAvailableDayForCalendarDay(getDayofMonth(index))}
        // status={isDayAvailable(getDayofMonth(index) ?? 0)} // jesli getDayOfMonth(index) jest undefined to uzyj 0
        chosenDate={getChosenDate(index)}
        month={month}
        selectedTimeSetter={selectedTimeSetter}
        getDayofMonth={getDayofMonth}
      />
    )
  );

  return <div className="days-container">{calendarDaysArray}</div>;
};

export default CalendarMonth;
