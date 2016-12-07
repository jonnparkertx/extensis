import { NgModule } from '@angular/core';
import { MyDirectoryComponent } from './directory.component';
import { DirectoryService } from './directory.service';
import { CommonModule } from '@angular/common';
import { MySelector } from './selector/selector.component';


var components = [
	MyDirectoryComponent,
	MySelector
]

@NgModule({
	declarations: [
		...components
	],
	imports: [
		CommonModule
	],
	providers: [
		DirectoryService
	],
	exports: [
		...components
	]
})

export class DirectoryModule {}



