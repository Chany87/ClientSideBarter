import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { UserService } from './Services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSortModule } from '@angular/material/sort';
import { CategoryService } from './Services/Category/category.service';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { LogInComponent } from './Components/log-in/log-in.component';
import { OpinionService } from './Services/Opinion/opinion.service';
import { MassegeService } from './Services/Massege/massege.service';
import { StarService } from './Services/star.service';
import { PublicationService } from './Services/Publication/publication.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import { CategoryComponent } from './Components/category/category.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { AddPublicationComponent } from './Components/add-publication/add-publication.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { MatInputModule } from '@angular/material/input';
import { ManagerComponent } from './Components/manager/manager.component';
import {MatTableModule} from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import { ProfileComponent } from './Components/profile/profile.component';
import { ManagerCategotyComponent } from './Components/manager-categoty/manager-categoty.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableDataSource } from '@angular/material/table';
import { ManagerEditCategoryComponent } from './Components/manager-edit-category/manager-edit-category.component';
import { ManagerMenuComponent } from './Components/manager-menu/manager-menu.component';
import { UploadComponent } from './Components/upload/upload.component';
import { ManagerMasageComponent } from './Components/manager-masage/manager-masage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LogInComponent,
    CategoryComponent,
    SignUpComponent,
    AddPublicationComponent,
    ContactUsComponent,
    ManagerComponent,
    ProfileComponent,
    ManagerCategotyComponent,
    ManagerEditCategoryComponent,
    ManagerMenuComponent,
    UploadComponent,
    ManagerMasageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSortModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSelectModule,
    RouterModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatOptionModule,
    MatTabsModule,
    
    
      ],
  providers: [
    UserService,
    CategoryService,
    UserService,
    OpinionService,
    MassegeService,
    StarService,
    PublicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


