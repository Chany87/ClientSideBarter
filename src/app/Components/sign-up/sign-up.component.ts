import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/Models/User';
import { City } from 'src/app/Models/City';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { CityService } from 'src/app/Services/city.service';
import { Category } from 'src/app/Models/Category';
import { UserService } from 'src/app/Services/user.service';
import { UserCreateRequest } from 'src/app/Models/UserCreateRequest';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {



  // categoriesList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  // selectedCategoryIds!: number[];



  constructor(private myRouting: Router, private category: CategoryService, private City: CityService, private UserService: UserService) { }
  addUserForm!: FormGroup
  // newUser!: user
  citiesList!: City[];
  categoryList!: Category[];
  selectedCategories:number[]=[];
    categories = new FormControl('');

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      phoneNumber: new FormControl(),
      allCategory: new FormControl(),
      city: new FormControl(),

    })

    this.City.getAllCities().subscribe((x) => {
      this.citiesList = x;
      console.log(this.citiesList)
    }
    )

    this.category.GetAllCategories().subscribe((x) => {
      this.categoryList = x;
      console.log(this.categoryList)
    }
    )

  }

  newUser!: UserCreateRequest


  selectionChange(event: MatSelectChange) {
    this.selectedCategories = event.value;

  }
  addUser() {

    this.newUser = new UserCreateRequest(
      this.addUserForm.value.email,
      this.addUserForm.value.password,
      this.addUserForm.value.firstName,
      this.addUserForm.value.lastName,
      this.addUserForm.value.phoneNumber,
      this.addUserForm.value.city,
      this.selectedCategories,
    );
    console.log(this.newUser);
    this.UserService.AddUser(this.newUser).subscribe((x) => {
      console.log(x);
      this.UserService.thisUser=x;
      


    }
    )



  }
  // addUser(user: user) {
  //   // filter the selected categories
  //   user.userCategories = this.selectedCategoryIds.map(categoryId => {
  //       return { userId: user.id, categoryId: categoryId }
  //   });
  //   // save the user and the selected categories
  //   this.UserService.saveUser(user).subscribe(() => {
  //       // handle the save success
  //       //update the category-user table
  //       this.UserService.updateCategoryUserTable(user.userCategories).subscribe(()=>{
  //           //handle the update success
  //       }, error => {
  //           // handle the update error
  //       });
  //   }, error => {
  //       // handle the save error
  //   });
  // }



  connect() {

    this.myRouting.navigate([`/login/`]);

  }



}





// יש צורך להביא בTS מבסרוויס קטגיוריות את כל הקטגוריות ולשמור במערך ואחכ כשעושים SAVE 
// לכל ההרשמה הוא עושה פוש עם אובייקט 















