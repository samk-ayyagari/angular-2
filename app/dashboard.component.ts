import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Cricketer } from './cricketer';
import { CricketerService }  from './cricketer.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
   players:Cricketer[];

  constructor(
    private router: Router,
    private cricketerService: CricketerService) {}
    
  
  getPlayers(){
        this.cricketerService.getPlayers().then(players => this.players = players);
        this.players = [{
          "id" : 1,
          "name": "sameer",
          "matches":3,
          "runs":4343
        }]
       // console.log(this.players)
    }

    ngOnInit(){
        this.getPlayers();
        //console.log(this.players);
    }
}