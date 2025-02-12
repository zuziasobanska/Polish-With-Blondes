export const pageLocator = ({
  targetElementId,
  yOffsetValue,
}: {
  targetElementId: string;
  yOffsetValue: number;
}) => {
  let timeoutId = -1;
    timeoutId = window.setTimeout(() => {
      const section = document.getElementById(targetElementId);
      if (section) {
        const yOffset = yOffsetValue;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 300)
  return timeoutId;
};
