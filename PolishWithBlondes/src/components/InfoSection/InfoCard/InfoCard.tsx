import './InfoCard.scss';
import { useNavigate } from 'react-router-dom';

export const InfoCard = ({
  title,
  description,
  icon,
  redirect,
  newWindow,
}: {
  title: string;
  description: string;
  icon: string;
  redirect: string;
  newWindow: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="card-container"
      onClick={() =>
        newWindow
          ? window.open(redirect, '_blank', 'noopener,noreferrer')
          : navigate(redirect)
      }
    >
      <img className="card-icon" src={icon} />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};
