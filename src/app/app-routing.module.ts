import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SportsComponent } from './sports/sports.component';

const routes : Routes = [
  { path  : 'sports' , component:SportsComponent}
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
