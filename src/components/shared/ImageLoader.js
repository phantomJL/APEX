import React, {useState, useEffect} from 'react';

export default function ImageLoader (props) {
  return (
    <div
      style={{
        width: `${props.width}`,
        height: `${ImageStyle (props.style, props.width)}`,
        backgroundColor: 'pink',
      }}
    />
  );
}

const ImageStyle = (style, width) => {
  if (style == '1:1') {
    return width;
  }
  if (style == '3:2') {
    return width * 2 / 3;
  }
  if (style == '16:6.75') {
    return width * 6.75 / 16;
  }
};

const GetWidth = myRef => {
  const [width, setWidth] = useState (0);
  useEffect (
    () => {
      const handleResize = () => {
        setWidth (myRef.current.offsetWidth);
      };

      window.addEventListener ('resize', handleResize);

      return () => {
        window.removeEventListener ('resize', handleResize);
      };
    },
    [myRef]
  );
};
export {GetWidth};
