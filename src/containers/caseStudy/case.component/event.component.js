import React from 'react';

function Event (props) {
  const formatMe = n => {
    return n < 10 ? '0' + n : n;
  };

  return (
    <div className="d-flex py-4">
      <div
        className="px-2 align-self-end article"
        style={{
          paddingBottom: '100px',
          borderRight: '1px solid',
          marginRight: '8px',
        }}
      >
        {formatMe (props.index + 1)}
      </div>
      <div className="container p-0">

        <div style={{width: '100%', backgroundColor: 'black'}}>
          <img
            alt="cover"
            src={`${process.env.PUBLIC_URL}${props.data.cover}`}
            style={{width: '100%', opacity: '70%'}}
          />
        </div>
        <div class="bottom-left p-2 article paragraph text-white">
          {props.data.case_name}
        </div>
      </div>

    </div>
  );
}
export default Event;
