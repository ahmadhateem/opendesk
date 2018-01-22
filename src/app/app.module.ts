import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';

import { reducer } from './store/reducers';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { DetailsComponent } from './details/details.component';

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    StoreModule.forRoot({ AppState : reducer })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
