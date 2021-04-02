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
      <h2 className="p-4 m-4">THANK YOU!</h2>
      <div
        className="p-4 m-4 large-title"
        style={{marginBotton: '15%', color: '#6c6c6c'}}
      >
        Your message has been sent.
        We'll get in touch with you shortly. {' '}
      </div>

    </div>
  );
}
