import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Components/category/category.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { ManagerCategotyComponent } from './Components/manager-categoty/manager-categoty.component';
import { ManagerEditCategoryComponent } from './Components/manager-edit-category/manager-edit-category.component';
import { ManagerMenuComponent } from './Components/manager-menu/manager-menu.component';
import { ManagerComponent } from './Components/manager/manager.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes =
  [{ path: "", component: HomePageComponent },
  { path: "Login", component: LogInComponent },
  { path: "SignUp", component: SignUpComponent },
  { path: "Category/:id", component: CategoryComponent },
  { path: "Contact", component: ContactUsComponent },
  { path: "Profile", component: ProfileComponent },
  {path:"ManagerMenu", component: ManagerMenuComponent},
    { path: "Manage", component: ManagerComponent }, 
       {path: "EditCategory", component: ManagerEditCategoryComponent},

    { path: "manageCategory", component: ManagerCategotyComponent }




  

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
