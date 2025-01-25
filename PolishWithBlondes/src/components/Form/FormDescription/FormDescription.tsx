import './FormDescription.scss';

interface FormDescriptionProps {
  nlColumnLeft?: string;
  nlTitle?: string;
  nlSubheading?: string;
  nlDescription?: string;
  titleContent: string;
  subheadingContent: string;
  descriptionContent: string;
}

const FormDescription: React.FC<FormDescriptionProps> = ({
  nlColumnLeft,
  nlTitle,
  nlSubheading,
  nlDescription,
  titleContent,
  subheadingContent,
  descriptionContent,
}) => {
  return (
    <div className={`column left ${nlColumnLeft || ''}`}>
      <div className={`title ${nlTitle || ''}`}>
        <p>{titleContent}</p>
        <hr className="line"></hr>
      </div>
      <p className={`subheading ${nlSubheading || ''}`}>{subheadingContent}</p>
      <p className={`description ${nlDescription || ''}`}>
        {descriptionContent}
      </p>
    </div>
  );
};

export default FormDescription;
