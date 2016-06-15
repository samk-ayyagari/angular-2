import { Component, Input } from '@angular/core';
import { Cricketer } from './cricketer';
@Component({
  selector: 'my-player-detail',
  template:`<div *ngIf="player">
    <h2>{{player.name}} details!</h2>
    <div><label>id: </label>{{player.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="player.name" placeholder="name"/>
    </div>
  </div>`
})


export class PlayerDetailedComponent {
    @Input() 
  player: Cricketer;
  
}