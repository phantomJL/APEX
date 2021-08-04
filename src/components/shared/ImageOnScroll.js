import React, {useState, useEffect, useRef} from 'react';
import './Button.css';

export default function ImageOnScroll (props) {
  const [show, setShow] = useState (true);
  const [load, setLoad] = useState (false);
  const [url, setUrl] = useState ('');
  const getDiv = useRef ();
  useEffect (
    () => {
      setUrl (props.url);
      window.addEventListener ('scroll', isInViewport);
      return () => window.removeEventListener ('scroll', isInViewport);
    },
    [isInViewport, props.url]
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
    <img
      alt="images"
      ref={el => (getDiv.current = el)}
      className={`${show ? 'animation' : ''}`}
      src={`${process.env.PUBLIC_URL}${url}`}
      style={{
        width: props.imgWidth,
        height: props.imgHeight,
        opacity: load ? (show ? props.imgOpacity : 0) : 0,
        objectFit: 'cover',
      }}
      onLoad={() => setLoad (true)}
    />
  );
}
