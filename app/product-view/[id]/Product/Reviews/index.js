import React from 'react'

function Reviews() {
  return (
    <div className="row">
    <div className="col-lg-6">
      <div className="rating style1">
        <div className="title">
          Based on 1 reviews
        </div>
        <div className="score">
          <div className="average-score">
            <p className="numb">4.3</p>
            <p className="text">Average score</p>
          </div>
          <div className="queue">
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
          </div>
        </div>
        <ul className="queue-box">
          <li className="five-star">
            <span>
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </span>
            <span className="numb-star">3</span>
          </li>
          <li className="four-star">
            <span>
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </span>
            <span className="numb-star">4</span>
          </li>
          <li className="three-star">
            <span>
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </span>
            <span className="numb-star">3</span>
          </li>
          <li className="two-star">
            <span>
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </span>
            <span className="numb-star">2</span>
          </li>
          <li className="one-star">
            <span>
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </span>
            <span className="numb-star">0</span>
          </li>
        </ul>
      </div>{/* /.rating style1 */}
    </div>{/* /.col-lg-6 */}
    <div className="col-lg-6">
      <div className="form-review style2">
        <div className="your-rating queue">
          <span>Your Rating</span>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
        </div>
        <form action="#" method="get" acceptCharset="utf-8">
          <div className="review-form-name">
            <input placeholder="Name" />
          </div>
          <div className="review-form-email">
            <input   placeholder="Email" />
          </div>
          <div className="review-form-comment">
            <textarea name="review-text" placeholder="Your Name" />
          </div>
          <div className="btn-submit">
            <button type="submit">Add Review</button>
          </div>
        </form>
      </div>{/* /.form-review style2 */}
    </div>{/* /.col-lg-6 */}
    <div className="col-lg-12">
      <ul className="review-list">
        <li>
          <div className="review-metadata">
            <div className="name">
              Jessy Bandya : <span>May 23, 2023</span>
            </div>
            <div className="queue">
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </div>
          </div>{/* /.review-metadata */}
          <div className="review-content">
            <p>
              This product is awesome
            </p> 
          </div>{/* /.review-content */}
        </li>
      </ul>{/* /.review-list */}
    </div>{/* /.col-lg-12 */}
  </div>
  )
}

export default Reviews