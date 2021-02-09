import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {news, magazine} from '../../data/mediaRelation';
import Magazine from './mediaRelation.component/magazineCover.component';
import News from './mediaRelation.component/news.component';
import New from './mediaRelation.component/new.component';

function MediaRelation (props) {
  const [page, setPage] = useState (0);
  const page_number = Math.ceil (news.length / 9);
  const upitem = 0 + page * 9;
  const botitem = 9 + page * 9;
  const change_page = page => {
    setPage (page);
  };
  return (
    <main className="px-4">
      <div className="avenir p-4">
        <div className="py-4 subtitle font-weight-bold">NEWS</div>
        <div className="row">
          {page !== page_number
            ? news
                .slice (upitem, botitem)
                .map ((value, index) => <New data={value} />)
            : news.slice (upitem).map ((value, index) => <New data={value} />)}
        </div>
        <div className="d-flex justify-content-center">

          <nav aria-label="...">
            <ul className="pagination">
              {[...Array (page_number).keys ()].map (i => (
                <li class="page-item">
                  <a className="page-link" onClick={() => change_page (i)}>
                    {i + 1}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="avenir p-4">
        <div className="py-4 subtitle font-weight-bold">
          MAGAZINE
        </div>
        <div className="row">
          {magazine.map ((value, index) => <Magazine data={value} />)}
        </div>
      </div>
    </main>
  );
}
export default withRouter (MediaRelation);
