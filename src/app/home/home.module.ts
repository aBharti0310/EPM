import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { EpmHomePageComponent } from './epm-home-page/epm-home-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {NgxPaginationModule} from 'ngx-pagination';

const route: Routes=[
  { path:'home',component: EpmHomePageComponent},
  { path:'',component: EpmHomePageComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    EpmHomePageComponent,
  ]
})
export class HomeModule { }
