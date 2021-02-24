import React, {useEffect, useRef, useState} from 'react';
import {withRouter} from 'react-router-dom';
import ImageLoader from '../../components/shared/ImageLoader';
import {caseStudy, caseStudy_event} from '../../data/caseStudy.data';
import Case from './case.component/case.component';
import Event from './case.component/event.component';

function CaseStudy (props) {
  const ref = useRef (null);
  // const [width, setWidth] = useState (0);
  useEffect (() => {}, [ref.current]);
  return (
    <main style={{paddingLeft: '5%', paddingRight: '5%'}}>
      <section className="p-4">
        <div className="container">
          <div className="row py-2">

            {caseStudy.map ((value, index) => {
              return (
                <div className="col-md-6 col-sm-12 col-lg-4">

                  <div ref={ref}>
                    <ImageLoader
                      width={`${ref.current ? ref.current.offsetWidth : 0}`}
                    />
                    <Case data={value} index={index} />

                  </div>
                </div>
              );
            })}
            {caseStudy_event.map ((value, index) => {
              return (
                <div className="col-md-6 col-sm-12 col-lg-4">
                  <Event data={value} index={caseStudy.length + index} />
                  {' '}
                </div>
              );
            })}
          </div>
        </div>

      </section>

    </main>
  );
}

export default withRouter (CaseStudy);
