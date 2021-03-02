import React from 'react';
import {withRouter} from 'react-router-dom';
import Nav from './nav.component';
import '../../App.css';

function Main (props) {
  const openEmail = () => {
    window.location.href = `mailto:hello@apexcomm.us`;
  };
  return (
    <main
      className="main-canvas"
      style={{
        position: props.history.location.pathname === '/' ? 'relative' : '',
      }}
    >
      <section className="sticky-top">
        <Nav
          history={props.history}
          color={props.history.location.pathname === '/' ? 'black' : 'white'}
        />
      </section>

      {props.history.location.pathname === '/'
        ? <section
            style={{position: 'absolute', height: '100%', overflowY: 'hidden'}}
          >
            {props.children}
          </section>
        : <section>
            <section
              className="container-fluid "
              style={{
                paddingLeft: '60px',
                paddingRight: '60px',
              }}
            >
              {props.children}
            </section> <section class="icon-bar">
              <a
                onClick={() =>
                  window.open ('https://www.instagram.com/apexcomm/', '_blank')}
                class="instagram"
              >
                <i class="fab fa-instagram" />
              </a>
              <a
                onClick={() =>
                  window.open ('https://www.weibo.com/u/5888176990', '_blank')}
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
              class="gmail-bar avenir text-uppercase"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                cursor: 'pointer',
              }}
              onClick={() => openEmail ()}
            >

              hello@apexcomm.us
            </section> <footer
              className="trocchi text-weight-bold text-center p-4 text-uppercase small-title"
              style={{
                position: 'relative',
                bottom: '0 !important',
                marginTop: '120px',
              }}
            >
              ©2021 APEX Communications, INC.All Rights Reserved.
            </footer>
          </section>}

    </main>
  );
}

export default withRouter (Main);
