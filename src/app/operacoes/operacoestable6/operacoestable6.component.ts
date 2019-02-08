import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operacoestable6',
  templateUrl: './operacoestable6.component.html',
  styleUrls: ['./operacoestable6.component.scss']
})
export class OperacoesTable6Component implements OnInit {
  constructor() {}
  tablecontent=[
    {class:"class1", cols:[
      "text1",
      "text2",
      {content:"text3", class:"class1"},
      "text4"
    ]},
    {class:"class2", cols:[
      "1text1",
      "2text2",
      "3text3",
      "4text4"
    ]},
    {class:"class3", cols:[
      "qtext1",
      "wtext2",
      "etext3",
      "rtext4"
    ]}
  ];
  ngOnInit() {
    console.log(this.tablecontent);
    // this.propserv.getById(342);
  }
}