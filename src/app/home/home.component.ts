import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import UsersJson from './users.json';

interface USERS {
    id: Number;
    name: String;
    username: String;
    email: String;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Users: USERS[] = UsersJson;

  constructor() {
   console.log(this.Users);
   }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', "getdetails"];
  dataSource = new MatTableDataSource<USERS>(this.Users);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  getRecord(name)
  {
    alert(name);
  }

}
