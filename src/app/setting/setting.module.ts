import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { EpmSettingComponent } from './epm-setting/epm-setting.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


const route: Routes=[
  { path: 'setting', component: EpmSettingComponent },
  { path: '', component: EpmSettingComponent },

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
    EpmSettingComponent
  ]
})
export class SettingModule { }
