import {Meteor} from 'meteor/meteor';
import React from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

import Signup from './../ui/Signup';
import Link from './../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

import history from './history';

// const unauthenticatedPages = ['/', '/signup'];
// const authenticatedPages = ['/link'];

// const onEnterPublicPage = () => {
//     if(Meteor.userId()) {
//         browserHistory.replace('/links');
//     }
// };

// const onEnterPrivatePage = () => {
//     if(!Meteor.userId()) {
//         browserHistory.replace('/');
//     }
// };

// function usePageViews() {
//   let location = useLocation();
//   const isUnauthenticatedPage = unauthenticatedPages.includes(location.pathname);
//   const isAuthenticatedPage = authenticatedPages.includes(location.pathname);

//   React.useEffect(() => {
//     console.log(location.pathname);
//     if(isUnauthenticatedPage && !!Meteor.userId()) {
//         //browserHistory.replace('/links');
//         this.props.history.push('/');
//         console.log('1');
//     } else if(isAuthenticatedPage && !Meteor.userId()) {
//         //browserHistory.replace('/');
//         this.props.history.push('/');
//     }
//    }, [location]);
// }

// export const onAuthChange = (isAuthenticated) => {
//     //const pathname = browserHistory.getCurrentLocation().pathname;
    
//     const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
//     const isAuthenticatedPage = authenticatedPages.includes(pathname);

//     if(isUnauthenticatedPage && isAuthenticated) {
//         browserHistory.replace('/links');
//     } else if(isAuthenticatedPage && !isAuthenticated) {
//         browserHistory.replace('/');
//     }
// };

export const routes = (
  <BrowserRouter history={history}>
    <RoutesFunction/>
  </BrowserRouter>
);

function RoutesFunction() {
  //usePageViews();
  return (
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/link" component={Link}/>
      <Route component={NotFound}/>
    </Switch>
  );
}