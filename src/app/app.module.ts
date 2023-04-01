import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { StartScreenComponent } from './components/start-screen/start-screen.component';

import { AddPlayerComponent } from './templates/add-player/add-player.component';
import { CopiedComponent } from './templates/copied/copied.component';
import { GameOverComponent } from './templates/game-over/game-over.component';
import { PlayerComponent } from './templates/player/player.component';
import { RuleCardComponent } from './templates/rule-card/rule-card.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { IdErrorComponent } from './templates/id-error/id-error.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StartScreenComponent,
    AddPlayerComponent,
    CopiedComponent,
    GameOverComponent,
    PlayerComponent,
    RuleCardComponent,
    IdErrorComponent,
  ],
  imports: [
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
