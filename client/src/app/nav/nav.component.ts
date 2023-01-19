import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) {  }  

  ngOnInit(): void {
  }

  showSuccess() {
    this.toastr.success(this.model.username, 'Welcome', {
      timeOut: 3000,
    });
  }

  login () {
    this.accountService.login(this.model).subscribe({
      next: _ => {
        this.router.navigateByUrl('/members'),
        this.showSuccess()
      },
      error: error => console.log(error)
    });
  }

  logout () {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
