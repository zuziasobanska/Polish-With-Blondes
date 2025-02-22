import heroPic1 from '../../assets/hero-pic1.png';
import './Hero.scss';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="hero">
        <div className="col left">
          <h1 className="hero-title">
            <strong>Cześć!</strong>
          </h1>
          <h3 className="hero-sub">
            We&apos;re Kasia, Iza and Zuzia and together we form{' '}
            <a
              href="https://www.youtube.com/@polishwithblondes"
              target="_blank"
              rel="noreferrer"
            >
              Polish with Blondes
            </a>{' '}
            on Youtube.
          </h3>
          <h3 className="hero-text">
            Here you&apos;ll find all sorts of materials to help you learn
            Polish!
          </h3>
          <button className="btn" onClick={() => navigate('/lessons')}>
            Book a 1:1 online class with us
          </button>
        </div>
        <div className="col pic">
          <img src={heroPic1} className="hero-pic" />
        </div>
      </div>
    </div>
  );
};
