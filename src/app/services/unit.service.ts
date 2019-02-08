import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor() { }

  unitsShow(revisions:any[]):any[]{
    var unitsvector:any[]=[];
    for (var i = 0; i <revisions.length; i++){
      var tempunits=[];
      for (var j = 0; j <revisions[i].units.length; j++){
        tempunits.push(revisions[i].units[j].unitLabel);
      }
      unitsvector.push(tempunits);
    }
    return unitsvector
  }
  getUnitsId(units:any[]):any[]{
    var unitsid:any[]=[];
    for (var i = 0; i <units.length; i++){
      unitsid.push(units[i].unitId);
    }
    return unitsid
  }
}
