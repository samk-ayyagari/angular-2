import {Component, OnInit} from '@angular/core';
import {Cricketer} from './cricketer';
import { PlayerDetailedComponent} from './player-detail.component';
import {CricketerService} from './cricketer.service';
import { Router } from '@angular/router-deprecated';

@Component({
   selector: 'my-players',
   template:`
    <ul>
        <li *ngFor="let player of players" (click)="onSelect(player)">
            <span class="badge">{{player.id}}</span> {{player.name}}
        </li>
    </ul>
    <div *ngIf="selectedPlayer">
        <h2>
            {{selectedPlayer.name | uppercase}} is my hero
        </h2>
    </div>
        <button (click)="addPlayer()">Add New Player</button>
        <div *ngIf="addingPlayer">
        <my-player-detail (close)="close($event)"></my-player-detail>
       </div>
    `,
    directives: [PlayerDetailedComponent]
})
export class PlayersComponent implements OnInit{
    players:Cricketer[];
    selectedPlayer: Cricketer;
    addingPlayer = false;
    error: any;

    constructor(
        private cricketerService:CricketerService,
        private router:Router
    ){}

    getPlayers(){
        this.cricketerService.getPlayers().then(players => this.players = players);
        console.log(this.players)
    }

    onSelect(player:Cricketer){
        this.selectedPlayer = player;
        this.router.navigate(['PlayerDetail', { id: this.selectedPlayer.id }]);
    }

    ngOnInit(){
        this.getPlayers();
    }

    addPlayer(){
        this.addingPlayer = true;
        this.selectedPlayer = null;
    }

     close(savedPlayer: Cricketer) {
        this.addingPlayer = false;
        if (savedPlayer) { this.getPlayers(); }
    }
}
 

