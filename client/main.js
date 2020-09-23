import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session';
import ReactDOM from 'react-dom';

import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration';

import './main.html';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  console.log({isAuthenticated});
});

Meteor.startup(() => {
  Session.set('showVisible', true);
  ReactDOM.render(routes, document.getElementById('app'));
});