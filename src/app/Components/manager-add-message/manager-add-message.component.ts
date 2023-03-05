import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Message } from 'src/app/Models/Message';
import { MessagesService } from 'src/app/Services/messages.service';
@Component({
  selector: 'app-manager-add-message',
  templateUrl: './manager-add-message.component.html',
  styleUrls: ['./manager-add-message.component.scss']
})
export class ManagerAddMessageComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {message: Message}, private MessagesService: MessagesService,public dialogRef: MatDialogRef<ManagerAddMessageComponent>) { }

  messageContent!:string;
  newMassage!:Message;
  ngOnInit(): void {
  }

  saveMessage(){
    this.newMassage = new Message(
      this.data.message.userIdGiven,
      1027,
      this.messageContent,
     '',
     new Date()
      );
      console.log(this.newMassage)
       this.MessagesService.AddMessage(this.newMassage).subscribe((x) =>{

        console.log(x)
         this.dialogRef.close();
      }
        
      );
  }

}
