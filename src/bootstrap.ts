/// <reference path="../typings/tsd.d.ts" />

// Angular 2
import {bootstrap} from 'angular2/angular2';

// Top level component to bootstrap
import {App} from 'app';

// include any injectables
import {routerInjectables} from 'angular2/router';

import {Actions as BookActions} from './actions/book-actions';
import {Actions as NewsActions} from './actions/news-actions';

// bootstrap the Angular app with bindings
bootstrap(App, [
  // define any componentInjectableBindings
  routerInjectables,
  BookActions,
  NewsActions
]).then(
  success => console.log(success),
  error => console.log(error)
)
