export const pageLocator = ({
  locationId,
  yOffsetValue,
}: {
  locationId: string;
  yOffsetValue: number;
}) => {
  let timeoutId = -1;

  if (location.hash === `#${location}`) {
    timeoutId = window.setTimeout(() => {
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
