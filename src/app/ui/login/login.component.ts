import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  invalidLogin = false;
  loading = false;
  disabledCheckBox = false;
  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      lapassword: new FormControl('', [Validators.required])
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log( this.returnUrl);
  }

  onSubmit() {

    console.log('loginform =====>', this.loginForm.value );

    // this.submitted = true;

    // if (this.loginForm.invalid) {
    //   return;
    // }

    // this.loading = true;
    // this.authenticationService.login(this.loginForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate(['/']);
    //     },
    //     error => {
    //       this.loading = false;
    //       this.router.navigate([this.returnUrl]);
    //       // this.router.navigate(['/registration']);
    //     });
  }

  goBack(): void {
    this.location.back();
  }
}
