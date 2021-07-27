import React, {useEffect, useRef, useState} from 'react';
import '../../App.css';
export default function Nav (props) {
  const aboutUS = useRef ();
  const caseStudy = useRef ();
  const gallery = useRef ();
  const mediaRelation = useRef ();
  const contactUs = useRef ();
  const [currentWidth, setCurrentWidth] = useState ('0');
  const navToPage = page => {
    setCurrentWidth ('0');
    props.history.push (`/${page}`);
  };

  useEffect (
    () => {
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
    },
    [props.history.location.pathname]
  );
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
      className="navbar fixed-top navbar-expand-lg p-3 "
      id="mynav"
      style={{
        backgroundColor: props.color === 'black' ? '' : 'white',
        position: props.color === 'white' ? '' : 'absolute',
        overflow: 'hidden',
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
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{zIndex: '1000'}}
      >
        <div class="close-icon" onClick={() => setCurrentWidth ('0')}>
          <i class="fas fa-times" />
        </div>
        <div
          className="navbar-toggler-icon"
          onClick={() => setCurrentWidth ('100%')}
          style={{
            color: props.color === 'white' ? '' : 'white',
          }}
        >
          <i class="fas fa-bars" />
        </div>

      </button>

      <div
        class="collapse navbar-collapse flex-row-reverse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav small-title">
          <li className="nav-item px-2 d-flex ">
            <div
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              ref={aboutUS}
              className="nav-link"
              onClick={e => navToPage ('AboutUS')}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              ABOUT US
            </div>
          </li>
          <li className="nav-item px-2 d-flex ">
            <div
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              ref={caseStudy}
              className="nav-link"
              onClick={e => navToPage ('CaseStudy')}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              WORK
            </div>
          </li>
          <li className="nav-item px-2 d-flex ">
            <div
              ref={gallery}
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              className="nav-link"
              onClick={e => navToPage ('Gallery')}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              GALLERY
            </div>
          </li>
          <li className="nav-item px-2 d-flex ">
            <div
              ref={mediaRelation}
              className="nav-link"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              onClick={e => navToPage ('MediaRelation')}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              MEDIA RELATIONS
            </div>
          </li>
          <li className="nav-item px-2 d-flex ">
            <div
              ref={contactUs}
              className="nav-link"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              onClick={e => navToPage ('ContactUs')}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              CONTACT US
            </div>
          </li>
        </ul>
      </div>
      <div
        className="overlay"
        style={{width: currentWidth}}
        onClick={() => setCurrentWidth ('0')}
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      />
    </nav>
  );
}
