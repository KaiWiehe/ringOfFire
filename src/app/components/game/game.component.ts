import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Firestore, collectionData, collection, setDoc, doc, addDoc, docData, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Game } from 'src/models/game';

import { AddPlayerComponent } from '../../templates/add-player/add-player.component';
import { CopiedComponent } from '../../templates/copied/copied.component';
import { GameOverComponent } from '../../templates/game-over/game-over.component';
import { IdErrorComponent } from '../../templates/id-error/id-error.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})


export class GameComponent implements OnInit {
  game: Game;
  gamesCollection;

  maxPlayers: number = 6;

  gameID: string;

  //CRUD = create = addDoc, read = docData/collectionData, update = setDoc/updateDoc, delete = deleteDoc

  // games$: Observable<any>;
  // games;

  constructor(public dialog: MatDialog, private firestore: Firestore, private route: ActivatedRoute, private router: Router){
    // const coll = collection(firestore, 'games');
    // this.games$ = collectionData(coll, { idField: 'id'});

    this.route.params.subscribe((param: any) => {
      this.gameID = param.id;

      this.gamesCollection = collection(firestore, 'games');
      // console.log('coll', coll);
      let docRef = doc(this.gamesCollection, this.gameID)
      //console.log('docRef', docRef);
      let gamesDocData = docData(docRef, {idField: 'id'});
      // docData = documentendateien also von einem document
      // console.log('gamesDocData', gamesDocData);
      // let gamesCollData = collectionData(coll, {idField: 'id'});
      //console.log('gamesCollData', gamesCollData);

      gamesDocData.subscribe((game: any) => {
        try{
          //console.log('game: ' , game);
          this.game.currentPlayer = game.currentPlayer;
          this.game.playedCards = game.playedCards;
          this.game.players = game.players;
          this.game.stack = game.stack;
          this.game.takeCardAnimation = game.takeCardAnimation;
          this.game.currentCard = game.currentCard;
          this.game.notEnoughPlayers = game.notEnoughPlayers;
        }catch(err){
          let dialogRef = this.dialog.open(IdErrorComponent, {
            data: { err : err }
          });
          dialogRef.afterClosed().subscribe(() => {
            this.router.navigateByUrl('/game');
          });
        }
      });


      // gamesCollData.subscribe((game) => {
        //console.log('gamesCollData2: ' , game);
      // });
    })
  }

  ngOnInit():void{
    this.newGame();
  }

  async newGame(){
    this.game = new Game;
    //let coll = collection(this.firestore, 'games');
    // setDoc(doc(coll), this.game.toJSON());
    //let test = await addDoc(coll, this.game.toJSON())
  }

  takeCard(){
    if (this.game.stack.length > 0){
      if (this.game.players.length > 1) {
        if(!this.game.takeCardAnimation){
          this.game.currentCard = this.game.stack.pop();
          this.game.takeCardAnimation = true;
          this.game.currentPlayer++;
          this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
          this.saveGame();

          setTimeout(() => {
            this.game.takeCardAnimation = false
            this.game.playedCards.push(this.game.currentCard);
            this.saveGame();
          }, 500);
        }
      }else{
        this.game.notEnoughPlayers = true;
        this.saveGame();
        setTimeout(() => {
          this.game.notEnoughPlayers = false;
          this.saveGame();
        }, 1000);
      }
    }else{
      // game over
      this.dialog.open(GameOverComponent);
    }
  }

  openDialog(): void {
    let playerLength = this.game.players.length < this.maxPlayers;

    let dialogRef = this.dialog.open(AddPlayerComponent, {
      data: {playerLength: playerLength}
    });

    dialogRef.afterClosed().subscribe((name: string) => {
      if(name && name.length > 0){
        this.game.players.push(name);
        this.saveGame();
      }
    });
  }

  saveGame(){
    // let coll = collection(this.firestore, 'games');
    // // console.log('coll', coll);

    let docRef = doc(this.gamesCollection, this.gameID)
    //console.log('docRef', docRef);

    // setDoc(docRef, this.game.toJSON());
    updateDoc(docRef, this.game.toJSON());
  }

  copy() {
    let url = window.location.href;
    //console.log(url);
    navigator.clipboard.writeText(url);
  }

  openDialogCopied(): void {
    this.dialog.open(CopiedComponent);
  }
}
