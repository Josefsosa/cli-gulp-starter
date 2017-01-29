import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './app-modules/home-module/index';
import { TodolistRoutes } from './app-modules/todolist-module/index';
import { WeatherRoutes } from './app-modules/weather-module/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...WeatherRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
