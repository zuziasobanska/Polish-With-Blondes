import './Footer.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="outer-container-footer">
      <div className="container">
        <div className="column">
          <ul>
            <li>
              <a href="">Book a lesson</a>
            </li>
            <li>
              <a href="">Newsletter</a>
            </li>
            <li>
              <a href="">Worksheets</a>
            </li>
            <li>
              <a href="">Podcasts</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li>
              <a
                href="https://www.youtube.com/@polishwithblondes"
                target="_blank"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://buymeacoffee.com/polishwithblnds"
                target="_blank"
              >
                Support our work
              </a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="column icons">
          <div className="footer-icons">
            <img className="footer-icon" src="src/assets/ig-icon.png" />
            <img className="footer-icon" src="src/assets/facebook-icon.png" />
            <img className="footer-icon" src="src/assets/yt-icon.png" />
            <img className="footer-icon" src="src/assets/tiktok-icon.png" />
          </div>
          <p className="icons8">
            Icons by
            <a target="_blank" href="https://icons8.com">
              Icons8
            </a>
          </p>
          <p>Copyright {currentYear} Polish With Blondes</p>
          <div className="footer-policies">
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
