import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './models';

export interface AppState {
	todos: Task[]
};

var _defaultValue: AppState = {
	todos: []
};

var _store = new BehaviorSubject(_defaultValue);

@Injectable()
export class Store {
	changes = _store.asObservable().do(value => console.log('new state with value', value));

	setCurrentState ( state: any ) {
		_store.next(state);
	}

	getCurrentState () {
		return _store.value;
	}

	get ( property ) {
		return _store.value[property];
	}

	update ( property, value ) {
		var currentState = _store.value;
		currentState[property] = value;

		_store.next(currentState);
	}
}