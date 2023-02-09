import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { user } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  categoriesInformation!:Category[];
  UserInformation! : user[];
  users!: user[];
  dataSource!: MatTableDataSource<user>;
  displayedColumns: string[] = ['name', 'email', 'status', 'actions'];

  constructor(public Category : CategoryService, private userService : UserService ) { }

  ngOnInit(): void {
    this.userService.GetAllUsers().subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource(users);
      
    });
     this.userService.GetAllUsers().subscribe((x) =>{
      this.userService.users = x;
       console.log(x);
       this.UserInformation = this.userService.users
     })
    }
    blockUser(user: user) {
  user.allowingAccess=0;
  this.userService.UpdateUser(user.id,user).subscribe((x)=>{
    alert(x)
  });
  
    }
    applyFilter(filterValue: any) {
      this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
    }
   editUser(user: user) {

  }
 
  
}


