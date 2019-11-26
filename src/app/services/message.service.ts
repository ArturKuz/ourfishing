import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MessagePopupComponent } from '../ui/dialogs/message-popup/message-popup.component';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  durationInSeconds = 3;

  constructor(private snackBar: MatSnackBar) { }

  openPopUp(message) {
    this.snackBar.openFromComponent(MessagePopupComponent, {
      duration: this.durationInSeconds * 1000,
      data: message,
    });
  }}
