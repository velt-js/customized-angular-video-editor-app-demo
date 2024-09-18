import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
	selector: 'app-wireframe',
	standalone: true,
	imports: [],
	templateUrl: './wireframe.component.html',
	styleUrl: './wireframe.component.scss',
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WireframeComponent {
	toggle(){
		console.log("sad");
		
	}
}
