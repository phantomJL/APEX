import React from 'react';
import {withRouter} from 'react-router-dom';
import Nav from './nav.component';
import '../../App.css';

function Main (props) {
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
              <a href="https://www.instagram.com/apexcomm/" class="instagram">
                <i class="fab fa-instagram" />
              </a>
              <a href="https://www.weibo.com/u/5888176990" class="weibo">
                <i class="fab fa-weibo" />
              </a>

              <a
                href="https://www.youtube.com/channel/UCiFfqtera5aCdOApxZzXgxg"
                class="youtube"
              >
                <i class="fab fa-youtube" />
              </a> <a href="https://vimeo.com/apexcomm" class="vimeo">
                <i class="fab fa-vimeo-v" />
              </a>
              <a href="https://www.facebook.com/apexcomm" class="facebook">
                <i class="fab fa-facebook-f" />
              </a>
            </section> <section
              class="gmail-bar avenir text-uppercase"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
              }}
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
