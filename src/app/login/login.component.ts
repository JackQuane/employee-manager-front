import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppUser } from '../appUser';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  // public registerUser(): void {

  //   this.registerService.register(appUser: AppUser).subscribe(
  //     (repsonse: Employee[]) => {
  //       this.employees = repsonse;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );

  // }


  public registerUser(form: NgForm): void {
    document.getElementById('newUser-registration-form')?.click();
    this.registerService.register(form.value).subscribe(
      (response: String) => {
        console.log(response);
        form.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        form.reset();
      }
    );
  }

}
