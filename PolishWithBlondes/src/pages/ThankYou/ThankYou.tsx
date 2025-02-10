import './ThankYou.scss'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { pageLocator } from '../../functions';




const ThankYou = () => {
    const location = useLocation();
      const { title, subtitle, actionOne, buttonOne, actionTwo, buttonTwo, actionThree, buttonThree, iconOne, iconTwo, iconThree, buttonLinkOne, buttonLinkTwo, buttonLinkThree } = location.state || {};

const navigate = useNavigate()

useEffect(() => {
pageLocator({ locationId: "thankyou", yOffsetValue: -10 });
}, [location]);

      const handleClickTwo = () => {
        navigate(buttonLinkTwo || "/"); 
      }


  return (
   <div className="thankyou-upper-container" id="thankyou">
      <div className="thankyou-container">
        <div className="thankyou-title">{title}
        </div>
        <div className="thankyou-subtitle">
          <p>{subtitle}</p>
          </div>
                    </div>
   <div className="thankyou-lower-container">
               <div className="thankyou-content-container">
                <div className='intro'>Here are some other helpful resources you can check out</div>
                <div className="thankyou-actions">
            <div className="thankyou-action">
<img className="thankyou-icon" src={iconOne} />
                            <p>{actionOne}</p>
              <button className='btn'>
                 <a href={buttonLinkOne} target="_blank" rel="noopener noreferrer">
          {buttonOne}
        </a></button>
            </div>
            <div className="thankyou-action">
              <img className="thankyou-icon" src={iconTwo} />
                            <p>{actionTwo}</p>
              <button className='btn' onClick={handleClickTwo}>{buttonTwo}</button>
            </div>
                        <div className="thankyou-action">
                          <img className="thankyou-icon" src={iconThree} />
                              <p>{actionThree}</p>
              <button className='btn'><a href={buttonLinkThree} target="_blank" rel="noopener noreferrer">{buttonThree}</a></button>
          
            </div>
          </div>
        </div>
                              

          
        </div>
      </div>
  );
};

export default ThankYou;

