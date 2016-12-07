import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoService } from './todo.service';
import { FetchService } from './fetch.service';
import { Store } from './store.service';

var providers = [
	ToDoService,
	FetchService,
	Store
];

var modules = [
	CommonModule
];

var components = [];

@NgModule({
	declarations: [],
	imports: [
	  ...modules
	],
	exports: [
		...modules
	]
})

export class SharedModule {
	static withProviders (): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers
		}
	}
}