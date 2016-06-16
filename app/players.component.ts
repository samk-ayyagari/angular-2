import {Component, OnInit} from '@angular/core';
import {Cricketer} from './cricketer';
import { PlayerDetailedComponent} from './player-detail.component';
import {CricketerService} from './cricketer.service';
import { Router } from '@angular/router-deprecated';

@Component({
   selector: 'my-players',
   template:`
    <ul class = "playersList">
        <li *ngFor="let player of players" (click)="onSelect(player)">
           {{player.name}}
           <button>X</button>
        </li>
    </ul>
    <div *ngIf="selectedPlayer">
        <h2>
            {{selectedPlayer.name | uppercase}}
        </h2>
    </div>
        <button (click)="addPlayer()">Add New Player</button>
        <div *ngIf="addingPlayer">
            <my-player-detail (close)="close($event)"></my-player-detail>
        </div>
    `,
    directives: [PlayerDetailedComponent],
    styleUrls:  ['app/players.component.css'],
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

    delete(player: Cricketer, event: any) {
        event.stopPropagation();
        this.cricketerService
            .delete(player)
            .then(res => {
            this.players = this.players.filter(h => h !== player);
            if (this.selectedPlayer === player) { this.selectedPlayer = null; }
            })
            .catch(error => this.error = error);
    }
}
 

