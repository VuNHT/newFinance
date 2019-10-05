import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router,
        ) { }

  phoneNumber: any;
  tabWelcome = false;
  infoUser: any;
  message: any;

  public listUser = [
    {
      name: 'Đức Khánh',
      phone: '0966383980',
      id: 1
    },
    {
      name: 'Thiên Vũ',
      phone: '123',
      id: 2
    },
    {
      name: 'Sĩ Trường',
      phone: '0357745240',
      id: 3
    },
    {
      name: 'Thành Trung',
      phone: '3966383980',
      id: 4
    },
    {
      name: 'Thành Tâm',
      phone: '4966383980',
      id: 5
    }
  ]

  ngOnInit() {
    localStorage.clear();
  }

  public login() {
    localStorage.clear();
    const success = this.listUser.filter(item => item.phone === this.phoneNumber);
    this.infoUser = success[0];
    if (success.length !== 0) {
      // this.chooseUser(success[0]);
      this.message = '';
      this.tabWelcome = true;
    localStorage.setItem('user', this.infoUser.name);
    } else {
      this.tabWelcome = false;
      this.message = 'Not Found';
    }
  }

  public eventSelect(event) {
    if (event.value === 'market') {
      this.router.navigateByUrl('/market');
    } else if (event.value === 'using') {
      this.router.navigateByUrl('/using');
    } else {
      this.router.navigateByUrl('/final-finance');
    }
  }

}
