import React, {useState, useEffect} from 'react';

export default function ImageLoader (props) {
  return (
    <div
      style={{
        width: `${props.width}px`,
        height: `${ImageStyle (props.style, props.width)}px`,
        backgroundColor: 'red',
      }}
    />
  );
}

const ImageStyle = (style, width) => {
  if (style === '1:1') {
    return width;
  }
  if (style === '3:2') {
    return width * 2 / 3;
  }
  if (style === '16:6.75') {
    return width * 6.75 / 16;
  }
};

const useWidth = myRef => {
  const [width, setWidth] = useState (400);
  useEffect (
    () => {
      setWidth (myRef.current.offsetWidth);
    },
    [myRef]
  );
  return {width};
};
export {useWidth};
