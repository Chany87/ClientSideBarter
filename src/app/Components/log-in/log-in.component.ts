import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

var gapi: any;

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) { }

  connectUser!: FormGroup
  ngOnInit(): void {
    this.connectUser = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),

    })
  }
  connect() {
    this.userService.GetUserByEmailAndPassword(this.connectUser.value.email, this.connectUser.value.password)
      .subscribe((x) => {
        alert(this.userService.thisUser)

        this.userService.thisUser = x
        alert(this.userService.thisUser)
        console.log(x)
    
        this.router.navigate(['']);

        if (this.userService.thisUser.allowingAccess == 1) {
          this.userService.SiteManager = true
          this.userService.ifUser == false
        }
        else if (this.userService.thisUser.allowingAccess == 2) {
          this.userService.ifUser == true
          this.userService.SiteManager = false

        }
        else
          this.userService.SiteManager = false
        //מה עושים כשחוזר ריק איך משנים את ההרשאה
        //כי אין אותו בשביל לבדוק
      })
    this.connectUser.reset();

  }
}