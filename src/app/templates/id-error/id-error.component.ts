import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-id-error',
  templateUrl: './id-error.component.html',
  styleUrls: ['./id-error.component.scss']
})
export class IdErrorComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {err: string}, private router: Router, public dialog: MatDialogRef<any>) {
  }

  startScreen(){
    this.router.navigateByUrl('/game');
    this.dialog.close()
  }
}
