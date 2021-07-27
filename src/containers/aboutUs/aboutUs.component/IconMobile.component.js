import React from 'react';

function IconMobile (props) {
  return (
    <div className=" col-4 p-2">
      <div
        style={{height: `60px`}}
        className={`${props.data.img ? 'shadow-sm rounded border ' : ''} " justify-content-center align-items-center"`}
      >
        <img
          className="p-2"
          src={`${process.env.PUBLIC_URL}${props.data.img}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  );
}
export default IconMobile;
