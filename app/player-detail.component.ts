import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { CricketerService } from './cricketer.service';
import { Cricketer } from './cricketer';
@Component({
  selector: 'my-player-detail',
  templateUrl: 'app/player-detail.component.html'
})


export class PlayerDetailedComponent implements OnInit {
  @Input() player: Cricketer;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;;

  constructor(
    private cricketService: CricketerService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.cricketService.getPlayer(id)
          .then(player => this.player = player);
    } else {
      this.navigated = false;
      this.player = new Cricketer();
    }
  }


  goBack(player: Cricketer = null) {
    this.close.emit(player);
    if (this.navigated) { window.history.back(); }
  }
  
}