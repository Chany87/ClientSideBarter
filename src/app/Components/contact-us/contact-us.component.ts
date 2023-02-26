import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Message } from 'src/app/Models/Message';
import { MessagesService } from 'src/app/Services/messages.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  response!: {dbPath: ''};
 

  addMassage!: FormGroup
  
  constructor(private http : HttpClient, private userService: UserService,@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<ContactUsComponent>, private MessagesService: MessagesService) { }
  ngOnInit(): void {
    this.addMassage=new FormGroup({
      firstName:new FormControl(this.userService.thisUser.firstName ),
      lastName:new FormControl(this.userService.thisUser.lastName),
      phon:new FormControl(this.userService.thisUser.phoneNumber),
      massageContent:new FormControl( ),
      picture: new FormControl(),

  })
  }



  newMassage!:Message;
  add(){
   
     this.newMassage = new Message(
       this.addMassage.value.firstName,
       1027,
       this.userService.thisUser.id,
       this.addMassage.value.phon,
       this.addMassage.value.massageContent,
      this.response.dbPath,
      new Date()
       );
       console.log(this.newMassage)
        this.MessagesService.AddMessage(this.newMassage).subscribe((x) =>{
 
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


  



