import React, {useState, useEffect} from 'react';
import ImageLoader from '../../../components/shared/ImageLoader';
function Video (props) {
  const [showtitle, setShow] = useState (false);
  const [opacity, setOpacity] = useState (1);
  const [width, setWidth] = useState (window.innerWidth);
  const updateDimensions = () => {
    setWidth (window.innerWidth);
  };

  useEffect (
    () => {
      window.addEventListener ('resize', updateDimensions);
      return () => window.removeEventListener ('resize', updateDimensions);
    },
    [updateDimensions, width]
  );
  const modalOnClick = link => {
    props.setVideo (link);
    props.setVideoPlay (true);
  };
  return (
    <div className="col-12 col-lg-4 col-md-6 px-md-3 py-md-2 py-1 px-3">

      <div
        onMouseEnter={() => {
          setShow (true);
          setOpacity (0.6);
        }}
        onMouseLeave={() => {
          setShow (false);
          setOpacity (1);
        }}
        className="container"
        data-toggle="modal"
        data-target="#exampleModal"
        style={{cursor: 'pointer'}}
        onClick={() => modalOnClick (props.data.video_link)}
      >
        {/* <div className="cover video-cover">
          <img
            className="cover-img"
            src={`${process.env.PUBLIC_URL}${props.data.img_url}`}
            style={{width: '100%'}}
          />
        </div> */}
        <ImageLoader
          container={true}
          containerColor="black"
          containerClass={'cover video-cover'}
          imgClass={'cover_img'}
          imgOpacity={width < 767 ? 0.9 : opacity}
          url={props.data.img_url}
        />
        {(showtitle || width < 767) &&
          <div className="bottom-left-gallery p-2 prata">
            <div className="text-white median-title py-2">
              {props.data.magazine}
            </div>
            {props.data.starring
              ? <div>
                  <div className="text-white font-weight-bold median-title">
                    STARRING
                  </div>
                  <div className="text-white median-title">
                    {props.data.starring}
                  </div>
                </div>
              : <div />}
            {width >= 767 &&
              (props.data.director
                ? <div>
                    <div className="text-white font-weight-bold median-title">
                      DIRECTED BY
                    </div>
                    <div className="text-white median-title">
                      {props.data.director}
                    </div>
                  </div>
                : <div />)}

          </div>}
      </div>

    </div>
  );
}

export default Video;
