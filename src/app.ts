/// <reference path="../typings/tsd.d.ts" />

import {bootstrap, Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {bind} from 'angular2/di';
import * as Dispatcher from './utils/dispatcher';
import {Header} from './components/header/header';
import {Home} from './components/home/home';
import {News} from './components/news/news';

@Component({
  selector:'app'
})
@View({
  directives: [ RouterOutlet, RouterLink, Home, Header ],
  template: `
    <header></header>

    <div class="container home">

      <main>
        <router-outlet></router-outlet>
      </main>

    </div>
  `,
})
@RouteConfig([
  { path: '/', as: 'home', component: Home },
  { path: '/news', as: 'news', component: News }
])
export class App {
	constructor() {
		Dispatcher.startRecording();
		Dispatcher.listenToHotKeys();
	}
}
