import { Injectable } from '@angular/core';
import { Cricketer } from './cricketer';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class CricketerService {
  constructor(private http: Http) { }
  private baseUrl = 'app/players';  // URL to web api


  getPlayers(): Promise<Cricketer[]> {
    return this.http.get(this.baseUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  getPlayer(id: number) {
    return this.getPlayers()
              .then(players => players.filter(player => player.id === id)[0]);
  }

  save(player: Cricketer): Promise<Cricketer>  {
    if (player.id) {
      return this.put(player);
    }
    return this.post(player);
  }

  delete(player: Cricketer) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.baseUrl}/${player.id}`;

    return this.http
              .delete(url, headers)
              .toPromise()
              .catch(this.handleError);
  }

  private post(player: Cricketer): Promise<Cricketer> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
              .post(this.baseUrl, JSON.stringify(player), {headers: headers})
              .toPromise()
              .then(res => res.json().data)
              .catch(this.handleError);
  }

  private put(player: Cricketer) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.baseUrl}/${player.id}`;

    return this.http
               .put(url, JSON.stringify(player), {headers: headers})
               .toPromise()
               .then(() => player)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

