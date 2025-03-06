import './CalendarMonth.scss';
import CalendarDay from '../CalendarDay/CalendarDay';
import { FC, useEffect, useState } from 'react';
import { MONTHS } from '../../data';
import { TeacherName } from '../../types';
import { toZonedTime } from 'date-fns-tz';

interface CalendarMonthProps {
  selectedTeacher: TeacherName;
  month: number;
  selectedTimeSetter: React.Dispatch<
    React.SetStateAction<{ start: Date; chosenDate: string } | null>
  >;
  currentMonthNumber: number;
}

interface Quarter {
  isTaken: boolean;
  start: Date;
  id: number;
}

interface AvailableDay {
  teacherName: TeacherName;
  date: Date;
  quarters: Quarter[];
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
    const fetchData = async () => {
      const response = await fetch('data.json');
      const data: AvailableDay[] = await response.json();

      setAvailabilityData(
        data.map((day) => ({
          ...day,
          date: new Date(day.date),
          quarters: day.quarters.map((quarter) => {
            const userTimeZone =
              Intl.DateTimeFormat().resolvedOptions().timeZone;

            const localDate = toZonedTime(
              new Date(quarter.start),
              userTimeZone
            );

            return { ...quarter, start: localDate };
          }),
        }))
      );
    };

    fetchData();
  }, []);

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
    return availabilityData.filter(
      (object) => object.teacherName === teacherName
    );
  };

  const aviailabilityForTeacher = filterAvailabilityForTeacher(selectedTeacher);

  const getAvailableDayForCalendarDay = (dayOfMonth: number | undefined) => {
    return aviailabilityForTeacher.find(
      (availableDay) =>
        availableDay.date.getDate() === dayOfMonth &&
        availableDay.date.getMonth() === currentMonthNumber + month
    );
  };

  const calendarDaysArray = Array.from(
    { length: visibleDaySquares },
    (_, index) => (
      <CalendarDay
        key={index}
        day={getDayofMonth(index)}
        isBlank={getDayofMonth(index) === undefined}
        availableDay={getAvailableDayForCalendarDay(getDayofMonth(index))}
        chosenDate={getChosenDate(index)}
        selectedTimeSetter={selectedTimeSetter}
      />
    )
  );

  return <div className="days-container">{calendarDaysArray}</div>;
};

export default CalendarMonth;
