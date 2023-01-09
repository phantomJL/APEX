import React from 'react';
import {withRouter} from 'react-router-dom';
import {work} from '../../data/caseStudy.data';
import Work from './case.component/work.component';

function CaseStudy (props) {
  return (
    <section className="case" style = {{marginBottom: "100px"}}>
          <div className="row py-2 ">

            {work.map ((value, index) => {
              return (
                <div className="col-md-6 col-sm-12 p-0 work">
                    <Work data={value} />
                </div>
              );
            })}
          </div>
          <h2 className = "w-100 text-center"  style ={{ fontFamily:"EB Garamond", fontWeight:300}}>
            TO BE CONTINUED ...
          </h2>

    </section>
  );
}

export default withRouter (CaseStudy);
