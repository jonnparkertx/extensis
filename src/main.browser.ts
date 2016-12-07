import './polyfills.browser';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { SharedModule } from './shared/shared.module';
import { ToDoService } from './shared/todo.service';


@NgModule({
	bootstrap: [ AppComponent ],
	imports: [
		BrowserModule,
		AppModule,
		SharedModule.withProviders()
	],
})
class MainModule {
	constructor(public todoservice: ToDoService) {
		todoservice.syncWithServer();
	}
}

var platform = platformBrowserDynamic();

platform.bootstrapModule(MainModule);