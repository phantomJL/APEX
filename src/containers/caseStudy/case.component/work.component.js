import React from 'react';
function Work (props) {
  return (
    <div>
      <img
        style={{width: '100%'}}
        class="card-img-top"
        src={props.data.cover}
        alt="Card cap"
      />
      <div class="work-body">
        <div style ={{fontFamily:"Helvetica Neue"}} >
        <h5>{props.data.case_name}</h5>
        <h5>{props.data.location}</h5>

        {props.data.client && 
        <div className='py-2'>
          <h5 style ={{fontFamily:"EB Garamond"}}>Client: {props.data.client}</h5>
          {props.data.talent && <h5 style ={{fontFamily:"EB Garamond"}}>Talent: {props.data.talent}</h5>}
          </div>
        }
        {props.data.collaborator && <h5 className='py-2' style ={{fontFamily:"EB Garamond"}}>Collaborator: {props.data.collaborator}</h5>}

         <p class="card-text p-4 news-font">
          <ul style = {{paddingInlineStart: 0}}>
            {props.data.points && props.data.points.map((point)=>(
              <li>{point}</li>
            )
            )}
          </ul>
        </p>
        </div>
      </div>
    </div>
  );
}
export default Work;
