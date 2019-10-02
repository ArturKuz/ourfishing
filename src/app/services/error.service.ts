import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ErrorComponent } from '../ui/dialogs/error/error.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  durationInSeconds = 3;

  constructor(private snackBar: MatSnackBar) { }

  openErrorDialog(error) {
    this.snackBar.openFromComponent(ErrorComponent, {
      duration: this.durationInSeconds * 1000,
      data: {error},
    });
  }
}
