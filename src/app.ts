/// <reference path="../typings/tsd.d.ts" />

import { Component, View } from 'angular2/angular2';
import {RouteConfig, RouterOutlet, Router } from 'angular2/router';
import * as Dispatcher from './utils/dispatcher';
import {Home} from './components/home/home';
import {News} from './components/news/news';
import {Header} from './components/header/header';

@Component({
  selector:'app'
})
@View({
  directives: [ Header, RouterOutlet ],
  template: `

      <div class="container home">

        <router-outlet></router-outlet>

      </div>
  `,
})
@RouteConfig([
  { path: '/', component: Home, as: 'home'  },
  { path: '/news', component: News, as: 'news' }
])
export class App {

  constructor() { }

}
