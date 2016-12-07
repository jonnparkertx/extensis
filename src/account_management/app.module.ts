import { NgModule } from '@angular/core';
import { ToDoModule } from './todo/todo.module';
import { DirectoryModule } from './directory/directory.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [ 
		AppComponent
	],
	imports: [
		ToDoModule,
		DirectoryModule
	],
	exports: [
		AppComponent,
		ToDoModule,
		DirectoryModule
	]
})
export class AppModule {
	
}