ng2-flux
========

## Usage:

```bash
npm start
tsc -w
babel-node server/server.js
```

open your browser to ```http://localhost:8080/```

## About

Grabs some live NY Times data from the server and displays it on the UI with Angular 2 components.

Uses the flux architecture to retrieve data via actions and pipe that data through the dispatcher to a store
which then notifies the Angular component that it has updated data. The parent Angular component then queries
the store for this new data, and the new data is then displayed on the UI.

## Contributing

PR's are welcome! :)

## Thanks

Thanks to the folks at [AngularClass](https://github.com/angular-class) for the [webpack-starter](https://github.com/angular-class/angular2-webpack-starter).
