import { NgModule } from '@angular/core';
import { MyToDoComponent } from './todo.component';
import { MyTask } from './task/task.component';
import { SharedModule } from '../../shared/shared.module';

var components = [
	MyToDoComponent,
	MyTask
]

@NgModule({
	declarations: [
		...components
	],
	imports: [
		SharedModule
	],
	exports: [
		...components
	]
})

export class ToDoModule {}


