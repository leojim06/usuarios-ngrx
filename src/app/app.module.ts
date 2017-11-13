import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './app.reducer';
import { UsersEffects } from './users/users.effects';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UsersModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([UsersEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
