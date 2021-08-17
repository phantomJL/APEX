import React, {Component, useEffect, useState} from 'react';
import {Route, withRouter} from 'react-router-dom';

function ScrollToTop (props) {
  useEffect (
    () => {
      window.scrollTo (0, 0);
    },
    [props.location]
  );

  return (
    <div>
      {props.children}
    </div>
  );
}

export default withRouter (ScrollToTop);
