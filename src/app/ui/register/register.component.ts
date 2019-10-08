import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';


import { UserService, AuthenticationService } from '../../services';
import { REG_INPUTS } from './registrationData';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationInputs = REG_INPUTS;
  registerForm: FormGroup;
  submitted = false;
  loading = false;


  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService,
    private location: Location,
  ) {
    // redirect to home if already logged in
    if (this.authService.currentUserValue.token) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('new@test.ru', [Validators.required, Validators.email]),
      userName: new FormControl('Artur', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('123123Az', [Validators.required, Validators.minLength(6)]),
    });
  }

  get formFields() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .subscribe(
        data => {
          console.log('data', data);
          this.router.navigate(['/login']);
        },
        error => {
          console.log('error', error);
          this.loading = false;
        },
        () => {
          console.log('Complite!!!');
          this.loading = false;
        }
      );
  }
  goBack(): void {
    this.location.back();
  }
}
