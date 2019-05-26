import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

if (process.env.GOOGLE_ANALYTICS) {
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS);
}

export const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    if (process.env.GOOGLE_ANALYTICS) {
      ReactGA.set({
        page,
        ...options,
      });
      ReactGA.pageview(page);
    }
  };

  const HOC = props => {
    /* eslint-disable react/prop-types */
    const { location } = props;
    const { pathname } = location;
    useEffect(() => trackPage(pathname), [
      pathname,
    ]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};
