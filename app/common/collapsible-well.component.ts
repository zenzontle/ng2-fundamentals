import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    templateUrl: 'app/common/collapsible-well.component.html'
})
export class CollapsibleWellComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    visible: boolean = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}