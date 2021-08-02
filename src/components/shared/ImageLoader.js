import React, {useEffect, useState} from 'react';

export default function ImageLoader (props) {
  const [load, setLoad] = useState (false);
  const [url, setUrl] = useState("")
  
  useEffect(()=>{
    setUrl(props.url)
  }, [props.url])
  return (
    <>
    {props.container?
    <div
    className={`${props.containerClass} animation`}

      style={{
        width: '100%',
        opacity: load ? 1 : 0,
        backgroundColor: load ? props.containerColor : 'transparent',
      }}
    >
      <img
        className={`${props.imgClass}`}
        src={`${process.env.PUBLIC_URL}${url}`}
        style={{
          width: '100%',
          opacity: load ? props.imgOpacity : 0,
          objectFit:"contain",
        }}
        onLoad={() => setLoad (true)}
      />
    </div>
    : 
    <img
    alt="cover"
    className="animation"
    src={`${process.env.PUBLIC_URL}${url}`}
    style={{
      width: props.imgWidth,
      height: props.imgHeight,
      opacity: load ? props.imgOpacity : 0,
      objectFit: "cover",
    }}
    onLoad={() => setLoad (true)}
  />
    }
    </>
  );
}