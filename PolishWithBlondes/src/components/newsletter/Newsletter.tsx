import './Newsletter.scss';

export const Newsletter = () => {
  return (
    <div className="newsletter-outer-container">
      <div className="container">
        <div className="column left">
          <div className="title">
            <p>Subscribe to Polish Notes</p>
            <hr className="line"></hr>
          </div>
          <p className="subheading">
            Join a growing community of Polish learners.
          </p>
          <p className="description">
            Every two weeks we share worksheets based on our videos, useful
            Polish phrases that you can start using right away and additional
            content to make your language learning journey more fun.
          </p>
        </div>
        <div className="column right">
          <img className="iphone-icon" src="src/assets/iphone-icon.png" />
        </div>
      </div>
    </div>
  );
};
