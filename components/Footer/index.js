import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
    <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="widget-ft widget-about">
            <div className="logo logo-ft">
            <center>
            <Link href="/" title>
            <img src="/media/images/logo2.jpg" alt="" style={{height:100}}/>
          </Link>
            </center>
            </div>{/* /.logo-ft */}
            <div className="widget-content">
              <div className="icon">
                <img src="/images/icons/call.png" alt="" />
              </div>
              <div className="info">
                <p className="questions">Got Questions ? Call us 24/7!</p>
                <p className="phone">Call Us: <span style={{
                  color: '#919191',
                  fontSize: 15
                }} to='tel:+254713441634'>(+254) 71 3441 634</span></p>
                <p className="address">
                Kimathi Street , opposite Total petrol station , equity bank building . KIMATHI CHAMBERS 2ND FLOOR RM 9
                </p>
              </div>
            </div>{/* /.widget-content */}
            <ul className="social-list">
              <li>
                <Link href="#" title>
                  <i className="fa fa-facebook" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href="#" title>
                  <i className="fa fa-twitter" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href="#" title>
                  <i className="fa fa-instagram" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href="#" title>
                  <i className="fa fa-pinterest" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href="#" title>
                  <i className="fa fa-dribbble" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href="#" title>
                  <i className="fa fa-google" aria-hidden="true" />
                </Link>
              </li>
            </ul>{/* /.social-list */}
          </div>{/* /.widget-about */}
        </div>{/* /.col-lg-3 col-md-6 */}
        <div className="col-lg-3 col-md-6">
          <div className="widget-ft widget-categories-ft">
            <div className="widget-title">
              <h3>Find By Categories</h3>
            </div>
            <ul className="cat-list-ft">
              <li>
                <Link href="category/Laptop/1" title>Laptops</Link>
              </li>
              <li>
                <Link href="category/Monitor/1" title>Monitors</Link>
              </li>
              <li>
                <Link href="category/Printer/1" title>Printers</Link>
              </li>
              <li>
                <Link href="/category/Desktop/1" title>Desktops</Link>
              </li>
              <li>
                <Link href="/category/Scanner/1" title>Scanners</Link>
              </li>
              <li>
                <Link href="/category/Projector/1" title>Projectors</Link>
              </li>
            </ul>{/* /.cat-list-ft */}
          </div>{/* /.widget-categories-ft */}
        </div>{/* /.col-lg-3 col-md-6 */}
        <div className="col-lg-2 col-md-6">
          <div className="widget-ft widget-menu">
            <div className="widget-title">
              <h3>Customer Care</h3>
            </div>
            <ul>
              <li>
                <Link href="/cantact-us" title>
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" title>
                  Site Map
                </Link>
              </li>
              <li>
                <Link href="#" title>
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" title>
                  Wish List
                </Link>
              </li>
              <li>
                <Link href="#" title>
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link href="#" title>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" title>
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>{/* /.widget-menu */}
        </div>{/* /.col-lg-2 col-md-6 */}
        <div className="col-lg-4 col-md-6">
          <div className="widget-ft widget-newsletter">
            <div className="widget-title">
              <h3>Sign Up To New Letter</h3>
            </div>
            <p>Make sure that you never miss our interesting <br />
              news by joining our newsletter program
            </p>
            <form action="#" className="subscribe-form" method="get" acceptCharset="utf-8">
              <div className="subscribe-content">
                <input type="text" name="email" className="subscribe-email" placeholder="Your E-Mail" />
                <button type="submit"><img src="/images/icons/right-2.png" alt="" /></button>
              </div>
            </form>{/* /.subscribe-form */}
            <ul className="pay-list">
              <li>
                <Link href="#" title>
                  <img src="/images/logos/mpesa.png" alt="" style={{height:80}}/>
                </Link>
              </li>
            </ul>{/* /.pay-list */}
          </div>{/* /.widget-newsletter */}
        </div>{/* /.col-lg-4 col-md-6 */}
      </div>{/* /.row */}
    </div>{/* /.container */}
  </footer>{/* /footer */}
  <section className="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p style={{fontWeight:'bold'}} className="copyright"> All Rights Reserved &copy; Electrika Computers {new Date().getFullYear()}</p>
          <p className="btn-scroll">
            <Link href="#" title>
              <img src="/images/icons/top.png" alt="" />
            </Link>
          </p>
        </div>{/* /.col-md-12 */}
      </div>{/* /.row */}
    </div>{/* /.container */}
  </section>{/* /.footer-bottom */}
    </div>
  )
}

export default Footer