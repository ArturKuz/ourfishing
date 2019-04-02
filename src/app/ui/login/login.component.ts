import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { first } from 'rxjs/operators';
import { AlertService,  AuthenticationService } from '../../services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  loading = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) 
    // redirect to home if already logged in
  {
    // if (this.authenticationService.currentUserValue) { 
      // this.router.navigate(['/']);
    // }
  }
  
    
    

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      chekSave: ['']
    
    });

    // get return url from route parameters or default to '/'
    //  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }

   onSubmit() {
       this.submitted = true;

       // stop here if form is invalid
       if (this.loginForm.invalid) {
           return;
       }
       alert('Thx!!!');
       this.loginForm.reset();
       this.loading = true;
       this.authenticationService.login(this.f.userName.value, this.f.password.value)
           .pipe(first())
           .subscribe(
               data => {
                   this.router.navigate(['/main']); 
               },
              //  router navigate home page
               error => {
                   this.alertService.error(error);
                   this.loading = false;
               });
   }

  goBack(): void {
    this.location.back();
  }
}
