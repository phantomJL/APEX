import React from 'react';
import ImageLoader from '../../../components/shared/ImageLoader';

function Magazine (props) {
  return (
    <div className="container pr-2 my-2">
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
        <ImageLoader
          container={false}
          imgHeight="100%"
          imgOpacity={1}
          url={props.data.url}
        />

      </div>

    </div>
  );
}
export default Magazine;
