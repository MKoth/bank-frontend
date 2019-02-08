import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';
import * as html2canvas from 'html2canvas';
import DomToImage from 'dom-to-image';
// import { PanelModule } from 'primeng/panel';
// import { ButtonModule } from "primeng/button";


@Component({
  selector: 'app-entitydetails',
  templateUrl: './entitydetails.component.html',
  styleUrls: ['./entitydetails.component.scss']
})
export class EntitydetailsComponent implements OnInit {
  @Output() icon2Clicked = new EventEmitter;
  @Input() id: any;
  @Input() car: any;
  @Input() title: any;
  @Input() subtitle: any;
  @Input() color: any;
  @Input() status: any;
  @Input() icon: any;
  @Input() icon2: any = '';
  @Input() extended:boolean = false;
  @Input() extendable:boolean = false;
  @Input() lat:any=-46;
  @Input() lon:any=-23;
  @Input() mapHeight:number = 800;
  @Output() extendToggled = new EventEmitter<boolean>();
  @Input() isClient:boolean = false;

  @ViewChild("map") map;

  data: any;
  options: any;
  page: HTMLElement;

  constructor() {
  }

  ngOnInit() {
  }

  icon2Click(){
    this.icon2Clicked.emit();
  }

  toggleExtended() {
    this.extended = !this.extended;
    this.extendToggled.emit(this.extended);
  }

  getPropertyData(e){
  }


    /**
   * TODO: estas funcoes deveriam ser servicos
   */
  convertPageToPDF(){
    /*this.page = <HTMLElement>document.getElementsByClassName('layout-wrapper')[0];
    html2canvas(this.page).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.addPage();
      pdf.setPage(2);
      pdf.addImage(contentDataURL, 'PNG', 0, -pageHeight, imgWidth, imgHeight);
      pdf.save('imovel.pdf'); // Generated PDF
    });*/
    this.page = <HTMLElement>document.getElementsByClassName('layout-wrapper')[0];
    DomToImage.toPng(this.page)
    .then(function (dataUrl) {
      var img = new Image();
      img.onload = ()=>{
        var imgWidth = 208;
        var pageHeight = 295;
        var imgHeight = img.naturalHeight * imgWidth / img.naturalWidth;
        var heightLeft = imgHeight;
        console.log(img.naturalHeight, img.naturalWidth);
        console.log(img.width, img.height);


        let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
        var position = 0;
        pdf.addImage(dataUrl, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.addPage();
        pdf.setPage(2);
        pdf.addImage(dataUrl, 'PNG', 0, -pageHeight, imgWidth, imgHeight);
        pdf.save('imovel.pdf'); // Generated PDF
      }
      img.src = dataUrl;
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }
  convertPageToImage(){
    this.page = <HTMLElement>document.getElementsByClassName('layout-wrapper')[0];
    /*html2canvas(this.page,{useCORS:false}).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      console.log(contentDataURL);
      var a = document.createElement('a');
      // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
      a.href = contentDataURL;
      a.download = 'imovel.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });*/
    DomToImage.toPng(this.page)
    .then(function (dataUrl) {
        /*var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);*/
        var a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'imovel.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }


}
