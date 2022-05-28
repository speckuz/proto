import { Gender, IUserData, Location } from "./../../interfaces/datasource";
import { ITableRowInfo } from "./../../interfaces/tableInfo";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  constructor() {}

  // relative properties
  keysOfIUserData: string[] = ["username","gender","location","hobbies"];
  tableDataSource: ITableRowInfo[] = [];
  
  ngOnInit(): void {}
}
