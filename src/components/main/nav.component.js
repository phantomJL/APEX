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
    <div
      className="p-3 w-100 d-flex justify-content-between align-items-center"
      id="mynav"
      style={{
        backgroundColor: props.color === 'white' ? '#FFFFFF' : 'transparent',
        position: props.color === 'white' ? '' : 'absolute',
      }}
    >
      <div onClick={e => props.history.push ('/')}>
        <img
          alt="logo"
          src={`${process.env.PUBLIC_URL}/img/apex_${props.color === 'white' ? 'black' : 'white'}.png`}
          style={{width: '80px'}}
        />
      </div>
      <ul className="nav small-title">
        <li className="nav-item px-2">
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
        <li className="nav-item px-2">
          <div
            ref={caseStudy}
            className="nav-link"
            onClick={e => navToPage ('CaseStudy')}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
          >
            CASE STUDY
          </div>
        </li>
        <li className="nav-item px-2">
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
        <li className="nav-item px-2">
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
        <li className="nav-item px-2">
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
      </ul>
    </div>
  );
}
