import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent {
  name:string = '';

  public addPlayerForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,,
      Validators.minLength(1),
      Validators.maxLength(10),
      Validators.pattern('[a-zA-Z]+')
    ], [])
  })

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
      this.addPlayerForm.valueChanges.subscribe((test) =>{
        this.name = test.name;
      }
    )
  }
}
