import { Component, OnInit, Input , ViewEncapsulation } from "@angular/core";
import { Revision, User } from "./../../core/models";
import { ExcelService } from "./../../services/excel.service";
import { UsersService } from "../users.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-usertable",
  templateUrl: "./usertable.component.html",
  styleUrls: ["./usertable.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class UserTableComponent implements OnInit {
  @Input() users: User[];

  constructor(private excelService: ExcelService, private userv: UsersService, private router: Router) {}

  ngOnInit() {}

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.users, "usuarios");
  }

  getUser(id:number){
    this.router.navigate(["/usuario", id]);
  }
  // deleteUser(userId: number): void{
  //   this.userv.delete(userId);
  //   this.router.navigate(["/buscarusuario"]);
  // }
}
