import { useState } from 'react';

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-6">
            <h2 className="section-title mb-3">Contact</h2>
            <p className="text-secondary">Have a project in mind or want to collaborate? Send a mail or message me on linkedin, I&apos;ll reply within 24 hours.</p>
            <div className="d-flex gap-3 align-items-center mt-4">
              <a className="text-decoration-none" href="https://github.com/darshanwahurwagh" target="_blank" rel="noreferrer"><i className="bi bi-github fs-3"></i></a>
              <a className="text-decoration-none" href="https://linkedin.com/in/darshanwahurwagh" target="_blank" rel="noreferrer"><i className="bi bi-linkedin fs-3"></i></a>
              <a className="text-decoration-none" href="mailto:darshanwahurwagh66@gmail.com"><i className="bi bi-envelope fs-3"></i></a>
            </div>
            <div className="d-flex flex-column gap-2 mt-3">
            </div>
            <div className="d-flex flex-column gap-2 mt-3">
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card soft-card p-4">
              <form 
                action="https://formspree.io/f/mlgpjjpb" 
                method="POST" 
                id="contactForm" 
                noValidate 
                className={validated ? 'was-validated' : ''} 
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" required autoComplete="off" />
                  <div className="invalid-feedback">Please enter your name.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" required autoComplete="off" />
                  <div className="invalid-feedback">Please enter your valid email.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" name="message" required></textarea>
                  <div className="invalid-feedback">Please write a short message.</div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button type="submit" className="btn btn-primary"><i className="bi bi-send me-2"></i>Send Message</button>
                  <span id="formStatus" className="small text-secondary"></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
