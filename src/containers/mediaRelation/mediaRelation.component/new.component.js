import React from 'react';
import ImageLoader from '../../../components/shared/ImageLoader';
import OnScrollWrap from '../../../components/shared/OnScrollWrap';

function New (props) {
  return (
    <div className="col-lg-4 col-md-6 col-12 news p-4 justify-content-between">
      <div className="d-flex py-2 news-img justify-content-between">
        {/* <img
          className="mr-3"
          src={`${process.env.PUBLIC_URL}${props.data.img_url}`}
          style={{width: '90%', objectFit: 'cover'}}
        /> */}
        <ImageLoader
          container={false}
          imgWidth="80%"
          imgOpacity={1}
          url={props.data.img_url}
        />
        <img
          alt="logo"
          src={`${process.env.PUBLIC_URL}${props.data.news_logo}`}
          style={{
            width: `${props.data.logo_style === 'round' ? '16%' : '18%'}`,
            marginTop: 'auto',
          }}
        />
      </div>
      <div className="news-intro p-3 d-flex align-content-around flex-wrap">

        <div className="news-font small-title py-2" style={{width: '100%'}}>
          {props.data.date}
        </div>
        <div className="news-font news-title py-2" style={{width: '100%'}}>
          {props.data.title}
        </div>

        <div className="d-flex flex-row-reverse" style={{width: '100%'}}>
          {props.data.description == 'newspaper'
            ? <a
                className="btn btn-outline-dark py-2 "
                data-toggle="modal"
                data-target="#news"
                onClick={() => {
                  props.setNews (
                    `${process.env.PUBLIC_URL}${props.data.url_1}`
                  );
                }}
              >
                {' '}Read More
              </a>
            : <a
                className="btn btn-outline-dark py-2 "
                onClick={() => window.open (props.data.url_1, '_blank')}
              >
                {' '}Read More
              </a>}

        </div>
      </div>
    </div>
  );
}
export default New;
