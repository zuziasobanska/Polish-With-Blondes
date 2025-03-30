import './CalendarMonth.scss';
import CalendarDay from '../CalendarDay/CalendarDay';
import { FC, useEffect, useState } from 'react';
import { MONTHS } from '../../data';
import { AvailableDay, SelectedType, TeacherName } from '../../types';

interface CalendarMonthProps {
  selectedTeacher: TeacherName;
  month: number;
  selectedTimeSetter: React.Dispatch<React.SetStateAction<SelectedType | null>>;
  currentMonthNumber: number;
}

const CalendarMonth: FC<CalendarMonthProps> = ({
  month,
  selectedTimeSetter,
  selectedTeacher,
  currentMonthNumber,
}) => {
  const [availabilityData, setAvailabilityData] = useState<AvailableDay[]>([]);

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
    const fetchDays = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/days?teacherName=${selectedTeacher}`
        );
        if (!response.ok) throw new Error('Failed to fetch days');
        const data: AvailableDay[] = await response.json();

        setAvailabilityData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching days:', error);
      }
    };

    fetchDays();
  }, [setAvailabilityData, selectedTeacher]);

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

  const getAvailableDayForCalendarDay = (
    dayOfMonth: number | undefined
  ): AvailableDay | undefined => {
    return availabilityData.find((availableDay: AvailableDay) => {
      return (
        new Date(availableDay.date).getDate() === dayOfMonth &&
        new Date(availableDay.date).getMonth() === currentMonthNumber + month
      );
    });
  };

  const calendarDaysArray = Array.from(
    { length: visibleDaySquares },
    (_, index) => (
      <CalendarDay
        key={index}
        day={getDayofMonth(index)}
        isBlank={getDayofMonth(index) === undefined}
        chosenDate={getChosenDate(index)}
        selectedTimeSetter={selectedTimeSetter}
        availableDay={getAvailableDayForCalendarDay(getDayofMonth(index))}
      />
    )
  );

  return <div className="days-container">{calendarDaysArray}</div>;
};

export default CalendarMonth;
