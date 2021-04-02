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
      <h1 className="p-4 m-4">THANK YOU !!</h1>
      <h4 className="p-4 m-4" style={{marginBotton: '15%'}}>
        YOUR MESSAGE HAS BEEN SENT.
        WE'LL GET IN TOUCH WITH YOU SHORTLY. {' '}
      </h4>

    </div>
  );
}
