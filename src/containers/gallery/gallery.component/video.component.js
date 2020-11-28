import React, {useEffect, useState} from "react"
function Video(props){
    const modalOnClick=(link)=>{
        props.setVideo(link)
        props.setVideoPlay(true)
    }
    return (

        <div className = "col-12 col-lg-4 col-md-6 px-3 py-2"> 
            <div className= "container"  data-toggle="modal" data-target="#exampleModal" onClick={ () => modalOnClick(props.data.video_link)}>
                    <div className="cover video-cover">
                        <img className="cover-img" src = {`${process.env.PUBLIC_URL}${props.data.img_url}`} style={{width:"100%"}} />
                    </div>
               
                <div className="bottom-left-gallery  p-2 article hide">
                            <div className="text-white small-title py-2">{props.data.magazine}</div>
                    <div className="text-white font-weight-bold small-title">STARRING</div>
                            <div className="text-white small-title">{props.data.starring}</div>
                    <div className="text-white font-weight-bold small-title">DIRECTED BY</div>
                             <div className="text-white small-title">{props.data.director}</div>
                </div>
            </div> 
        </div>
       
 
    )
}

export default Video