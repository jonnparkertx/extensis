import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
	selector: 'my-selector',
	template: `
		<button *ngFor="let item of itemList; let i = index" (click)=setMyItem(item)>
				{{ item }}
		</button>
	`
})
export class MySelector {

	@Input() itemList: any;
	@Output() setItem = new EventEmitter();
	
	setMyItem(item) {
		this.setItem.emit(item);
	}

}