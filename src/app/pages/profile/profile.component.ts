import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // fisherForm: FormGroup;
  regexpName = new RegExp('^[а-яА-Я]+$');
  regexpPhone = new RegExp('^\\+[1-9]{1}[0-9]{3,14}$');

  fisherForm;

  isInvalidFirstName;
  isInvalidLastName;
  isInvalidBirthday;
  isInvalidlocation;
  isInvalidPhone;

  btnSubmitChecked = false;
  userId;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.userId = this.route.snapshot.paramMap.get('id');

    this.fisherForm = this.formBuilder.group({

      firstName: ['', Validators.pattern(this.regexpName)],
      lastName: ['', Validators.pattern(this.regexpName)],
      phoneNumber: ['', Validators.pattern(this.regexpPhone)],
      email: ['', Validators.email],

    });

    console.log(this.fisherForm);

    this.getFisher();

  }

  getFisher() {
    this.userService.getById(this.userId)
    .subscribe(data => {
      console.log(data);
      // this.fisherForm.patchValue(data);
    });
  }

  changeDateFormat() {
    const birthday = this.fisherForm.controls.birthday;
    this.fisherForm.controls.birthday = moment(birthday).format('dd/mm/yyyy');
  }

  onSubmit() {

    this.btnSubmitChecked = true;

    const controls = this.fisherForm.controls;

    this.isInvalidFirstName = controls.firstName.invalid ? true : false;
    this.isInvalidLastName = controls.lastName.invalid ? true : false;
    this.isInvalidBirthday = controls.birthday.invalid ? true : false;
    this.isInvalidlocation = controls.location.invalid ? true : false;
    this.isInvalidPhone = controls.phoneNumber.invalid ? true : false;

    // console.log(this.fisherForm);

    // console.log(this.isInvalidFirstName);
    // console.log(this.isInvalidLastName);
    // console.log(this.isInvalidBirthday);
    // console.log(this.isInvalidlocation);
    // console.log(this.isInvalidPhone);


    if (!this.fisherForm.invalid) {

      this.userService.update(this.fisherForm.value, this.userId)
        // .pipe(first())
        .subscribe(
          data => {
            this.fisherForm.patchValue(data);
            alert('Данные сохранены');
          },
          error => {
            alert(error);
          });
    }
    return;
  }

}
