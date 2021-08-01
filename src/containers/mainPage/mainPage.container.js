import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import ReactPlayer from 'react-player';

function MainPage (props) {
  const [width, setWidth] = useState (window.innerWidth);
  const updateDimensions = () => {
    setWidth (window.innerWidth);
  };
  useEffect (
    () => {
      window.addEventListener ('resize', updateDimensions);
      return () => window.removeEventListener ('resize', updateDimensions);
    },
    [updateDimensions]
  );
  return (
    <main style={{height: '100vh'}}>
      <ReactPlayer
        url={`${process.env.PUBLIC_URL}/video/Reel V7.mp4`}
        width="100%"
        height="100%"
        playing={width < 767 ? false : true}
        controls={false}
        muted={true}
        loop={true}
      />
    </main>
  );
}

export default withRouter (MainPage);