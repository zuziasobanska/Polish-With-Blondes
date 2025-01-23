import './FormContent.scss'

const FormContent = () => {
  return (
    <div className="column-right">
      <form className="newsletter-form">
        <input type="text" id="fname" name="fname" placeholder="First Name" />
        <input type="text" id="email" name="email" placeholder="Email" />
        <p className="privacy-text">
          By signing up, you'll receive communications from Polish with Blondes.
          For more information, see our
          <a href="#"> privacy policy</a>.
        </p>
        <input type="submit" value="Subscribe" className="btn" />
      </form>
    </div>
  );
};

export default FormContent;
