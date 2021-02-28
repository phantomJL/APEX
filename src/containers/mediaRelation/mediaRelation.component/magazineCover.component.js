import React from 'react';

function Magazine (props) {
  return (
    <div className="container p-2 my-2">
      <div
        className="d-flex justify-content-center"
        style={{
          height: '230px',
          cursor: 'pointer',
        }}
        data-toggle="modal"
        data-target="#magazine"
        onClick={() => {
          props.setMagazine (`${process.env.PUBLIC_URL}${props.data.url}`);
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}${props.data.url}`}
          style={{height: '100%', objectFit: 'cover'}}
        />
      </div>

    </div>
  );
}
export default Magazine;
