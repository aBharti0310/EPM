
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { ServicesService } from './services.service';
import { EpmAddExpenseComponent } from './epm-add-expense/epm-add-expense.component';

 const route : Routes = [
  { path: 'add_expense', component: EpmAddExpenseComponent },
  { path: 'edit_expense/:id', component: EpmAddExpenseComponent },
 ]
@NgModule({
  declarations: [
    AppComponent,
   EpmAddExpenseComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
   RouterModule.forRoot(route),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
