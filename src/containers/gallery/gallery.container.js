import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import Picture from './gallery.component/picture.component';
import Video from './gallery.component/video.component';
import {editorial_video, documentary, commercial_video, magazine, commercial, commercial_items} from '../../data/gallery.data';
import ReactPlayer from 'react-player';
import '../../index.css';
function Gallery (props) {
  const [show, setShow] = useState ('video');
  const [play, setPlay] = useState ('');
  const [videoPlay, setVideoPlay] = useState (true);
  const random_magazine = magazine
    .map (a => ({sort: Math.random (), value: a}))
    .sort ((a, b) => a.sort - b.sort)
    .map (a => a.value);

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
  return (
    <main className="px-md-4 px-2 py-4">
      <section className="d-flex p-4 justify-content-center freeze">
        <div
          className={`btn btn-line mx-4 article ${show === 'video' ? 'active' : ''}`}
          onClick={e => setShow ('video')}
        >
          MOTION
        </div>
        <div
          className={`btn btn-line mx-4 article ${show === 'video' ? '' : 'active'}`}
          onClick={e => setShow ('magazine')}
        >
          STILL
        </div>
      </section>

      {show === 'video'
        ? <section className="py-4 video-margin" style={{overflowX: 'hidden'}}>
          {width < 767
              ?
              <div className='overflow-hidden'>
              <div className='d-flex align-items-top'  style={{paddingBottom: '50px'}}> 
                  <div className="d-flex flex-wrap">
                    {commercial_video.map ((value, index) => (
                <Video
                  data={value}
                  setVideo={setPlay}
                  setVideoPlay={setVideoPlay}
                />
              ))}
                  </div>
                <div className='vertical-text about-text'>
                COMMERCIAL & ADVERTORIAL
                  </div>
              </div> 
              <hr className='w-25'></hr>
              <div className='d-flex align-items-top'  style={{paddingTop: '50px', paddingBottom: '50px'}}>
                <div className="d-flex flex-wrap">
                {editorial_video.map ((value, index) => (
                <Video
                  data={value}
                  setVideo={setPlay}
                  setVideoPlay={setVideoPlay}
                />
              ))}
                </div>
                <div className='vertical-text  about-text'>EDITORIAL</div>
              </div> 
              <hr className='w-25'></hr>
              <div className='d-flex align-items-top'  style={{paddingTop: '50px'}}>
                <div className="d-flex flex-wrap">
                {documentary.map ((value, index) => (
                <Video
                  data={value}
                  setVideo={setPlay}
                  setVideoPlay={setVideoPlay}
                />
              ))}
                </div>
                <div className='vertical-text  about-text'>DOCUMENTARY & EVENT</div>
              </div> 
              </div>
              
              : 
              <div>
                <div className='d-flex align-items-top ' style={{paddingBottom: '50px'}}>
                  <div className="d-flex flex-wrap">
                  {commercial_video.map ((value, index) => (
                <Video
                  data={value}
                  setVideo={setPlay}
                  setVideoPlay={setVideoPlay}
                />
              ))}
                  </div>
                  <div className='vertical-text about-text'>COMMERCIAL & ADVERTORIAL</div>
                </div> 
                <hr className='w-25'></hr>
                <div className='d-flex align-items-top' style={{paddingTop: '50px', paddingBottom: '50px'}}>
                  <div className="d-flex flex-wrap">
                  {editorial_video.map ((value, index) => (
                <Video
                  data={value}
                  setVideo={setPlay}
                  setVideoPlay={setVideoPlay}
                />
              ))}
                  </div>
                  <div className='vertical-text  about-text'>EDITORIAL</div>
                </div> 
                <hr className='w-25'></hr>
                <div className='d-flex align-items-top' style={{paddingTop: '50px'}}>
                  <div className="d-flex flex-wrap">
                  {documentary.map ((value, index) => (
                <Video
                  data={value}
                  setVideo={setPlay}
                  setVideoPlay={setVideoPlay}
                />
              ))}
                  </div>
                  <div className='vertical-text  about-text'>DOCUMENTARY & EVENT</div>
                </div> 
              </div>}
          </section>
        : <section className="py-4">

            {width < 767
              ?
              <div className='overflow-hidden'>
              <div className='d-flex align-items-top'  style={{paddingBottom: '50px'}}>
                  
              <div>
                  <div className="d-flex flex-wrap">
                    {commercial.map ((value, index) => (
                      <Picture data={value} height={'160px'} />
                    ))}
                  </div>
                  <div className="d-flex flex-wrap">
                    {commercial_items.map ((value, index) => (
                      <Picture data={value} height={'160px'} />
                    ))}
                  </div>
                  </div>
                <div className='vertical-text about-text'>
                COMMERCIAL & ADVERTORIAL
                  </div>
              </div> 
              <hr className='w-25'></hr>
              <div className='d-flex align-items-top'  style={{paddingTop: '50px'}}>
                <div className="d-flex flex-wrap">
                  {random_magazine.map ((value, index) => (
                    <Picture data={value} height={'160px'} />
                  ))}
                </div>
                <div className='vertical-text  about-text'>EDITORIAL</div>
              </div> 
              </div>
              
              : 
              <div>
                <div className='d-flex align-items-top ' style={{paddingBottom: '50px'}}>
                  <div>
                  <div className="d-flex flex-wrap">
                    {commercial.map ((value, index) => (
                      <Picture data={value} height={'260px'} />
                    ))}
                  </div>
                  <div className="d-flex flex-wrap">
                    {commercial_items.map ((value, index) => (
                      <Picture data={value} height={'260px'} />
                    ))}
                  </div>
                  </div>
                  <div className='vertical-text about-text'>COMMERCIAL & ADVERTORIAL</div>
                </div> 
                <hr className='w-25'></hr>
                <div className='d-flex align-items-top' style={{paddingTop: '50px'}}>
                  <div className="d-flex flex-wrap">
                    {random_magazine.map ((value, index) => (
                      <Picture data={value} height={'260px'} />
                    ))}
                  </div>
                  <div className='vertical-text  about-text'>EDITORIAL</div>
                </div> 
              </div>}

          </section>}
      <div
        className="modal fade"
        id="exampleModal"
        onClick={() => setVideoPlay (false)}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">

            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={play}
                width="100%"
                height="100%"
                playing={videoPlay}
                controls={true}
                config={{
                  file: {
                    attributes: {
                      onContextMenu: e => e.preventDefault (),
                      controlsList: 'nodownload',
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
export default withRouter (Gallery);
