import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./components/main/main.component";
import MainPage from "./containers/mainPage/mainPage.container"
import AboutUs from "./containers/aboutUs/aboutUs.container"
import CaseStudy from "./containers/caseStudy/caseStudy.container"
import Gallery from "./containers/gallery/gallery.container"
import MediaRelation from './containers/mediaRelation/mediaRelation.container'
import ContactUsContainer from "./containers/contactUs/contactUs.container";

import { LoaderAlt } from "./components/shared";

class App extends Component {
  componentDidMount() {
    Promise.all([
      import("bootstrap/dist/css/bootstrap.min.css"),
      import("jquery/dist/jquery.min"),
      import("bootstrap/dist/js/bootstrap.min"),
      import("date-input-polyfill"),
      import("@fortawesome/fontawesome-free/css/all.css"),
    ]);
  }

  render() {
    const NoMatch = () => <Redirect to="/nomatch" />;
    console.log(this.props.history)
    return (
      <React.Suspense fallback={<LoaderAlt />}>
        <Main>
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
        </Main>
      </React.Suspense>
    );
  }
}

function Page404(props) {
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
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "5vh auto",
    width: "300px",
    // height: '300px',
    overflowY: "auto"
  },
  imageContainer: {
    width: "300px",
    margin: "0 auto"
  },
  imageContainerSub: {
    width: "100px",
    margin: "0 auto",
    height: "10vh"
  },
  imageContainerText: {
    width: "300px",
    margin: "0 auto",
    height: "5vh"
  }
};

export default App;
