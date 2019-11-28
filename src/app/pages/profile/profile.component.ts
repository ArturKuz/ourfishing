import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PROFILE_INPUTS } from './profileData';
import { MessageService } from 'src/app/services/message.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileInputs = PROFILE_INPUTS;
  userAvatar: any;
  userId: number;
  isAvatartSaved = true;
  selectedFile;
  fisherForm: FormGroup;
  noAvatar = 'assets/img/noavatar.png';
  regexpName = new RegExp('^[а-яА-Я]+$');
  regexpPhone = new RegExp('^\\+[1-9]{1}[0-9]{3,14}$');

  submitted = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private location: Location,
  ) { }

  ngOnInit() {

    this.userId = +this.route.snapshot.paramMap.get('id');

    this.fisherForm = new FormGroup({
      email: new FormControl('', [Validators.email]),
      firstName: new FormControl('', [Validators.pattern(this.regexpName)]),
      lastName: new FormControl('', [Validators.pattern(this.regexpName)]),
      phoneNumber: new FormControl('', [Validators.pattern(this.regexpPhone), Validators.required]),
    });

    this.getFisher();
  }

  get formFields() {
    return this.fisherForm.controls;
  }

  getFisher(): void {
    this.userService.getById()
    .subscribe(res => {
      this.fisherForm.patchValue(res.data);
      this.userAvatar = res.data.avatarUrl;
    });
  }


  onSubmit(): void {

    this.submitted = true;

    if (this.fisherForm.invalid) {
      return;
    }

    this.userService.update(this.fisherForm.value)
      .subscribe(
        res => {
          this.getFisher();
          this.messageService.openPopUp('Данные сохранены');
        },
        error => {
          console.log(error);
        }
      );
  }

  onChange(event): void {
    this.selectedFile = event.target.files[0] as File;
    if (this.selectedFile) {
      this.preview(this.selectedFile);
      this.isAvatartSaved = false;
    }
  }

  uploadAvatar(file): void {
    const formdata = new FormData();
    formdata.append('file', file);
    this.userService.uploadUserAvatar(formdata).subscribe (
      res => this.messageService.openPopUp('Данные сохранены'),
      error => console.log(error),
    );
  }

  deleteAvatar() {
    this.userService.deleteUserAvatar().subscribe(
      res => {
        this.messageService.openPopUp('Данные сохранены');
        this.clearAvatarData();
      },
      error => console.log(error),
    );
  }

  onSaveAvatar() {
    if (this.selectedFile) {
      this.uploadAvatar(this.selectedFile);
    } else {
      this.deleteAvatar();
    }
    this.isAvatartSaved = true;
  }

  clearAvatarData() {
    this.isAvatartSaved = false;
    this.userAvatar = '';
    this.selectedFile = null;
  }

  preview(file) {

    if (file.type.match(/image\/*/) == null) {
      this.messageService.openPopUp('Загрузить можно только изображение');
      console.log('Only images are supported.');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      this.userAvatar = reader.result;
    };
  }

  goBack(): void {
    this.location.back();
  }
}
