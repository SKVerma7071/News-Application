import React, { useState } from 'react';

const ContactUs = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your backend logic here
    console.log('Form Submitted:', formData);
    alert('Message sent! (Demo logic)');
  };

  return (
    <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-white overflow-x-hidden">
      
      {/* --- Page Header --- */}
      <div className="section py-4 lg:py-6 lg:px-4 border-bottom dark:border-gray-800">
        <div className="container max-w-xl">
          <div className="panel vstack gap-2 text-center">
            <h1 className="h2 m-0">Contact Us</h1>
            <ul className="nav-x justify-center gap-1 fs-6 opacity-60">
              <li><a href="/" className="text-none text-gray-900 dark:text-white">Home</a></li>
              <li><span className="opacity-50">/</span></li>
              <li><span className="text-primary">Contact</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- Main Content Section --- */}
      <div className="section py-6 lg:py-8">
        <div className="container max-w-xl">
          <div className="row g-4 g-lg-8">
            
            {/* Left Column: Contact Info */}
            <div className="col-12 col-md-5 col-lg-4">
              <div className="panel vstack gap-4">
                
                {/* Address */}
                <div className="panel vstack gap-1">
                  <h4 className="h5 m-0">Office Address</h4>
                  <p className="fs-6 opacity-80">
                    Satvik Creative Office,<br />
                    Lucknow, Uttar Pradesh,<br />
                    India.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="panel vstack gap-1">
                  <h4 className="h5 m-0">Get in touch</h4>
                  <ul className="nav-y gap-1 fs-6 fw-medium">
                    <li className="hstack gap-1">
                      <i className="unicon-email icon-1 text-primary"></i>
                      <a href="mailto:hello@satvikcreative.com" className="text-none text-gray-900 dark:text-white hover:text-primary">
                        hello@satvikcreative.com
                      </a>
                    </li>
                    <li className="hstack gap-1">
                      <i className="unicon-phone icon-1 text-primary"></i>
                      <a href="tel:+919876543210" className="text-none text-gray-900 dark:text-white hover:text-primary">
                        +91 98765 43210
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Social Media */}
                <div className="panel vstack gap-2">
                  <h4 className="h5 m-0">Follow us</h4>
                  <ul className="nav-x gap-2">
                    <li>
                      <a href="#" className="btn btn-md btn-icon border text-gray-900 dark:text-white dark:border-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all">
                        <i className="unicon-logo-facebook icon-2"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-md btn-icon border text-gray-900 dark:text-white dark:border-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all">
                        <i className="unicon-logo-x-filled icon-2"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-md btn-icon border text-gray-900 dark:text-white dark:border-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all">
                        <i className="unicon-logo-instagram icon-2"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-md btn-icon border text-gray-900 dark:text-white dark:border-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all">
                        <i className="unicon-logo-linkedin icon-2"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="col-12 col-md-7 col-lg-8">
              <div className="panel p-3 md:p-4 rounded border dark:border-gray-800 bg-gray-25 dark:bg-gray-800">
                <h3 className="h4 mb-4">Send us a message</h3>
                <form onSubmit={handleSubmit} className="vstack gap-3">
                  
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <label className="form-label fs-7 fw-bold text-uppercase opacity-70">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control h-48px w-full bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-white" 
                        placeholder="John Doe" 
                        required 
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className="form-label fs-7 fw-bold text-uppercase opacity-70">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control h-48px w-full bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-white" 
                        placeholder="name@example.com" 
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label fs-7 fw-bold text-uppercase opacity-70">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control w-full bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-white" 
                      rows="5" 
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <div className="text-end">
                    <button type="submit" className="btn btn-primary btn-md px-4">
                      Send Message <i className="unicon-arrow-right ms-1"></i>
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- Newsletter Section --- */}
      <div className="section py-6 lg:py-8 bg-gray-100 dark:bg-gray-800 text-center">
        <div className="container max-w-lg">
          <div className="panel vstack gap-3">
            <div className="heading">
              <h3 className="h3 m-0">Subscribe to our Newsletter</h3>
              <p className="fs-6 opacity-60 mt-1">Stay updated with the latest news from Satvik Creative.</p>
            </div>
            
            <form className="row g-2 justify-center">
              <div className="col-12 col-sm-auto w-sm-300px">
                <input 
                  type="email" 
                  className="form-control h-48px w-full bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-white" 
                  placeholder="Enter your email..." 
                />
              </div>
              <div className="col-12 col-sm-auto">
                <button type="submit" className="btn btn-primary h-48px w-full px-4">
                  Subscribe
                </button>
              </div>
            </form>
            
            <p className="fs-7 opacity-50">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactUs;