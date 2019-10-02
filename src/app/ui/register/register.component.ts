import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';


import { UserService, AuthenticationService } from '../../services';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;


  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService,
    private location: Location,
  ) {
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  // convenience getter for easy access to form fields
  // get formFields() { return this.registerForm.controls; }

  onSubmit() {
    console.log(this.registerForm.value);

    // this.submitted = true;

    // // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //   return;
    // }

    // this.loading = true;
    // this.userService.register(this.registerForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate(['/login']);
    //     },
    //     error => {
    //       this.loading = false;
    //     });
  }
  goBack(): void {
    this.location.back();
  }
}
