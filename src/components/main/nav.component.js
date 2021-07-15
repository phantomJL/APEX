import React, {useEffect, useRef, useState} from 'react';
import '../../App.css';
export default function Nav (props) {
  const aboutUS = useRef ();
  const caseStudy = useRef ();
  const gallery = useRef ();
  const mediaRelation = useRef ();
  const contactUs = useRef ();
  const [current_page, setPage] = useState ('/');

  const navToPage = page => {
    props.history.push (`/${page}`);
    setPage (`/${page}`);
  };
  useEffect (() => {
    props.history.location.pathname === '/AboutUS'
      ? aboutUS.current.setAttribute ('class', 'nav-link disabled')
      : aboutUS.current.setAttribute ('class', 'nav-link');
    props.history.location.pathname === '/CaseStudy'
      ? caseStudy.current.setAttribute ('class', 'nav-link disabled')
      : caseStudy.current.setAttribute ('class', 'nav-link');
    props.history.location.pathname === '/Gallery'
      ? gallery.current.setAttribute ('class', 'nav-link disabled')
      : gallery.current.setAttribute ('class', 'nav-link');
    props.history.location.pathname === '/MediaRelation'
      ? mediaRelation.current.setAttribute ('class', 'nav-link disabled')
      : mediaRelation.current.setAttribute ('class', 'nav-link');
    props.history.location.pathname === '/ContactUs'
      ? contactUs.current.setAttribute ('class', 'nav-link disabled')
      : contactUs.current.setAttribute ('class', 'nav-link');
  });
  const MouseOut = event => {
    event.target.style.color = '#6c6c6c';
  };
  const MouseOver = event => {
    props.color === 'white'
      ? (event.target.style.color = 'black')
      : (event.target.style.color = 'white');
  };
  return (
    <nav
      className="navbar navbar-expand-lg p-3 "
      id="mynav"
      style={{
        backgroundColor: props.color === 'white' ? '#FFFFFF' : 'transparent',
        position: props.color === 'white' ? '' : 'absolute',
      }}
    >
      <div
        className="navbar-brand"
        style={{cursor: 'pointer'}}
        onClick={e => props.history.push ('/')}
      >
        <img
          alt="logo"
          src={`${process.env.PUBLIC_URL}/img/apex_${props.color === 'white' ? 'black' : 'white'}.png`}
          style={{width: '80px'}}
        />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars" />
      </button>
      <div
        class="collapse navbar-collapse flex-row-reverse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav small-title">
          <li className="nav-item px-2 d-flex justify-content-center">
            <div
              ref={aboutUS}
              className="nav-link"
              onClick={e => navToPage ('AboutUS')}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              ABOUT US
            </div>
          </li>
          <li className="nav-item px-2 d-flex justify-content-center">
            <div
              ref={caseStudy}
              className="nav-link"
              onClick={e => navToPage ('CaseStudy')}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              WORK
            </div>
          </li>
          <li className="nav-item px-2 d-flex justify-content-center">
            <div
              ref={gallery}
              className="nav-link"
              onClick={e => navToPage ('Gallery')}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              GALLERY
            </div>
          </li>
          <li className="nav-item px-2 d-flex justify-content-center">
            <div
              ref={mediaRelation}
              className="nav-link"
              onClick={e => navToPage ('MediaRelation')}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              MEDIA RELATIONS
            </div>
          </li>
          <li className="nav-item px-2 d-flex justify-content-center">
            <div
              ref={contactUs}
              className="nav-link"
              onClick={e => navToPage ('ContactUs')}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              CONTACT US
            </div>
          </li>
          {window.innerWidth <= 768
            ? <div>
                <li className="nav-item px-2 d-flex justify-content-center">
                  <a
                    onClick={() =>
                      window.open (
                        'https://www.instagram.com/apexcomm/',
                        '_blank'
                      )}
                    class="instagram px-2"
                  >
                    <i class="fab fa-instagram" />
                  </a>
                  <a
                    onClick={() =>
                      window.open (
                        'https://www.weibo.com/u/5888176990',
                        '_blank'
                      )}
                    class="weibo px-2"
                  >
                    <i class="fab fa-weibo " />
                  </a>

                  <a
                    onClick={() =>
                      window.open (
                        'https://www.youtube.com/channel/UCiFfqtera5aCdOApxZzXgxg',
                        '_blank'
                      )}
                    class="youtube px-2"
                  >
                    <i class="fab fa-youtube " />
                  </a> <a
                    onClick={() =>
                      window.open ('https://vimeo.com/apexcomm', '_blank')}
                    class="vimeo px-2"
                  >
                    <i class="fab fa-vimeo-v" />
                  </a>
                </li>
                <li
                  className="d-flex justify-content-center"
                  style={{fontSize: '8px'}}
                >
                  HELLO@APEXCOMM.US
                </li>
              </div>
            : <div />}
        </ul>
      </div>
    </nav>
  );
}
