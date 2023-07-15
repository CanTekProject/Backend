import "../../assets/scss/partials/_ContactUs.scss";

function Policies() {
  return (
    <>
      <div className="policiesPage contact-us-container">
        <h2>Contact Us</h2>
        <p>
          Thank you for your interest in contacting us. Please use the form
          below to send us your inquiries, feedback, or any other questions you
          may have.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Policies;
