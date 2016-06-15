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
    }

    ngOnInit(){
        this.getPlayers();
        //console.log(this.players);
    }

    gotoDetail(player: Cricketer) {
      let link = ['PlayerDetail', { id: player.id }];
      this.router.navigate(link);
    }

}