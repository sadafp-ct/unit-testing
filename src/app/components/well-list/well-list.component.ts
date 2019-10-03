import { Component, OnInit } from '@angular/core';

import { wells } from '../../data/wells';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.scss']
})
export class WellListComponent implements OnInit {

  wells = wells;

  constructor() { }

  ngOnInit() { }

  addNewWell(data) {
    wells.push({
      'name': data.name, 
      'sourceKey': data.sourceKey,
      'type': data.type
    });
  }

}
