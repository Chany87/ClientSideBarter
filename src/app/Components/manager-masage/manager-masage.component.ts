import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminMessage } from 'src/app/Models/AdminMassage';
import { AdminMassagesService } from 'src/app/Services/admin-massages.service';
const   api = "https://localhost:44321/";

@Component({
  selector: 'app-manager-masage',
  templateUrl: './manager-masage.component.html',
  styleUrls: ['./manager-masage.component.scss']
})
export class ManagerMasageComponent implements OnInit {
  public messages: AdminMessage[] = [];
  displayedColumns: string[] = ['userName', 'phone', 'messageContent', 'image', 'actions'];

  constructor(private adminMassege: AdminMassagesService ) { }

  ngOnInit(): void {
    this.adminMassege.GetAllMassesges().subscribe((x) => {
      this.messages = x;
      alert(x)

    })
  }
  editMessage(){

  }

}
