import React from 'react';

function Icon (props) {
  return (
    <div
      style={{width: `${props.width}`}}
      className="p-4 d-flex justify-content-center align-items-center"
    >
      <img
        src={`${process.env.PUBLIC_URL}${props.data.img}`}
        style={{width: '100%', height: 'auto'}}
      />
    </div>
  );
}
export default Icon;
