import { FC } from 'react';
import './FormDescription.scss';

interface FormDescriptionProps {
  nlColumnLeft?: string;
  nlTitle?: string;
  nlSubheading?: string;
  nlDescription?: string;
  titleContent: string;
  subheadingContent: string;
  descriptionContent: string;
  extraContent?: string;
}

const FormDescription: FC<FormDescriptionProps> = ({
  nlColumnLeft,
  nlTitle,
  nlSubheading,
  nlDescription,
  titleContent,
  subheadingContent,
  descriptionContent,
  extraContent,
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
      {extraContent !== '' && <p className="extracontent">{extraContent}</p>}
    </div>
  );
};

export default FormDescription;
