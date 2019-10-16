import { Injectable } from '@angular/core';

import { wells } from '../data/wells';

@Injectable({
  providedIn: 'root'
})
export class WellService {

  xwells = [
    {
        "type": "Danger",
        "name": "Well One",
        "sourceKey": "423ghbd89"
    },
    {
        "type": "Danger",
        "name": "Well Two",
        "sourceKey": "67gj54657"
    },
    {
        "type": "Info",
        "name": "Well Three",
        "sourceKey": "423gh66bd89"
    },
    {
        "type": "Danger",
        "name": "Well Four",
        "sourceKey": "cvbn34546554"
    },
    {
        "type": "Warning",
        "name": "Well Five",
        "sourceKey": "6778gj54657"
    },
    {
        "type": "Info",
        "name": "Well Six",
        "sourceKey": "cvbn34546554"
    }
  ];

  getWellData = () => {
    return wells;
  };
}
