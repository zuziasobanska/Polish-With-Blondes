export const pageLocator = ({
  locationId,
  yOffsetValue,
}: {
  locationId: string;
  yOffsetValue: number;
}) => {
  let timeoutId = -1;
    timeoutId = window.setTimeout(() => {
      const section = document.getElementById(locationId);
      if (section) {
        const yOffset = yOffsetValue;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 300)
  return timeoutId;
};
