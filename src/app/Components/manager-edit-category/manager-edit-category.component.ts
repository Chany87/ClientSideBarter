import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/Category/category.service';

@Component({
  selector: 'app-manager-edit-category',
  templateUrl: './manager-edit-category.component.html',
  styleUrls: ['./manager-edit-category.component.scss']
})
export class ManagerEditCategoryComponent implements OnInit {

  constructor(private Category: CategoryService ) { }
  categories! : Category[]
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['categoryName', 'bigPicture', 'smallPicture', 'actions'];


  ngOnInit(): void {
    this.Category.GetAllCategories().subscribe((x) => {
      this.categories = x;
      this.dataSource = new MatTableDataSource(this.categories);
    })
  }
  editCategory(){

  }

}
