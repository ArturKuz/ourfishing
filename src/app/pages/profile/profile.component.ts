import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { PROFILE_INPUTS } from './profileData';
import { SuccessService } from 'src/app/services/success.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileInputs = PROFILE_INPUTS;

  regexpName = new RegExp('^[а-яА-Я]+$');
  regexpPhone = new RegExp('^\\+[1-9]{1}[0-9]{3,14}$');
  fisherForm: FormGroup;

  submitted = false;
  userId;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private successService: SuccessService,
  ) { }

  ngOnInit() {

    this.userId = this.route.snapshot.paramMap.get('id');

    this.fisherForm = new FormGroup({
      email: new FormControl('', [Validators.email]),
      firstName: new FormControl('', [Validators.pattern(this.regexpName)]),
      lastName: new FormControl('', [Validators.pattern(this.regexpName)]),
      phoneNumber: new FormControl('', [Validators.pattern(this.regexpPhone)]),
    });

    this.getFisher();
  }

  getFisher() {
    this.userService.getById(this.userId)
    .subscribe(res => {
      const data = res['data'];

      this.fisherForm.patchValue(this.updateFormValue(data));
      console.log(this.fisherForm);
    });
  }

  updateFormValue(data) {
    console.log(data);
    const {email, firstName, lastName, phoneNumber} = data;
    const obj = {
      email,
      firstName,
      lastName,
      phoneNumber
    };
    return obj;
  }

  // changeDateFormat() {
  //   const birthday = this.fisherForm.controls.birthday;
  //   this.fisherForm.controls.birthday = moment(birthday).format('dd/mm/yyyy');
  // }

  get formFields() { return this.fisherForm.controls; }

  onSubmit() {

    this.submitted = true;

    if (this.fisherForm.invalid) {
      return;
    }

    this.userService.update(this.fisherForm.value, this.userId)
      .subscribe(
        res => {
          this.getFisher();
          this.successService.openSuccessPopUp('Данные сохранены');
        },
        error => {
          console.log(error);
        });
  }

}
