
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';


const routes:Routes=[
  { path:'home', loadChildren:'./home/home.module#HomeModule'},
  { path:'setting', loadChildren:'./setting/setting.module#SettingModule'},
  { path:'profile', loadChildren:'./profile/profile.module#ProfileModule'},
  { path:'',redirectTo:'/home',pathMatch:'full'}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports:[RouterModule],
})
export class RoutingModule { }
