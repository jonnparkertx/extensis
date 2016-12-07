import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FetchService {
	getRequest() : Observable<string[]> {
		return Observable.of([
			'Task Juan',
			'Task Dos',
			'Tres Leches'
			]).delay(300);
	}
}