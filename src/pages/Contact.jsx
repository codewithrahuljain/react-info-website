import React from 'react';
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section>
      <div className="container mt-5">
        <div className="row mx-0">
          <div className="col-md-5">
            <h1 className="billing-tag">Get in touch with us</h1>      

            <p>To get in touch with us, you can typically fill the contact information such as a contact form, email address, or phone number.</p>
            <h6><MdEmail /> rahuljain1516@gmail.com</h6>
          </div>

          <div className="col-md-7 mt-5 mt-md-0">
            <div className="row bg-body-secondary p-4 rounded-3 mx-0">
              <form action="https://formspree.io/f/xyyrjwvp" method='POST' id='contact-form'>
                <div className="form-group col-12 mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" className="form-control " placeholder='Enter your name'  autoComplete='off' required/>
                </div>

                <div className="form-group  col-12 mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control " placeholder='Enter your email'  autoComplete='off' required/>
                </div>

                <div className="form-group col-12 mb-3">
                  <label className="form-label">Mobile</label>
                  <input type="number" name="fname" className="form-control " placeholder='Enter your phone number' autoComplete='off' required />
                </div>

                <div className="form-group col-12 mb-3">
                  <label className="form-label">Message</label>
                  <textarea name="message" id="message" cols="10" rows="5" className="form-control" autoComplete='off' required></textarea>
                </div>

                <div className="col-12 mt-3"><input type="submit" value="Submit" className='btn btn-success'/></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
