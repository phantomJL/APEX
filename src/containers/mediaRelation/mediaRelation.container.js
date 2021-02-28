import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {news, magazine} from '../../data/mediaRelation';
import Magazine from './mediaRelation.component/magazineCover.component';
import News from './mediaRelation.component/news.component';
import New from './mediaRelation.component/new.component';

function MediaRelation (props) {
  const [page, setPage] = useState (0);
  const upitem = 0 + page * 9;
  const botitem = 9 + page * 9;
  const change_page = direction => {
    direction === 'left' ? setPage (page - 1) : setPage (page + 1);
  };
  const onWheel = e => {
    e.preventDefault ();
    var container = document.getElementById ('horizontal');
    var containerScrollPosition = document.getElementById ('horizontal')
      .scrollLeft;
    container.scrollTo ({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: 'smooth', //if you want smooth scrolling
    });
  };
  return (
    <main className="px-4">
      <div className="avenir p-4">
        <div className="py-4 subtitle font-weight-bold">NEWS & EVENTS</div>
        <div className="row">
          {news
            .slice (upitem, botitem)
            .map ((value, index) => <New data={value} />)}

        </div>
        <div className="d-flex justify-content-center">

          <nav aria-label="...">
            {/* <ul className="pagination">
              {[...Array (page_number).keys ()].map (i => (
                <li class="page-item">
                  <a className="page-link" onClick={() => change_page (i)}>
                    {i + 1}
                  </a>
                </li>
              ))}
            </ul> */}
            {page !== 0 &&
              <i
                class="fas fa-angle-left"
                onClick={() => change_page ('left')}
              />}

            {page !== Math.ceil ((news.length - 1) / 9) &&
              <i
                class="fas fa-angle-right"
                onClick={() => change_page ('right')}
              />}

          </nav>
        </div>
      </div>
      <div className="avenir p-4" style={{width: '100%', overflowY: 'hidden'}}>
        <div className="py-4 subtitle font-weight-bold">
          MAGAZINE
        </div>

        <div
          className="d-flex"
          id="horizontal"
          onWheel={onWheel}
          style={{
            overflowX: 'auto',
          }}
        >
          {magazine.map ((value, index) => <Magazine data={value} />)}
        </div>
      </div>

    </main>
  );
}
export default withRouter (MediaRelation);
