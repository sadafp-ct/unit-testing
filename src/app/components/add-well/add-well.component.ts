import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-well',
  templateUrl: './add-well.component.html',
  styleUrls: ['./add-well.component.scss']
})
export class AddWellComponent implements OnInit {

  @ViewChild('name', {static: false}) name: ElementRef;
  @ViewChild('sourceKey', {static: false}) sourceKey: ElementRef;
  @ViewChild('type', {static: false}) type: ElementRef;

  @Output() wellData = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  addWell() {
    let name = this.name.nativeElement.value,
    sourceKey = this.sourceKey.nativeElement.value,
    type = this.type.nativeElement.value;

    this.wellData.emit({name, sourceKey, type});
  }

}
