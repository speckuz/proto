import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  constructor() {}
  // flags on boolean
  sectionHidden: boolean = true; // determine whether one section HTMLElment is hidden

  // relative properties
  nameForSearch: string = "Default UserName";
  defaultAddManyUserInfoNumber: number = 4;

  ngOnInit(): void {}
}
