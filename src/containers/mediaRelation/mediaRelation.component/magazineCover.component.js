import React, {useState} from 'react';

function Magazine (props) {
  return (
    <div className="container p-2 my-2">
      <div
        className="d-flex justify-content-center"
        style={{
          height: '230px',
        }}
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <img
          src={`${process.env.PUBLIC_URL}${props.data.url}`}
          style={{height: '100%', objectFit: 'cover'}}
        />
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content" />
          <img
            src={`${process.env.PUBLIC_URL}${props.data.url}`}
            // style={{width: '100%'}}
          />
        </div>
      </div>

    </div>
  );
}
export default Magazine;
