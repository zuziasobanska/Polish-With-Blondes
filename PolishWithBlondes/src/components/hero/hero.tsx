import heroPic1 from '../../assets/hero-pic1.png';
import './hero.scss';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="col left">
        <h1 className="hero-title">
          <strong>Cześć!</strong>
        </h1>
        <h3 className="hero-sub">
          We're Kasia, Iza and Zuzia and together we form{' '}
          <a href="https://www.youtube.com/@polishwithblondes" target="_blank">
            Polish with Blondes
          </a>{' '}
          on Youtube.
        </h3>
        <h3 className="hero-text">
          Here you'll find all sorts of materials to help you learn Polish!
        </h3>
        <button className="btn" onClick={() => alert('CTA button was clicked')}>
          Book a 1:1 online class with us
        </button>
      </div>
      <div className="col pic">
        <img src={heroPic1} className="hero-pic" />
      </div>
    </div>
  );
};
