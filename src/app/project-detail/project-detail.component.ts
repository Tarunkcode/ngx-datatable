import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ColumnMode } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  rows = [];
  loadingIndicator = true;
  reorderable = true;

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    fullname: new FormControl(''),
    department: new FormControl(''),
    designation: new FormControl(''),
    password: new FormControl(''),
    salary: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  columns = [ { name: 'Code', sortable: false }, { name: 'FullName', sortable: false },{ name: 'Department' },{ name: 'Designation' },{ name: 'Salary' }];

  ColumnMode = ColumnMode;
  constructor(private formBuilder: FormBuilder) { }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        code: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(5)
          ]
        ],
        department: ['', Validators.required],
        designation: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20)
          ]
        ],
        salary: ['',[
          Validators.required,
          Validators.min(1),          
        ]],
        acceptTerms: [false, Validators.requiredTrue]
      });
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {      
      return;

    }
   //this.SaveData(this.form.value)
   this.onReset();
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  
  Onedit(value:any) :void{
    debugger;
    this.form.get('id')?.setValue(value.id)
    this.form.get('code')?.setValue(value.code.trim())
    this.form.get('fullname')?.setValue(value.fullName.trim())
    this.form.get('department')?.setValue(value.department.trim())
    this.form.get('designation')?.setValue(value.designation.trim())
    this.form.get('salary')?.setValue(value.salary)
    this.form.get('acceptTerms')?.setValue(false)
    
    
  }
}
