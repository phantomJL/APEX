import React from 'react';
import {withRouter} from 'react-router-dom';
import ReactPlayer from 'react-player';

function MainPage (props) {
  return (
    <main style={{height: '100vh'}}>
      <ReactPlayer
        url={`${process.env.PUBLIC_URL}/video/Reel V7.mp4`}
        width="100%"
        height="100%"
        playing={true}
        controls={false}
        muted={true}
        loop={true}
      />
    </main>
  );
}

export default withRouter (MainPage);
