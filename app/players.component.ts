import {Component, OnInit} from '@angular/core';
import {Cricketer} from './Cricketer';
import {PlayerDetailedComponent} from './player-detail.component';
import {CricketerService} from './cricketer.service';

@Component({
   selector: 'my-players',
   template:`
    <ul>
        <li *ngFor="let player of players" (click)="onSelect(player)">
            <span class="badge">{{player.id}}</span> {{player.name}}
        </li>
    </ul>
   <my-player-detail [player]="selectedPlayer"></my-player-detail>
    `,
    directives:[PlayerDetailedComponent]     
})
export class PlayersComponent implements OnInit{
    players:Cricketer[];
    selectedPlayer: Cricketer;

    constructor(private cricketerService:CricketerService){}

    getPlayers(){
        this.cricketerService.getPlayers().then(players => this.players = players);
       // console.log(this.players)
    }

    onSelect(player:Cricketer){
        this.selectedPlayer = player;
    }

    ngOnInit(){
        this.getPlayers();
        //console.log(this.players);
    }
}
 

