import React from 'react';
import ImageLoader from '../../../components/shared/ImageLoader';

function Event (props) {
  const formatMe = n => {
    return n < 10 ? '0' + n : n;
  };

  return (
    <div className="d-flex py-4">
      <div
        className="px-2 align-self-end article full"
        style={{
          paddingBottom: '100px',
          borderRight: '1px solid',
          marginRight: '8px',
        }}
      >
        {formatMe (props.index + 1)}
      </div>

      <div className="container p-0">

        <ImageLoader
          container={true}
          url={props.data.cover}
          containerColor="black"
          imgOpacity="70%"
        />
        <div class="bottom-left p-2 article large-title text-white">
          {props.data.case_name}
        </div>
      </div>

    </div>
  );
}
export default Event;
