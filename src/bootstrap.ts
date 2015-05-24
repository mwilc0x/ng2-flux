/// <reference path="../typings/tsd.d.ts" />

// Angular 2
import {bootstrap} from 'angular2/angular2';

// Top level component to bootstrap
import {App} from 'app';

// include any injectables
import {routerInjectables} from 'angular2/router';
import {shadowDomInjectables} from 'common/checkIfShadowDom';

// bootstrap the Angular app with bindings
bootstrap(App, [
  // define any componentInjectableBindings
  routerInjectables
]);
