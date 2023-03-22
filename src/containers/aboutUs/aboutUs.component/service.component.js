import React from 'react';
function Service (props) {
  return (
    <div className="col-12 col-md-6 mb-3">
      <div class="card h-100">
        <div class="card-body h-100">
          <div className="about-text subtitle card-title py-4">
            {props.data.title}
          </div>
          <div className="large-title paragraph card-text py-2 justify-content-center">
            {props.data.intro}
          </div>
        </div>
      </div>

    </div>
  );
}
export default Service;
