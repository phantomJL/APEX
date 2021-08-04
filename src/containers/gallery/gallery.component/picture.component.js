import React from 'react';
import {withRouter} from 'react-router-dom';
import ImageOnScroll from '../../../components/shared/ImageOnScroll';

function Picture (props) {
  return (
    <div style={{height: `${props.height}`}} className="p-1">

      <ImageOnScroll imgHeight="100%" imgOpacity={1} url={props.data.img_url} />
    </div>
  );
}
export default withRouter (Picture);
