import { CommonModule, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
 activatedRoute = inject(ActivatedRoute);
 profileForm !: any;
//  fb1 = inject(FormBuilder)

 constructor(private fb : FormBuilder){

 }



 ngOnInit() {
  this.activatedRoute.params.subscribe(params => {
      console.log("Params: ", params);
    });

    this.activatedRoute.queryParams.subscribe(queryParams => {
      console.log("Query Params: ", queryParams);
    });
   const url =  this.activatedRoute.snapshot
   console.log("Snapshot Params: ", url);

   this.profileForm = this.fb.group({
     name : ['',Validators.required],
     email : ['', [Validators.required,Validators.email,Validators.minLength(5)]],
     education : this.fb.array([
        this.fb.group({ class : ['']})
     ])
   })
  }



   get getEducationControl() : FormArray{
  return this.profileForm.get('education') as FormArray;
 }

addEducation(){
  const form = this.fb.group({
    class : ['']
  })
  this.getEducationControl.push(form);
}

removeControl(index:number){
  this.getEducationControl.removeAt(index);
}

submit(){
  console.log(this.profileForm.value)
}
}
