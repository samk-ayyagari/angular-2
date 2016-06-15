import {Component, OnInit} from '@angular/core';
import {PlayersComponent} from './players.component';
import {DashboardComponent} from './dashboard.component'
import {CricketerService} from './cricketer.service';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
   selector: 'my-app',
   template:`
    <h1>Indian Team Cricketers</h1>
     <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Players']">Players</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES],
    providers : [ROUTER_PROVIDERS,CricketerService]      
})

@RouteConfig([
  {
    path: '/players',
    name: 'Players',
    component: PlayersComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }
])

export class AppComponent{
   titile = 'Indian Players';
}