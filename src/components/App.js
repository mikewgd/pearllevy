import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { Header } from './Header';
import { Footer } from './Footer';
import { Main, Wrapper, GlobalStyle, H2, Paragraph } from './styles';
import { withTracker } from './hoc/withTracker';

const NotFoundPage = () => (
  <Fragment>
    <H2>404 Not Found</H2>
    <Paragraph textAlign="center">
      Sorry, we can’t find the page you were looking for.
    </Paragraph>
  </Fragment>
);

const App = () => (
  <BrowserRouter basename="/">
    <GlobalStyle />
    <Wrapper>
      <Header />
      <Main>
        <Switch>
          <Route path="/" component={withTracker(HomePage)} exact />
          <Route path="/services" component={withTracker(ServicesPage)} exact />
          <Route path="/contact" component={withTracker(ContactPage)} exact />
          <Route component={withTracker(NotFoundPage)} />
        </Switch>
      </Main>
      <Footer />
    </Wrapper>
  </BrowserRouter>
);

export default App;
