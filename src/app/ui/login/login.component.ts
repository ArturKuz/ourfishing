import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services';
import { LOGIN_INPUTS } from './loginData';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  loginForm: FormGroup;
  loginInputs = LOGIN_INPUTS;
  submitted = false;
  invalidLogin = false;
  loading = false;
  disabledCheckBox = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('Artur', [Validators.required]),
      password: new FormControl('123123Az', [Validators.required])
    });

    // get return url from route parameters or default to '/'
    console.log(this.route.snapshot);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get formFields() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.loginForm.value)
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {
          console.log('error', error.error.Errors[0].Message);
          this.loading = false;
          this.router.navigate([this.returnUrl]);
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
