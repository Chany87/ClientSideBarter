import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/Category/category.service';

@Component({
  selector: 'app-manager-edit-category',
  templateUrl: './manager-edit-category.component.html',
  styleUrls: ['./manager-edit-category.component.scss']
})
export class ManagerEditCategoryComponent implements OnInit {

  constructor(private Category: CategoryService,private formBuilder: FormBuilder ) {
    this.updateCategoryForm = this.formBuilder.group({
      
      categoryName: [''],
      bigPicture: [''],
      smallPicture: ['']
    });
   } 
  
   categories! : Category[]
  // dataSource!: MatTableDataSource<any>;
  // displayedColumns: string[] = ['categoryName', 'bigPicture', 'smallPicture', 'actions'];
   updateCategoryForm!: FormGroup;
  populateForm(category: { categoryName: any; bigPicture: any; smallPicture: any; }) {
    this.updateCategoryForm.patchValue({
      categoryName: category.categoryName,
      bigPicture: category.bigPicture,
      smallPicture: category.smallPicture
    });
  }

  ngOnInit(): void {
    this.Category.GetAllCategories().subscribe((x) => {
      this.categories = x;
      // this.dataSource = new MatTableDataSource(this.categories);
    })
  }



  updateCategory() {
    const updatedCategory = {
      
      categoryName: this.updateCategoryForm.value.categoryName,
      bigPicture: this.updateCategoryForm.value.bigPicture,
      smallPicture: this.updateCategoryForm.value.smallPicture
    };
    
  //   this.Category.updateCategory().subscribe(() => {
  //     this.Category.updateCategory(updatedCategory, this.categories.id)
  //     this.getCategories();
  //   });
    }
  
}

