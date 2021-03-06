import {Component, OnInit} from '@angular/core';
import {MaterializeDirective} from 'angular2-materialize';
import {NavbarComponent} from './navbar';
import {Routes, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router';
import {DashboardComponent} from './+dashboard'
import {SessionListComponent} from "./+session-list/session-list.component";
import {StatisticsComponent} from "./+statistics/statistics.component";
import {HomeComponent} from "./+home/home.component";
import {FooterComponent} from "./footer/footer.component";
import {ExerciseComponent} from "./+exercise/exercise.component";
import {UserInfoFormComponent} from "./user-info-form/user-info-form.component";
import {AccountComponent} from "./+account/account.component";

@Component({
    moduleId: module.id,
    selector: 'angular-attack-app',
    templateUrl: 'angular-attack.component.html',
    styleUrls: ['angular-attack.component.css'],

    directives: [MaterializeDirective,
        NavbarComponent,
        DashboardComponent,
        FooterComponent,
        ROUTER_DIRECTIVES],

    providers: [ROUTER_PROVIDERS]
})

@Routes([
    {path: '/', component: HomeComponent},
    {path: "/dashboard", component: DashboardComponent},
    {path: '/session/:id', component: SessionListComponent},
    {path: '/statistics/:id', component: StatisticsComponent},
    {path: '/exercises/:id', component: ExerciseComponent},
    {path: '/registration', component: UserInfoFormComponent},
    {path: '/account', component: AccountComponent}
])


export class AngularAttackAppComponent implements OnInit{

    constructor() {}

    ngOnInit() {

    }
    title = "angular-attack works!";
}
