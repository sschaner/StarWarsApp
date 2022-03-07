import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PeopleModule } from './people/people.module';
import { PlanetsModule } from './planets/planets.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    PeopleModule,
    PlanetsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
