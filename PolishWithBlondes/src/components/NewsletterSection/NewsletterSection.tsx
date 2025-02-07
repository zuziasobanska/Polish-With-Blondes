import './NewsletterSection.scss';
import FormDescription from '../Form/FormDescription/FormDescription';
import FormContent from '../Form/FormContent/FormContent';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const NewsletterSection = () => {
  const location = useLocation();

useEffect(() => {
  if (location.hash === "#newsletter") {
    setTimeout(() => {
      const newsletterSection = document.getElementById("newsletter");
      if (newsletterSection) {
        const yOffset = -30; 
        const y = newsletterSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 300);
  }
}, [location]);

  return (
    <div className="newsletter-outer-container" id="newsletter">
      <div className="container">
        <FormDescription
          titleContent="Subscribe to Polish Notes"
          subheadingContent="Join a growing community of Polish learners. 💌"
          descriptionContent="Every two weeks we share worksheets based on our videos, useful Polish phrases that you can start using right away and additional content to make your language learning journey more fun."
        />
        <FormContent />
      </div>
    </div>
  );
};
