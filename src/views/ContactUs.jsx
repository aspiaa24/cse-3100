import '../views/ContactUs.css'; 

export default function ContactUs() {
  return (
    <section className="contact-us-container">
      <div className="contact-us-content">
        <h3 className="contact-us-title">Contact Us</h3>
        <p className="contact-us-description">
          Get in touch with us for donating or adopting cattos. We are happy to assist you!
        </p>
        <form className="contact-us-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" className="form-control" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" className="form-control" placeholder="Your phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Your email" />
          </div>
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
