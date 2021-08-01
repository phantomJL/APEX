import React, {useState, useEffect, useRef} from 'react';
import './Button.css';
/*eslint-disable */
/**
 * @page
 */
export default function OnScrollWrap (props) {
  const [show, setShow] = useState (true);
  const getDiv = useRef ();
  useEffect (
    () => {
      window.addEventListener ('scroll', isInViewport);
      return () => window.removeEventListener ('scroll', isInViewport);
    },
    [isInViewport]
  );

  const isInViewport = (offset = 0) => {
    if (!getDiv.current) setShow (false);
    const top = getDiv.current.getBoundingClientRect ().top;
    setShow (top <= window.innerHeight);
  };
  //   const onScroll = () => {
  //     let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
  //     setScrollTop (currentPosition <= 0 ? 0 : currentPosition);
  //   };

  return (
    <div
      ref={el => (getDiv.current = el)}
      className={`${show ? 'text-animation' : ''}`}
      style={{display: show ? 'block' : 'hidden'}}
    >
      {props.children}
    </div>
  );
}
