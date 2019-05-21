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

  // fisherForm: FormGroup;
  fisherForm;

  invalidLogin: boolean = false;
  userId: any;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.userId = this.route.snapshot.paramMap.get('id');

    this.fisherForm = this.formBuilder.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      location: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
    });

    console.log(this.fisherForm);
    this.userService.getById(this.userId)
      .subscribe(data => {
        this.fisherForm.patchValue(data);
      });

  }

  onSubmit() {
    console.log(this.fisherForm);

    this.userService.update(this.fisherForm.value, this.userId)
      // .pipe(first())
      .subscribe(
        data => {
          this.fisherForm.patchValue(data);
        },
        error => {
          alert(error);
        });
  }

}
