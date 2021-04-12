import React from 'react';
import {withRouter} from 'react-router-dom';
import ImageLoader from '../../../components/shared/ImageLoader';

function Picture (props) {
  console.log (props.data);
  return (
    <div style={{height: '270px'}} className="p-2">
      <ImageLoader
        container={false}
        imgHeight="100%"
        imgOpacity={1}
        url={props.data.img_url}
      />
    </div>
  );
}
export default withRouter (Picture);