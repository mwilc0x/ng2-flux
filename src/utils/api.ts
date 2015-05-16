declare var fetch, Zone;

export class API {

	getBooks() {		
	  return Zone.bindPromiseFn(fetch)('http://localhost:3001/books');
	}
	
}
