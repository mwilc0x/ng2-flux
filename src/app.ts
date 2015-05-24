/// <reference path="../typings/tsd.d.ts" />

import {bootstrap, Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {bind} from 'angular2/di';
import {Home} from './components/home/home';

@Component({
	selector:'app'
})
@View({
	directives: [ RouterOutlet, RouterLink, Home ],
	template: `

		<h1>NY Times Best Sellers Lists</h1>

		<main>
			<router-outlet></router-outlet>
		</main>

	`,
})
@RouteConfig([
  { path: '/', as: 'home', component: Home },
])
export class App { }
