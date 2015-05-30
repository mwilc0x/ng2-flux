import * as flux from 'flux';
var FluxRecorder = require('./flux-recorder');

class Dispatcher extends flux.Dispatcher<any> {

  private _recorder: any;

  constructor() {
    super();

    this._recorder = new FluxRecorder(this);
  }

  startRecording() {
    this._recorder.startRecording();
  }

  stopRecording() {
    this._recorder.stopRecording();
  }

  listenToHotKeys() {
    this._recorder.listenToHotKeys();
  }

}

var dispatcher = new Dispatcher()
export = dispatcher;
