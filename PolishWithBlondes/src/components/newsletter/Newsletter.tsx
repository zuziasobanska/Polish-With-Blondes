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
            Join a growing community of Polish learners. 💌
          </p>
          <p className="description">
            Every two weeks we share worksheets based on our videos, useful
            Polish phrases that you can start using right away and additional
            content to make your language learning journey more fun.
          </p>
        </div>
        <div className="column right">
          <form>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
            ></input>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            ></input>
            <br />
            <p className="privacy-text">
              By signing up, you'll receive communications from Polish with
              Blondes. For more information, see our{' '}
              <a href="#">privacy policy</a>.
            </p>
            <br />
            <input type="submit" value="Subscribe" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};
