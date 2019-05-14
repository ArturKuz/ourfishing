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


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // get id
    this.userId = this.route.snapshot.paramMap.get('id');

    // form
    this.profilForm = this.formBuilder.group({
      avatarUrl: [''],
      fisherId: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      location: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required]
    });
    console.log(this.profilForm);
    // get user info
    this.userService.getById(this.userId)
      .subscribe(data => {
        this.profilForm.setValue(data);
      });

  }

  onSubmit() {
    this.userService.update(this.profilForm.value, this.userId)
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
