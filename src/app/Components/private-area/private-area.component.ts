import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Category } from 'src/app/Models/Category';
import { City } from 'src/app/Models/City';
import { Message } from 'src/app/Models/Message';
import { user } from 'src/app/Models/User';
import { UserCreateRequest } from 'src/app/Models/UserCreateRequest';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { CityService } from 'src/app/Services/city.service';
import { MessagesService } from 'src/app/Services/messages.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-private-area',
  templateUrl: './private-area.component.html',
  styleUrls: ['./private-area.component.scss']
})
export class PrivateAreaComponent implements OnInit {

  citiesList!:City[];
  userInformation!:FormGroup;
  loginDetails!:FormGroup;
  constructor(private userService:UserService,private cityService:CityService,private categoryService:CategoryService,
    private message: MessagesService) { }
thisUser:user| null=null;
cityUser!:City;
messageList!:Message[]
thisUserCreate!:UserCreateRequest;
categoryList!:Category[];
selectedCategories:number[]=[];
  ngOnInit(): void {
    this.thisUser=this.userService.thisUser
  
//שם העיר
if(this.thisUser.cityId!=null){
  this.cityService.getCityById(this.thisUser.cityId).subscribe(
      (x)=>{
        this.cityUser=x;
        console.log(x);
      }
    )
}
    
      //פרטי במשתמש
      console.log(this.thisUser)
    this.userInformation=new FormGroup({
      firstName:new FormControl(this.userService.thisUser?.firstName),
      lastName:new FormControl(this.thisUser?.lastName ),
      phon:new FormControl(this.thisUser?.phoneNumber ),
      city:new FormControl(),//this.cityUser.cityName
      allCategories:new FormControl(this.thisUser.categoryUsers?.map(item=>item.Id))

    })
 //פרטי היתחברות
    console.log(this.thisUser)
    this.loginDetails=new FormGroup({
      email:new FormControl(this.thisUser?.firstName),
      password:new FormControl(this.thisUser.password),
    })

    
    console.log( this.thisUser?.category_User);
    this.cityService.getAllCities().subscribe((x) =>{
      this.citiesList = x;
    
      }
    )
    this.categoryService.GetAllCategories().subscribe((x) =>{
      this.categoryList = x;
      // console.log(this.categoryList)
      }
    )

    this.message.GetMessageById(this.thisUser.id).subscribe((x) => {
      this.messageList = x;
    })
   

  }
  userProfile!:FormGroup
  editing(){

  }
  selectionChange(event:MatSelectChange){
    this.selectedCategories=event.value;
    
  }
  aaa(){
   // this.userInformation.setControl()
  }
}


