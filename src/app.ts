/// <reference path="../typings/tsd.d.ts" />

import { Component, View } from 'angular2/angular2';
import {RouteConfig, RouterOutlet, Router } from 'angular2/router';
import {BrowserLocation} from 'angular2/src/router/browser_location';
import * as Dispatcher from './utils/dispatcher';
import {Home} from './components/home/home';
import {News} from './components/news/news';

@Component({
  selector:'app'
})
@View({
  directives: [ Home, RouterOutlet ],
  template: `
      <div class="container home">

        <home></home>

      </div>
  `,
})
@RouteConfig([
  { path: '/', component: Home, as: 'home'  },
  { path: '/news', component: News, as: 'news' }
])
export class App {

	constructor(router: Router, browserLocation: BrowserLocation) {
    //let uri = browserLocation.path();
    //router.navigate(uri);
	}

}
