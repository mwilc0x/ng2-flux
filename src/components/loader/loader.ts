/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'loader'
})
@View({
    template: `
      <div id="cupcake" class="box">
        <span class="letter">L</span>

        <div class="cupcakeCircle box">
          <div class="cupcakeInner box">
            <div class="cupcakeCore box"></div>
          </div>
        </div>

        <span class="letter box">A</span>
        <span class="letter box">D</span>
        <span class="letter box">I</span>
        <span class="letter box">N</span>
        <span class="letter box">G</span>
      </div>
    `
})
export class Loader { }
