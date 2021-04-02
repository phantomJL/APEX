import React from 'react';
export default function SuccessPop () {
  return (
    <div className="text-center p-4 m-4">
      <img
        src={`${process.env.PUBLIC_URL}/img/contact/source.gif`}
        style={{
          width: '30%',
          marginTop: '5%',
        }}
      />
      <h1 className="p-4 m-4">THANK YOU!</h1>
      <h4 className="p-4 m-4" style={{marginBotton: '15%'}}>
        Your message has been sent.
        We'll get in touch with you shortly. {' '}
      </h4>

    </div>
  );
}
