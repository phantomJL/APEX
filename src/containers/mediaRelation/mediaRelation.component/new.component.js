import React, {useState} from 'react';

function New (props) {
  const [show, setShow] = useState ('');
  console.log (show);
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 news p-4">
      <div className="d-flex py-2 news-img">
        <img
          className="mr-3"
          src={`${process.env.PUBLIC_URL}${props.data.img_url}`}
          style={{width: '90%', objectFit: 'cover'}}
        />
        <img
          src={`${process.env.PUBLIC_URL}${props.data.news_logo}`}
          style={{
            width: `${props.data.logo_style === 'round' ? '16%' : '18%'}`,
            marginTop: 'auto',
          }}
        />
      </div>
      <div className="news-intro p-3 d-flex align-content-around flex-wrap">

        <div className="avenir small-title py-2" style={{width: '100%'}}>
          {props.data.date}
        </div>
        <div className="avenir font-weight-bold py-2" style={{width: '100%'}}>
          {props.data.title}
        </div>

        <div className="d-flex flex-row-reverse" style={{width: '100%'}}>
          {props.data.description == 'newspaper'
            ? <a
                className="btn btn-outline-dark py-2 "
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => {
                  setShow (`${process.env.PUBLIC_URL}${props.data.url_1}`);
                }}
              >
                {' '}Read More
              </a>
            : <a className="btn btn-outline-dark py-2 " href={props.data.url_1}>
                {' '}Go to Article
              </a>}

        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content" />
          <img src={show} style={{width: '100%', height: '80%'}} />
        </div>
      </div>

    </div>
  );
}
export default New;
