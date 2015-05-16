ng2-flux
========

## Usage:
```bash
npm install
tsc -w
babel-node server/server.js
```

## About
Grabs some live NY Times data from the server and displays it on the UI with Angular 2 components.

Uses the flux architecture to retrieve data via actions and pipe that data through the dispatcher to a store
which then notifies the Angular component that it has updated data. The parent Angular component then queries
the store for this new data, and the new data is then displayed on the UI.
