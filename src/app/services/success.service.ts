import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SuccessComponent } from '../ui/dialogs/success/success.component';

@Injectable({
  providedIn: 'root'
})
export class SuccessService {

  durationInSeconds = 3;

  constructor(private snackBar: MatSnackBar) { }

  openSuccessPopUp(message) {
    this.snackBar.openFromComponent(SuccessComponent, {
      duration: this.durationInSeconds * 1000,
      data: message,
    });
  }
}
