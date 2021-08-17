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
import OnScrollWrap from '../../components/shared/OnScrollWrap';
function AboutUS (props) {
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
    <main className="px-4">
      <OnScrollWrap page={'OUR STORY'}>
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
              className={`about-text title py-4 `}
              style={{marginBottom: '50px'}}
            >
              Our Story
            </div>
            <div className="paragraph">
              {ourStory.description}
            </div>
          </div>

        </div>
      </OnScrollWrap>

      <div className="p-4">
        <OnScrollWrap page={'SERVICES'}>
          <div className={`about-text title py-3 text-center space`}>
            Services
          </div>
          <div className="row">
            {ourService.map ((value, index) => {
              return <Service key={index} data={value} />;
            })}
          </div>
        </OnScrollWrap>
      </div>
      <div className="p-4 ">
        <OnScrollWrap page={'CLIENTS'}>
          <div className={`about-text title py-3 text-center space `}>
            Clients
          </div>
          {width < 767
            ? <div className="d-flex flex-wrap">
                {[
                  ...client_horizontal,
                  ...client_square,
                ].map ((value, index) => <IconMobile data={value} />)}
              </div>
            : <div>
                <div className="d-flex flex-wrap justify-content-center">
                  {client_horizontal.map ((value, index) => (
                    <Icon data={value} width={'180px'} />
                  ))}
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                  {client_square.map ((value, index) => (
                    <Icon data={value} width={'130px'} />
                  ))}
                </div>
              </div>}
        </OnScrollWrap>
      </div>
      <div className="p-4">
        <OnScrollWrap page={'COLLABORATIONS'}>
          <div className={`about-text title py-3 text-center space`}>
            Collaborations
          </div>
          {width < 767
            ? <div className="d-flex flex-wrap ">
                {[
                  ...partner_horizontal,
                  ...partner_square,
                ].map ((value, index) => <IconMobile data={value} />)}
              </div>
            : <div
                className="d-flex justify-content-center"
                style={{marginBottom: '100px'}}
              >
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
        </OnScrollWrap>

      </div>
    </main>
  );
}
export default withRouter (AboutUS);
