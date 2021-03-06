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
      <div className="avenir p-4">
        <div className="py-4 subtitle font-weight-bold">NEWS & EVENTS</div>
        <div className="d-flex flex-wrap ">
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

                    <i class="fas fa-angle-left" />&nbsp;Previous Page{' '}
                  </div>}
              </div>
              <div className="px-4 new-page-button">

                {page !== Math.ceil (news.length / 9) - 1 &&
                  <div onClick={() => change_page ('right')}>
                    Next Page &nbsp;
                    <i class="fas fa-angle-right" />
                  </div>}
              </div>
            </div>

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
          className="modal-dialog modal-lg text-center"
          style={{height: '90%'}}
        >
          <img src={maga} style={{height: '100%'}} />
        </div>
      </div>
    </main>
  );
}
export default withRouter (MediaRelation);
