import { Gender,Location } from './../../interfaces/datasource';
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit {
  constructor(private formBuilder:FormBuilder) {}
  
  // relative properties
  GENDERS:string[]=Object.keys(Gender).filter(item=>isNaN(Number(item)))
  LOCATIONS:string[]=Object.keys(Location).filter(item=>isNaN(Number(item)))
  
  // form based on form builder
  dialogForm:FormGroup=this.formBuilder.group({
    username:[],
    gender:[],
    location:[],
    hobbies:[]
  })
  ngOnInit(): void {
    
  }
}
