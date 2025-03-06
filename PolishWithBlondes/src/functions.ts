// export const pageLocator = ({
//   locationId,
//   yOffsetValue,
// }: {
//   locationId: string;
//   yOffsetValue: number;
// }) => {
//   let timeoutId = -1;
//   if (location.hash === `#${locationId}`) {
//     timeoutId = setTimeout(() => {
//       const section = document.getElementById(locationId);
//       if (section) {
//         const yOffset = yOffsetValue;
//         // const y = section.getBoundingClientRect().top + yOffset;
//         const y =
//           section.getBoundingClientRect().top + window.scrollY + yOffset;

//         // const y =
//         // section.getBoundingClientRect().top + window.pageYOffset + yOffset;

//         window.scrollTo({ top: y, behavior: 'smooth' });
//       }
//     }, 300);
//   }
//   return timeoutId;
// };

// window.pageYOffset;

export const pageLocator = ({
  locationId,
  yOffsetValue,
}: {
  locationId: string;
  yOffsetValue: number;
}) => {
  let timeoutId = -1;

  if (location.hash === `#${location}`) {
    timeoutId = setTimeout(() => {
      const section = document.getElementById(locationId);
      if (section) {
        const y =
          section.getBoundingClientRect().top + window.scrollY + yOffsetValue;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 300);
  }

  return timeoutId;
};

// const generateTimeSlots = (availableDay: AvailableDay) => {
//   const startMinutes =
//     availableDay.start.getHours() * 60 + availableDay.start.getMinutes();
//   const endMinutes =
//     availableDay.end.getHours() * 60 + availableDay.end.getMinutes() - 30;
//   // const startMinutes =
//   //   availableDay.start.getHours() * 60 + availableDay.start.getMinutes();
//   // const endMinutes =
//   //   availableDay.end.getHours() * 60 + availableDay.end.getMinutes() - 30;

//   return Array.from(
//     { length: Math.floor((endMinutes - startMinutes) / 15) + 1 },
//     (_, index) => {
//       const totalMinutes = startMinutes + index * 15;
//       const hours = Math.floor(totalMinutes / 60);
//       const minutes = totalMinutes % 60;
//       return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
//     }
//   );
// };
