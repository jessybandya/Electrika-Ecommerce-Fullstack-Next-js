import Header from '@components/Header'
import React from 'react'

export const metadata = {
    title: 'Electrika Computers - Contact Us',
    description: 'Your leading computer store in the heart of the city',
  }

function ContactUs() {
  return (
    <div>
    <Header />

    <section style={{marginTop:200}} className="flat-contact style2">
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="form-contact left">
            <div className="form-contact-header">
              <h3>Leave us a Message</h3>
              <p>
                <i>Your number 1 leading Tech hub in Kenya.</i> We are here to serve you with the best of the best.
              </p>
            </div>{/* /.form-contact-header */}
            <div className="form-contact-content">
              <form action="#" method="get" id="form-contact" acceptCharset="utf-8">
                <div className="form-box one-half name-contact">
                  <label htmlFor="name-contact">First name*</label>
                  <input type="text" id="name-contact" name="name-contact" placeholder="First Name" />
                </div>
                <div className="form-box one-half password-contact">
                  <label htmlFor="password-contact">Last name*</label>
                  <input type="text" id="password-contact" name="password-contact" placeholder="Last Name" />
                </div>
                <div className="form-box">
                  <label htmlFor="subject-contact">Subject</label>
                  <input type="text" id="subject-contact" name="subject-contact" placeholder="Your subject" />
                </div>
                <div className="form-box">
                  <label htmlFor="comment-contact">Comment</label>
                  <textarea id="comment-contact" defaultValue={""} />
                </div>
                <div className="form-box">
                  <button type="submit" className="contact">Send</button>
                </div>
              </form>{/* /#form-contact */}
            </div>{/* /.form-contact-content */}
          </div>{/* /.form-contact left */}
        </div>{/* /.col-md-7 */}
        <div className="col-md-5">
          <div className="box-contact">
            <ul>
              <li className="address">
                <h3>Address</h3>
                <p>
                Kimathi Street , opposite Total petrol station , equity bank building . KIMATHI CHAMBERS 2ND FLOOR RM 9
                </p>
              </li>
              <li className="phone">
                <h3>Phone</h3>
                <p>
                  <a style={{
                    color: '#919191;'
                  }} href="tel:+254713441634" title>(+254) 71 3441 634</a>
                </p>
              </li>
              <li className="email">
                <h3>Email</h3>
                <p>
                  <a style={{
                    color: '#919191;'
                  }} href="mailto:info@electrikacomputers.co.ke" title>info@electrikacomputers.co.ke</a>
                </p>
              </li>
              <li className="address">
                <h3>Opening Hours</h3>
                <p>
                  Monday - Friday: 8am - 8pm
                </p>
                <p>
                  Saturday: 10am - 4pm
                </p>
                <p>
                  Sunday: 12am - 4pm
                </p>
              </li>
              <li>
                <h3>Follow Us</h3>
                <ul className="social-list style2">
                  <li>
                    <a href="#" title>
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#" title>
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#" title>
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#" title>
                      <i className="fa fa-pinterest" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#" title>
                      <i className="fa fa-dribbble" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#" title>
                      <i className="fa fa-google" aria-hidden="true" />
                    </a>
                  </li>
                </ul>{/* /.social-list style2 */}
              </li>
            </ul>
          </div>{/* /.box-contact */}
        </div>{/* /.col-md-5 */}
      </div>{/* /.row */}
    </div>{/* /.container */}
  </section>
    </div>
  )
}

export default ContactUs