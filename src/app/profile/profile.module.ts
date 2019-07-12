import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { EpmProfileComponent } from './epm-profile/epm-profile.component';
import {NgxPaginationModule} from 'ngx-pagination';



const route: Routes=[
  { path: 'profile', component: EpmProfileComponent },
  { path: '', component: EpmProfileComponent },

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    NgxPaginationModule
  ],
  declarations: [
    EpmProfileComponent
  ]
})
export class ProfileModule { }
