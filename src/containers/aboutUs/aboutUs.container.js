import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import Service from './aboutUs.component/service.component';
import {
  ourStory,
  ourService,
  client_horizontal,
  client_square,
  partner_horizontal,
  partner_square,
} from '../../data/aboutUs.data';
import Icon from './aboutUs.component/Icon.component';
import IconMobile from './aboutUs.component/IconMobile.component';

import AboutUs from './aboutUs.png';
import ImageLoader from '../../components/shared/ImageLoader';
function AboutUS (props) {
  const [width, setWidth] = useState (window.innerWidth);
  const [scrollTop, setScrollTop] = useState (0);
  const updateDimensions = () => {
    setWidth (window.innerWidth);
  };
  const onScroll = () => {
    let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
    setScrollTop (currentPosition <= 0 ? 0 : currentPosition);
  };
  useEffect (
    () => {
      window.addEventListener ('scroll', onScroll);
      return () => window.removeEventListener ('scroll', onScroll);

      window.addEventListener ('resize', updateDimensions);
      return () => window.removeEventListener ('resize', updateDimensions);
    },
    [onScroll, updateDimensions, width, scrollTop]
  );

  return (
    <main className="px-4">
      <div className="row p-4">
        <div className="col-12 col-md-6 align-self-end">
          <ImageLoader
            container={false}
            imgWidth="100%"
            imgOpacity={1}
            url={AboutUs}
          />
        </div>
        <div className="col-12 col-md-6 align-self-center">
          <div
            className={`article title text-animation py-2 ${scrollTop > 0 && 'text-animation'}`}
          >
            OUR STORY
          </div>
          <div className="article paragraph py-2">
            {ourStory.description}
          </div>
        </div>
      </div>

      <div className="p-4">
        <div
          className={`article title py-2 text-center space ${scrollTop > 100 && 'text-animation'}`}
        >
          SERVICES
        </div>
        <div className="row">
          {ourService.map ((value, index) => {
            return <Service key={index} data={value} />;
          })}
        </div>
      </div>
      <div className="p-4 ">
        <div
          className={`article title py-2 text-center space ${scrollTop > 734 && 'text-animation'}`}
        >
          CLIENTS
        </div>
        {width < 767
          ? <div className="d-flex flex-wrap">
              {[...client_horizontal, ...client_square].map ((value, index) => (
                <IconMobile data={value} />
              ))}
            </div>
          : <div>
              <div className="d-flex flex-wrap justify-content-center">
                {client_horizontal.map ((value, index) => (
                  <Icon data={value} width={'180px'} />
                ))}
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                {client_square.map ((value, index) => (
                  <Icon data={value} width={'120px'} />
                ))}
              </div>
            </div>}
      </div>
      <div className="p-4">
        <div
          className={`article title py-2 text-center ${scrollTop > 1171 && 'text-animation'}`}
        >
          COLLABORATIONS
        </div>
        {width < 767
          ? <div className="d-flex flex-wrap space">
              {[
                ...partner_horizontal,
                ...partner_square,
              ].map ((value, index) => <IconMobile data={value} />)}
            </div>
          : <div style={{marginBottom: '100px'}}>
              <div className="d-flex flex-wrap justify-content-center">
                {partner_horizontal.map ((value, index) => (
                  <Icon data={value} width={'180px'} />
                ))}
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                {partner_square.map ((value, index) => (
                  <Icon data={value} width={'120px'} />
                ))}
              </div>
            </div>}
      </div>
    </main>
  );
}
export default withRouter (AboutUS);
