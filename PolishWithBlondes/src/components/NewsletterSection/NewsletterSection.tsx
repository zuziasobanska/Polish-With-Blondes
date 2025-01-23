import './NewsletterSection.scss';
import FormDescription from '../Form/FormDescription/FormDescription';
import FormContent from '../Form/FormContent/FormContent';

export const NewsletterSection = () => {
  return (
    <div className="newsletter-outer-container">
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
