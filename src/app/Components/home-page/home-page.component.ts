import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Models/Category';
import { user } from 'src/app/Models/User';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { UserService } from 'src/app/Services/user.service';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  category!: Category[];
  showManager: boolean = false

  constructor(private categoryService: CategoryService, private routes: ActivatedRoute, private myRouter: Router,
    public Dialog: MatDialog, MyRouter: Router, private userService: UserService) { }
    CurrentUser : user = this.userService.thisUser
    display : boolean = this.CurrentUser!=undefined

  openDialog(): void {
    const dialogRef = this.Dialog.open(ContactUsComponent, {
      width: '60%',
      height: '600px',
      data: {
        id: 2
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
  ngOnInit(): void {
    if (this.userService.SiteManager == true)
      this.showManager = true
    else
      this.showManager == false
    // console.log(this.userService.SiteManager)
    this.categoryService.GetAllCategories().subscribe((x) => {
      this.categoryService.categories = x;
      //console.log(this.categoryService.categories)
      this.category = this.categoryService.categories;
      console.log(this.category);
    })
  }

  showCategory(id: Number) {
    debugger
    console.log(id)
    this.myRouter.navigate(["Category", id]);

  }
}








