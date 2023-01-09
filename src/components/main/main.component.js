import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import Nav from './nav.component';
import '../../index.css';

function Main (props) {
  const openEmail = () => {
    window.location.href = `mailto:hello@apexcomm.us`;
  };
  const [width, setWidth] = useState (window.innerWidth);
  const updateDimensions = () => {
    setWidth (window.innerWidth);
  };

  useEffect (
    () => {
      updateDimensions ();
      window.addEventListener ('resize', updateDimensions);
      return () => window.removeEventListener ('resize', updateDimensions);
    },
    [updateDimensions, width]
  );
  return (
    <main
      className="main-canvas"
      style={{
        position: props.history.location.pathname === '/' ? 'absolute' : '',
      }}
    >
      <section>
        <Nav
          history={props.history}
          color={props.history.location.pathname === '/' ? 'black' : 'white'}
        />
      </section>

      {props.history.location.pathname === '/'||props.history.location.pathname === '/SelectWork' || width < 767
        ? <section
            style={{
              position: props.history.location.pathname === '/'
                ? 'absolute'
                : '',
              width: '100%',
              marginTop: props.history.location.pathname === '/'
                ? '0px'
                : '60px',
              minHeight: '100vh !important',
              overflow: 'hidden !important',
            }}
          >
            {props.children}
            {props.history.location.pathname !== '/' &&
              <footer
                className="times text-weight-bold text-center p-1 text-uppercase small-title"
                style={{
                  width: '100%',
                  bottom: 0,
                }}
              >
                ©2022 APEX Communications, INC. All Rights Reserved.
              </footer>}
          </section>
        : <section>
            <section
              style={{
                minHeight: '90vh',
                marginTop: '60px',
              }}
            >
              <section className="container-fluid content-padding">
                {props.children}
              </section>
              <section class="icon-bar">
                <a
                  onClick={() =>
                    window.open (
                      'https://www.instagram.com/apexcomm/',
                      '_blank'
                    )}
                  class="instagram"
                >
                  <i class="fab fa-instagram" />
                </a>
                <a
                  onClick={() =>
                    window.open (
                      'https://www.weibo.com/u/5888176990',
                      '_blank'
                    )}
                  class="weibo"
                >
                  <i class="fab fa-weibo" />
                </a>

                <a
                  onClick={() =>
                    window.open (
                      'https://www.youtube.com/channel/UCiFfqtera5aCdOApxZzXgxg',
                      '_blank'
                    )}
                  class="youtube"
                >
                  <i class="fab fa-youtube" />
                </a> <a
                  onClick={() =>
                    window.open ('https://vimeo.com/apexcomm', '_blank')}
                  class="vimeo"
                >
                  <i class="fab fa-vimeo-v" />
                </a>

              </section>
              <section
                class="gmail-bar news text-uppercase"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  cursor: 'pointer',
                }}
                onClick={() => openEmail ()}
              >

                hello@apexcomm.us
              </section>

            </section>
            <footer
              className="times text-weight-bold text-center p-2 mt-2 text-uppercase small-title"
              style={{
                position: 'relative',
                marginTop: '120px',
                bottom: '6px',
              }}
            >
              ©2022 APEX Communications, INC. All Rights Reserved.
            </footer>
          </section>}

    </main>
  );
}

export default withRouter (Main);
