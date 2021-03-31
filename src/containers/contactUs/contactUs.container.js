import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import emailjs from 'emailjs-com';

function ContactUsContainer (props) {
  const [purpose, setPurpose] = useState ('Reach Out');
  // const [name, setName] = useState ('');
  // const [number, setNumber] = useState ('');
  // const [email, setEmail] = useState ('');
  // const [subject, setSubject] = useState ('');
  // const [message, setMessage] = useState ('');

  function sendEmail (e) {
    e.preventDefault ();
    console.log (e.target);
    if (purpose === 'Reach Out') {
      emailjs
        .sendForm (
          'service_g1beyp4',
          'template_nob8jfo',
          e.target,
          'user_vqDbT4W4iarR10zKXuSiJ'
        )
        .then (
          result => {
            console.log (result.text);
            document.getElementById ('myForm').reset ();
          },
          error => {
            console.log (error.text);
          }
        );
    }
    if (purpose === 'Media Inquiry') {
      emailjs
        .sendForm (
          'service_qruwgft',
          'template_jmyr1sg',
          e.target,
          'user_iM1KcMZO1OQCsEraQwPJG'
        )
        .then (
          result => {
            console.log (result.text);
            document.getElementById ('myForm').reset ();
          },
          error => {
            console.log (error.text);
          }
        );
    }
  }

  return (
    <main className="mx-auto" style={{width: '70%'}}>
      <h1 className="article text-uppercase text-center p-4">
        Let's work together
      </h1>
      <div className="d-flex justify-content-center p-4">
        <button
          className={`article btn btn-outline-warning border-top-0 border-left-0 border-right-0 font-weight-bold text-uppercase ${purpose === 'Media Inquiry' ? '' : 'active'}`}
          style={{width: '50%'}}
          onClick={() => setPurpose ('Reach Out')}
        >
          say 👋 to us
        </button>
        <button
          className={`article btn btn-outline-warning border-top-0 border-left-0 border-right-0 font-weight-bold text-uppercase ${purpose === 'Media Inquiry' ? 'active' : ''}`}
          style={{width: '50%'}}
          onClick={() => setPurpose ('Media Inquiry')}
        >
          media inquiry
        </button>

      </div>
      <form className="contact-form p-4" id="myForm" onSubmit={sendEmail}>
        <div className="row article">

          <div className="py-2 col-sm-12 col-md-4">
            <div>
              {' '}
              <label className="d-flex">
                Name <p className="text-danger">*</p>
              </label>
            </div>
            <input
              className="short-input"
              type="text"
              name="name"
              style={{width: '100%'}}
              required
            />
          </div>

          <div className="py-2 col-sm-12 col-md-4 ">
            <div>
              <label className="d-flex">
                Email <p className="text-danger">*</p>
              </label>
            </div>
            <input
              className="short-input"
              type="email"
              name="email"
              style={{width: '100%'}}
              required
            />
          </div>
          <div className="py-2 col-sm-12 col-md-4 ">
            {' '}<div>
              <label className="d-flex">
                Phone number <p className="text-danger">*</p>
              </label>{' '}
            </div>
            <input
              className="short-input"
              type="text"
              name="number"
              style={{width: '100%'}}
              required
            />
          </div>

        </div>
        <div className="py-4 article">
          <label>Subject</label>
        </div>
        <div>
          <textarea
            name="subject"
            className="large-input"
            style={{width: '100%'}}
          />
        </div>
        <div className="py-4 article">
          <label>Message</label>
        </div>
        <div>
          <textarea
            name="message"
            className="large-input"
            style={{width: '100%', height: '250px'}}
          />
        </div>
        <div className="py-4 my-2 d-flex justify-content-center">
          <button
            className="btn btn-outline-dark font-weight-bold"
            style={{width: '70%'}}
            type="submit"
            value="Send"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
export default withRouter (ContactUsContainer);
