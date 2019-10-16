import { Component, OnInit } from '@angular/core';

import { WellService } from '../../services/well.service';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.scss']
})
export class WellListComponent implements OnInit {

  wells: Array<any>;

  constructor(private wellService: WellService) { }

  ngOnInit() { 
    this.wells = this.wellService.getWellData();
  }

}
