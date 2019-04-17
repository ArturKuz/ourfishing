import { Component, OnInit } from '@angular/core';
import { AlertService, UserService } from 'src/app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  profilForm: FormGroup;
  invalidLogin: boolean = false;
  userId: any;
  other_header;

  constructor(
   private formBuilder: FormBuilder,
   private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    // get id 
    this.userId = this.route.snapshot.paramMap.get('id'); 

    // get token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let authToken = currentUser.authToken;
    // creat headers

    let headers = new HttpHeaders();
    this.other_header = headers.append('Authorization', `Bearer ${authToken}`);

    console.log(this.other_header.get('Authorization'));
    
    // form
    this.profilForm = this.formBuilder.group({
    
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthday: ['', Validators.required],
    location: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    // email: ['', Validators.required]
    });

    this.userService.getById(this.userId, this.other_header)
    .subscribe(data => {
    this.profilForm.setValue(data);
    });
    
  }

  onSubmit() {
    this.userService.update(this.profilForm.value)
      // .pipe(first())
      .subscribe(
        data => {
          this.profilForm.setValue(data);
        },
        error => {
          alert(error);
        });
  }
  
}
