import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {ToastProvider, DefaultToastContainer} from 'react-toast-notifications';
import FormWithToasts from './contactUs.component/contactUs.component';
import SuccessPop from './contactUs.component/successPop';
const ToastContainer = props => (
  <DefaultToastContainer
    className="toast-container"
    style={{zIndex: '2000'}}
    {...props}
  />
);
function ContactUsContainer (props) {
  const [purpose, setPurpose] = useState ('Reach Out');
  const [success, setSuccess] = useState (false);
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
  const successFun = () => {
    setSuccess (true);
  };

  return (
    <div>
      <main
        className="mx-auto"
        style={{width: width < 767 ? '90%' : '70%', height: '100%'}}
      >
        {success == false
          ? <secion>
              <h1 className=" contact-title text-uppercase text-center p-4">
                Let's work together
              </h1>
              <div className="d-flex justify-content-center p-4">
                <button
                  className={`article btn btn-outline-warning border-top-0 border-left-0 border-right-0 font-weight-bold text-uppercase ${purpose === 'Media Inquiry' ? '' : 'active'}`}
                  style={{width: '50%'}}
                  onClick={() => setPurpose ('Reach Out')}
                >
                  say 👋 to us
                </button>
                <button
                  className={`article btn btn-outline-warning border-top-0 border-left-0 border-right-0 font-weight-bold text-uppercase ${purpose === 'Media Inquiry' ? 'active' : ''}`}
                  style={{width: '50%'}}
                  onClick={() => setPurpose ('Media Inquiry')}
                >
                  media inquiry
                </button>

              </div>
              <ToastProvider components={{ToastContainer}}>
                <FormWithToasts purpose={purpose} setSuccess={successFun} />
              </ToastProvider>
              {width < 767 &&
                <section className="d-flex justify-content-center px-4">
                  <div className="d-flex">
                    <a
                      onClick={() =>
                        window.open (
                          'https://www.instagram.com/apexcomm/',
                          '_blank'
                        )}
                      className="instagram px-2 py-4"
                    >
                      <i class="fab fa-instagram" />
                    </a>
                    <a
                      onClick={() =>
                        window.open (
                          'https://www.weibo.com/u/5888176990',
                          '_blank'
                        )}
                      className="weibo px-2 py-4"
                    >
                      <i class="fab fa-weibo" />
                    </a>

                    <a
                      onClick={() =>
                        window.open (
                          'https://www.youtube.com/channel/UCiFfqtera5aCdOApxZzXgxg',
                          '_blank'
                        )}
                      className="youtube px-2 py-4"
                    >
                      <i class="fab fa-youtube" />
                    </a> <a
                      onClick={() =>
                        window.open ('https://vimeo.com/apexcomm', '_blank')}
                      className="vimeo px-2 py-4"
                    >
                      <i class="fab fa-vimeo-v" />
                    </a>
                  </div>
                </section>}
            </secion>
          : <SuccessPop />}
      </main>
    </div>
  );
}

export default withRouter (ContactUsContainer);
