import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        this.toastr.success('', 'Registration Successful', {
          timeOut: 3000
        }),
        console.log(response),
        this.cancel();
      },
      error: error => {
        console.log(error),
        this.toastr.error('', error.error, {
          timeOut: 3000
        })
      }
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
