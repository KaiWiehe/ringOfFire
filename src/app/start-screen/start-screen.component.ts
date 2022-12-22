import { Component } from '@angular/core';
import { addDoc, doc, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection } from '@firebase/firestore';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {

  constructor(private router: Router, private firestore: Firestore,){}

  async newGame(){
    //start game
    let game = new Game;
    console.log('GameJSON',game.toJSON());


    let coll = collection(this.firestore, 'games');
    // setDoc(doc(coll), this.game.toJSON());

    //CRUD = create = addDoc, read = docData/collectionData, update = setDoc/updateDoc, delete = deleteDoc
    let game2 = await addDoc(coll, game.toJSON())

    this.router.navigateByUrl('/game/' + game2.id)
  }
}
