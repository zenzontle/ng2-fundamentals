import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
    selector: 'simple-modal',
    templateUrl: 'app/common/simpleModal.component.html',
    styles: [`
        .modal-body { height: 250px; overflow-y: scroll; }
    `]
})
export class SimpleModalComponent implements OnInit {
    @Input() elementId: string;
    @Input() title: string;
    @Input() closeOnBodyClick: string;
    @ViewChild('modalcontainer') containerEl: ElementRef;
    
    constructor(@Inject(JQ_TOKEN) private $: any) { }

    ngOnInit() { }

    closeModal() {
        if (this.closeOnBodyClick.toLocaleLowerCase() === "true"){
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    }
}