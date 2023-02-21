import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/Category/category.service';

@Component({
  selector: 'app-manager-categoty',
  templateUrl: './manager-categoty.component.html',
  styleUrls: ['./manager-categoty.component.scss']
})
export class ManagerCategotyComponent implements OnInit {
  categoryForm!: FormGroup;


  constructor(private Category : CategoryService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  
    this.categoryForm = this.formBuilder.group({
      categoryName: [null, [Validators.required, Validators.minLength(2)]],
      bigPicture: [''],
      smallPicture: ['']
    });
  }

  onSubmit() {
    this.Category.AddCategory(this.categoryForm.value).subscribe((x) => {
       alert(x)
    });
  }


}
