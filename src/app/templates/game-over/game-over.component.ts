import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent {
  constructor(private router: Router, public dialog: MatDialog, public dialogRef: MatDialogRef<any>){}
  reloadPage(){
    this.router.navigateByUrl('')
    this.dialogRef.close();
  }
}
