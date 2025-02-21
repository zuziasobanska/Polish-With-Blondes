import './NewsletterSection.scss';
import FormDescription from '../Form/FormDescription/FormDescription';
import FormContent from '../Form/FormContent/FormContent';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageLocator } from '../../functions';

export const NewsletterSection = () => {
  const location = useLocation();

  useEffect(() => {
    const timeoutId = pageLocator({
      locationId: 'newsletter',
      yOffsetValue: -30,
    });

    return () => {
      clearTimeout(timeoutId);
    };
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
