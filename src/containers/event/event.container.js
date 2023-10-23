import React from 'react';
import {withRouter} from 'react-router-dom';
import {events} from '../../data/event.data';
import EventCard from './event.component/eventCard.component';

function Event (props) {
  return (
    <section className="container-fluid">
          <div className="row py-4 m-0">
            {events.map ((value, index) => {
              return (
                <div className='col-12 col-md-6'>
                   <EventCard data={value} id = {index} />
                </div>
              );
            })}
          </div>
    </section>
  );
}

export default withRouter (Event);
