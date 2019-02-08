import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  StringsToDate(date: string) {
      let Ddate:Date = moment(date, 'YYYY-MM-DD').toDate();
      return Ddate;
    }
}
