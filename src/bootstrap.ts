/// <reference path="../typings/tsd.d.ts" />

// Angular 2
import {bootstrap} from 'angular2/angular2';

// Top level component to bootstrap
import {App} from 'app';

// include any injectables
import {routerInjectables} from 'angular2/router';

// bootstrap the Angular app with bindings
bootstrap(App, [
  // define any componentInjectableBindings
  routerInjectables
]).then(
  success => console.log(success),
  error => console.log(error)
)
