import * as flux from 'flux';

class Dispatcher extends flux.Dispatcher<any> {

  constructor() {
    super();
  }

}

var dispatcher = new Dispatcher()
export = dispatcher;
