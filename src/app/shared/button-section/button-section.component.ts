import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-button-section",
  templateUrl: "./button-section.component.html",
  styleUrls: ["./button-section.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
