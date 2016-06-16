import {Component, OnInit} from '@angular/core';
import {PlayersComponent} from './players.component';
import {DashboardComponent} from './dashboard.component';
import {PlayerDetailedComponent} from './player-detail.component';
import {CricketerService} from './cricketer.service';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
   selector: 'my-app',
   template:`
    <h1>Wisden Best Crickters</h1>
    <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES],
    providers : [ROUTER_PROVIDERS,CricketerService]      
})

@RouteConfig([
  {
    path: '/players',
    name: 'Players',
    component: PlayersComponent,
    useAsDefault: true
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: '/detail/:id',
    name: 'PlayerDetail',
    component: PlayerDetailedComponent
  }
])

export class AppComponent{
   titile = 'Indian Players';
}