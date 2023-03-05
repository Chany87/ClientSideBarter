import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/Models/Message';
import { MessagesService } from 'src/app/Services/messages.service';
import { ManagerAddMessageComponent } from '../manager-add-message/manager-add-message.component';
import { MatDialog } from '@angular/material/dialog';

const api = "https://localhost:44321/";

@Component({
  selector: 'app-manager-masage',
  templateUrl: './manager-masage.component.html',
  styleUrls: ['./manager-masage.component.scss']
})
export class ManagerMasageComponent implements OnInit {
  public messages: Message[] = [];
  displayedColumns: string[] = ['userName', 'phone', 'messageContent', 'image', 'actions'];

  constructor(private Message: MessagesService, public Dialog: MatDialog) { }

  ngOnInit(): void {
    this.Message.GetAllMessages().subscribe((x) => {
      this.messages = x;
      alert(x)

    })
  }
  openDialog(id: number): void {
    const dialogRef = this.Dialog.open(ManagerAddMessageComponent, {
      width: '60%',
      height: '600px',
      data: {
        message: this.messages.find(m => m.id == id)
      }
    })
      ;
    // editMessage(){

    // }

  }
}
