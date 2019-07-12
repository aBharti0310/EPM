import { ServicesService } from './services.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  router: any = "/home";
 
  //property for allocating memory for total expense details
  expenseDetails = [{ category: '', itemName: '', amount: 0, expenseDate: '', isDelete: 1 }];
  //property for allocating memory for category details
  categoryList = [{ category: 'Select', isDelete: 1 }];
  //property for allocating memory for totalBudget
  totalBudget=0;



  constructor(private route: Router, private service: ServicesService) { }
  ngOnInit() {

    // allocating memory in local storage
    this.service.saveExpense(this.expenseDetails);
    this.service.saveCategory(this.categoryList);
    localStorage.setItem('totalBudget', JSON.stringify(this.totalBudget))

    this.route.navigate(['/home'])

  }

  //navigate to home page
  homePage() {
    this.router = "/home"
    this.route.navigate(['/home'])
  }
  //navigate to setting page
  settingPage() {
    this.router = "/setting"
    this.route.navigate(['/setting'])
  }
  //navigate to profile page
  profilePage() {
    this.router = "/profile"
    this.route.navigate(['/profile'])
  }

}
