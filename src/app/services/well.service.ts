import { Injectable } from '@angular/core';

import { wells } from '../data/wells';

@Injectable({
  providedIn: 'root'
})
export class WellService {

  wells = wells;

  getWellData = (sourceKey) => {
    let filteredWells = [];
    this.wells.filter((well) => {
      if(well.sourceKey === sourceKey) {
        filteredWells.push(well);
      }
    });

    return filteredWells;
  };
}
