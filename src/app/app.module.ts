import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PeopleModule } from './people/people.module';
import { PeopleListComponent } from './people/people-list/people-list.component';

const routes: Routes = [
  { path: 'people', component: PeopleListComponent},
  { path: '', redirectTo: '/people', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    PeopleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
