import React, {useEffect, useState} from 'react';
import {useToasts} from 'react-toast-notifications';
import emailjs from 'emailjs-com';

export default function FormWithToasts (props) {
  const {addToast} = useToasts ();
  const [purpose, setPurpose] = useState ('');

  useEffect (
    () => {
      setPurpose (props.purpose);
      document.getElementById ('myForm').reset ();
    },
    [props.purpose]
  );

  function sendEmail (e) {
    e.preventDefault ();
    addToast ('Message is on its way, Please wait!', {
      appearance: 'info',
      autoDismiss: true,
    });

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
            props.setSuccess (true);
          },
          error => {
            addToast (error.text, {
              appearance: 'error',
              autoDismiss: true,
            });
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
            props.setSuccess (true);
          },
          error => {
            addToast (error.text, {
              appearance: 'error',
              autoDismiss: true,
            });
          }
        );
    }
  }
  return (
    <form className="contact-form p-4" id="myForm" onSubmit={sendEmail}>
      <div className="row article">

        <div className="py-2 col-sm-12 col-md-4">
          <div>
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
          {props.purpose == 'Media Inquiry'
            ? <div>
                <div>
                  <label className="d-flex">
                    Company/Organization <p className="text-danger">*</p>
                  </label>
                </div>
                <input
                  className="short-input"
                  type="text"
                  name="company"
                  style={{width: '100%'}}
                  required
                />
              </div>
            : <div>
                <div>
                  <label className="d-flex">
                    Phone number <p className="text-danger">*</p>
                  </label>
                </div>
                <input
                  className="short-input"
                  type="tel"
                  name="number"
                  placeholder="123-456-7890"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  style={{width: '100%'}}
                />
              </div>}
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
  );
}
