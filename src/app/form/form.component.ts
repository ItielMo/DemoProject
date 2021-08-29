import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router} from '@angular/router';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  projectForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.projectForm= new FormGroup({
      projectId: new FormControl('123',[Validators.required]),
      projectName: new FormControl('test',[Validators.required])
      
   });
  }

}
