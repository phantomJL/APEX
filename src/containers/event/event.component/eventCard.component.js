import React from 'react';
import ReactPlayer from 'react-player';

export default function EventCard(props){
    const [videoPlay, setVideoPlay] = React.useState (false);

    return(
        <div className='row' 
    style={{cursor: 'pointer',margin:'60px 0px'}}
    data-toggle="modal"
    data-target={`#Event${props.id}`}>
        <div className='col-2' style ={{fontFamily:"Helvetica Neue"}} >
            <div>{props.data.year}</div>
            <h3>{props.data.month}</h3>
        </div>
        <div  className='col-6'>
          <img style={{ width: '100%', height :'20vh', objectFit:'cover' }} src={props.data.cover} alt="Card cap" />
        </div>
        <div  className='col-4 d-flex align-items-start flex-column'>
            <div className='mt-auto'><strong>{props.data.title}</strong></div>
            <div><strong>Location:</strong> {props.data.location}</div>
            {props.data.client && <div><strong>Client:</strong> {props.data.client}</div>}
        </div>

        <div
        className="modal fade"
        id={`Event${props.id}`}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onClick={() => setVideoPlay (false)}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
          <div className="carousel">
          <div>
            {props.data.pictures && props.data.pictures.map((picture, index) => (
              <img className='p-4' style={{width: '100%'}} key={index} src={picture} alt={`${index + 1}`} />
            ))}
            {props.data.videos && props.data.videos.map((video, index)=>{
                return(
                    <div className="player-wrapper">
                    <ReactPlayer
                        className="react-player"
                        url={video}
                        width="100%"
                        height="100%"
                        playing={videoPlay}
                        controls={true}
                        config={{
                            file: {
                              attributes: {
                                onContextMenu: e => e.preventDefault (),
                                controlsList: 'nodownload',
                              },
                            },
                          }}
                    />
                    </div>
                )
            })}
          </div>
        </div>
          </div>
        </div>
      </div>
        
    </div>
    )
}