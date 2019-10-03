import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { WellService } from '../../services/well.service';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss']
})
export class WellComponent implements OnInit {

  wells: any[];
  activatedRoute: ActivatedRoute;
  sourceKey: String;

  constructor(
   activatedRoute: ActivatedRoute,
    private service: WellService
  ) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit () {
    this.activatedRoute.params.subscribe(
      (params) => {
      this.sourceKey = params['sourceKey']
      console.log('sourceKey: ', typeof this.sourceKey);
      
      this.wells = this.service.getWellData(this.sourceKey);
    });
    
  }
}
