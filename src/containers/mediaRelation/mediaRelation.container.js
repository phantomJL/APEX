import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {news, magazine} from '../../data/mediaRelation';
import Magazine from './mediaRelation.component/magazineCover.component';
import New from './mediaRelation.component/new.component';

function MediaRelation (props) {
  const [page, setPage] = useState (0);
  const [info, setNews] = useState ('');
  const [maga, setMagazine] = useState ('');
  const upitem = 0 + page * 9;
  const botitem = 9 + page * 9;
  const change_page = direction => {
    if (direction === 'left') {
      setPage (page - 1);
    }
    if (direction === 'right') {
      setPage (page + 1);
    }
    window.scrollTo (0, 0);
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
  console.log (Math.ceil (news.length / 9));
  return (
    <main className="px-4">
      <div className="about-text p-4">
        <div className="py-4 subtitle font-weight-bold">News & Events</div>
        <div className="row">
          {news
            .slice (upitem, botitem)
            .map ((value, index) => <New data={value} setNews={setNews} />)}

        </div>
        <div className="d-flex justify-content-center">

          <nav aria-label="...">
            <div className="d-flex">
              <div className="px-4 new-page-button">
                {page !== 0 &&
                  <div onClick={() => change_page ('left')}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg>&nbsp;Previous Page{' '}
                  </div>}
              </div>
              <div className="px-4 new-page-button">

                {page !== Math.ceil (news.length / 9) - 1 &&
                  <div onClick={() => change_page ('right')}>
                    Next Page &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                  </div>}
              </div>
            </div>

          </nav>
        </div>
      </div>
      <div
        className="about-text p-4"
        style={{width: '90vw', overflowY: 'hidden'}}
      >
        <div className="py-4 subtitle font-weight-bold">
          Magazine Covers
        </div>

        <div
          className="d-flex"
          id="horizontal"
          onWheel={onWheel}
          style={{
            overflowX: 'auto',
          }}
        >
          {magazine.map ((value, index) => (
            <Magazine data={value} setMagazine={setMagazine} />
          ))}
        </div>
      </div>
      {/* news modal */}
      <div
        className="modal fade"
        id="news"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <img src={info} style={{width: '100%'}} />
          </div>
        </div>
      </div>
      {/* magazine modal */}
      <div
        className="modal fade"
        id="magazine"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="d-flex modal-dialog modal-lg text-center align-items-center justify-content-center"
          style={{height: '90%'}}
        >
          <img src={maga} className="magazine" />
        </div>
      </div>
    </main>
  );
}
export default withRouter (MediaRelation);
