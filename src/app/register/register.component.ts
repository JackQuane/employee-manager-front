import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

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
