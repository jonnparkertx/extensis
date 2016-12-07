import { Injectable } from '@angular/core';
import { FetchService } from './fetch.service';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Task, TaskList } from './models';
import { Store } from './store.service';

@Injectable()
export class ToDoService {
	
	constructor( public fetchService: FetchService, public store: Store) {
		console.log ('Creating todo service');
	}

	syncWithServer () {
		this.fetchService.getRequest()
		.subscribe(data => {
			var tasks = data.map((task)=> {
				return new Task(Math.random(), task);
			});
			this.store.update('todos', tasks);
		});
	}

	getChanges() {
		return this.store.changes
			.pluck<Task[]>('todos');
	}

	getCurrentTasks(){
		return this.store.get('todos');
	}

	createTodo(task: string) {
		console.log("Creating a ToDo: ", task);
		var newTask = new Task(Math.random(), task);
		var currentTasks = this.store.get('todos');
		var newTasks = [...currentTasks, newTask];
		this.store.update('todos', newTasks);
		
	}

	completeTask( target: Task) {
		var currentTasks = this.store.get('todos');
		var taskList = currentTasks.filter( task => task.id !== target.id);

		this.store.update('todos', taskList);
	}
}