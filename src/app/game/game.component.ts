import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  takeCardAnimation = false;
  currentCard: string;
  game: Game;

  constructor(public dialog: MatDialog){}

  ngOnInit():void{
    this.newGame();   
  }

  newGame(){
    this.game = new Game;
    console.log(this.game);
  }

  takeCard(){
    if(!this.takeCardAnimation){
      this.currentCard = this.game.stack.pop();
      console.log('new Card is:' ,this.currentCard);
      console.log('game is:' , this.game);
      this.takeCardAnimation = true;

      setTimeout(() => {
        this.takeCardAnimation = false
        this.game.playedCards.push(this.currentCard);
      }, 500);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      console.log( name);
      this.game.players.push(name);
    });
  }
}
