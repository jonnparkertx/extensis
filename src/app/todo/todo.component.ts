import { Component } from '@angular/core';
import { ToDoService } from '../../shared/todo.service';
import { AppState } from '../../shared/store.service';
import { Task, TaskList } from '../../shared/models'

@Component({
	selector: 'my-todo',
	template: `
		<input type="text" placeholder="Input a task"
			(input)="inputDetector($event.target.value)"
		>
		<button (click)="createTodo(task)"> Create </button>
		<br/>
		Current Tasks:
		<ul>
			<li *ngFor="let item of taskList; let i = index">
				<my-task (completed)="completeTask($event)" [task]="item"></my-task>
			</li>
		</ul>
	`
})
export class MyToDoComponent {

	task: string;
	taskList: Task[] = [];

	constructor ( public toDoService : ToDoService) {
		this.toDoService.getChanges()
		.subscribe(data => {
			this.taskList = data;
		});
	}
	
	inputDetector( value: string ) {
		this.task = value;
	}

	clearInputField(){
		this.task='';
	}

	createTodo( task: string ) {
		this.toDoService.createTodo(task);
		this.clearInputField();
	}

	completeTask( task: Task ) {
		this.toDoService.completeTask( task );
	}
}