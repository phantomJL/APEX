import React from 'react';
import {withRouter} from 'react-router-dom';
import ImageLoader from '../../../components/shared/ImageLoader';

function Picture (props) {
  return (
    <div style={{height: `${props.height}`}} className="p-1">
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
