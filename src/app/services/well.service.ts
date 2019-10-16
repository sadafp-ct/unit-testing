import { Injectable } from '@angular/core';

import { wells } from '../data/wells';

@Injectable({
  providedIn: 'root'
})
export class WellService {

  private data = wells;

  getWellData = () => {
    return this.data;
  };
}
