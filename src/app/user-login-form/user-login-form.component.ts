import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}

  ngOnInit(): void {}

    loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((result) => {
      // Logic for a successful user registration goes here! (To be implemented)
      this.dialogRef.close();
      this.snackBar.open('user logged in successfully!', 'OK', {
        duration: 2000
      });
}, (result) => {
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }

  }