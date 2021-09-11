import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import UsersJson from './users.json';

interface USERS {
            id: number;
            referenceId: number;
            taskType: string;
            createdBy: string;
            scheduleDate: string;
            submissionDate: string;
            status: string;
            clientName: string;
            manufacturer: string;
            countryCode: string;
            serviceId: number;
            isActive: string;
            jobName: string;
            executedBy: string;
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
  displayedColumns: string[] = ['actions', 'id','referenceId','submissionDate','status','clientName','countryCode','serviceId','jobName','executedBy'];
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
