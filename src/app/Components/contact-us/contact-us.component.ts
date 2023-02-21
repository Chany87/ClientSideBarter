import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminMessage } from 'src/app/Models/AdminMassage';
import { AdminMassagesService } from 'src/app/Services/admin-massages.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  response!: {dbPath: ''};
 

  addMassage!: FormGroup
  
  constructor(private http : HttpClient, private userService: UserService,dialogRef: MatDialogRef<ContactUsComponent>, private adminMessagesService: AdminMassagesService) { }
  ngOnInit(): void {
    this.addMassage=new FormGroup({
      firstName:new FormControl(this.userService.thisUser.firstName ),
      lastName:new FormControl(this.userService.thisUser.lastName),
      phon:new FormControl(this.userService.thisUser.phoneNumber),
      massageContent:new FormControl( ),
      picture: new FormControl(),

  })
  }

  
  public dialogRef!: MatDialogRef<ContactUsComponent> 
  @Inject(MAT_DIALOG_DATA) public data:any

  newMassage!:AdminMessage;
  add(){
   
     this.newMassage = new AdminMessage(
       this.addMassage.value.firstName,
       this.userService.thisUser.id,
       this.addMassage.value.phon,
       this.addMassage.value.massageContent,
      this.response.dbPath
       );
       console.log(this.newMassage)
        this.adminMessagesService.AddAdminMessage(this.newMassage).subscribe((x) =>{
 
         console.log(x)
          this.dialogRef.close();
       }
         
       );
 }
 uploadFinished = (event:any) => { 
   console.log(event)
   this.response = event; 
 }

 public createImgPath = (serverPath: string) => { 
   //
   return `https://localhost:44321/${serverPath}`; 
 }

 
}


  



