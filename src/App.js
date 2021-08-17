import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Main from './components/main/main.component';
import ScrollToTop from './components/shared/ScrollToTop';

const MainPage = React.lazy (() =>
  import ('./containers/mainPage/mainPage.container')
);
const AboutUs = React.lazy (() =>
  import ('./containers/aboutUs/aboutUs.container')
);
const CaseStudy = React.lazy (() =>
  import ('./containers/caseStudy/caseStudy.container')
);
const Gallery = React.lazy (() =>
  import ('./containers/gallery/gallery.container')
);
const MediaRelation = React.lazy (() =>
  import ('./containers/mediaRelation/mediaRelation.container')
);
const ContactUsContainer = React.lazy (() =>
  import ('./containers/contactUs/contactUs.container')
);

class App extends Component {
  componentDidMount () {
    Promise.all ([
      import ('bootstrap/dist/css/bootstrap.min.css'),
      import ('jquery/dist/jquery.min'),
      import ('bootstrap/dist/js/bootstrap.min'),
      import ('date-input-polyfill'),
      import ('@fortawesome/fontawesome-free/css/all.css'),
    ]);
  }
  render () {
    const NoMatch = () => <Redirect to="/nomatch" />;
    return (
      <Main>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/AboutUs" component={AboutUs} />
              <Route exact path="/CaseStudy" component={CaseStudy} />
              <Route exact path="/Gallery" component={Gallery} />
              <Route exact path="/MediaRelation" component={MediaRelation} />
              <Route exact path="/ContactUs" component={ContactUsContainer} />

              <Route exact path="/nomatch" component={Page404} />

              {/* <Logo>
            <Switch>
              <Route exact path="/dashboard" component={dashboard} />
              <Route component={NoMatch} />
            </Switch>
          </Logo> */}
            </Switch>
          </ScrollToTop>
        </React.Suspense>
      </Main>
    );
  }
}

function Page404 (props) {
  return (
    <main style={styles.container} className="text-center">
      <img
        style={styles.imageContainer}
        src={`${process.env.PUBLIC_URL}/img/404/error404-head.png`}
        alt="error404"
      />
      <div className="d-flex mt-3">
        <img
          style={styles.imageContainerSub}
          src={`${process.env.PUBLIC_URL}/img/404/4.png`}
          alt="error404"
        />
        <img
          style={styles.imageContainerSub}
          src={`${process.env.PUBLIC_URL}/img/404/0.png`}
          alt="error404"
        />
        <img
          style={styles.imageContainerSub}
          src={`${process.env.PUBLIC_URL}/img/404/4.png`}
          alt="error404"
        />
      </div>
      <img
        style={styles.imageContainerText}
        src={`${process.env.PUBLIC_URL}/img/404/sorry.png`}
        alt="error404"
        className="mt-4"
      />
      <a className="btn mr-bg-darkblue text-white mt-4" href="/dashboard">
        返回
      </a>
    </main>
  );
}

const styles = {
  container: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: '5vh auto',
    width: '300px',
    // height: '300px',
    overflowY: 'auto',
  },
  imageContainer: {
    width: '300px',
    margin: '0 auto',
  },
  imageContainerSub: {
    width: '100px',
    margin: '0 auto',
    height: '10vh',
  },
  imageContainerText: {
    width: '300px',
    margin: '0 auto',
    height: '5vh',
  },
};

export default App;
