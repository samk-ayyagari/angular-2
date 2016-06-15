import { Injectable } from '@angular/core';
import { Cricketer } from './cricketer';
import { PLAYERS } from './mock-players';



@Injectable()

export class CricketerService {
  getPlayers() {
    return Promise.resolve(PLAYERS);
  }

  getPlayer(id: number) {
    return this.getPlayers()
               .then();
  }
}