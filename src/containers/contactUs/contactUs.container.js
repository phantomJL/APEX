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

  const successFun = () => {
    setSuccess (true);
  };

  return (
    <main className="mx-auto" style={{width: '70%'}}>
      {success == false
        ? <secion>
            <h1 className="article text-uppercase text-center p-4">
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
          </secion>
        : <SuccessPop />}
    </main>
  );
}

export default withRouter (ContactUsContainer);
