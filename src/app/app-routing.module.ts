import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { StartScreenComponent } from './components/start-screen/start-screen.component';

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'game/:id', component: GameComponent },
  { path: '**', component: StartScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
