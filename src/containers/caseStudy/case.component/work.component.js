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
      <div class="card-body">
        <div style ={{fontFamily:"Helvetica Neue"}} >
        <h5>{props.data.case_name}</h5>
        {props.data.client && <h5>Client: {props.data.client}</h5>}
        {props.data.collaborator && <h5>Collaborator: {props.data.collaborator}</h5>}
       
        <h5>{props.data.location}</h5>
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