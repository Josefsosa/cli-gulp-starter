import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './common-modules';
import { HomeModule } from './app-modules/home-module/home.module';
import { TodolistModule } from './app-modules/todolist-module/todolist.module';
import { WeatherModule } from './app-modules/weather-module/weather.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NavbarModule,
        HomeModule,
        TodolistModule,
        WeatherModule,
        routing
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
