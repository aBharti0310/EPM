import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-epm-home-page',
  templateUrl: './epm-home-page.component.html',
  styleUrls: ['./epm-home-page.component.css']
})
export class EpmHomePageComponent implements OnInit {

  constructor(private route: Router, private service: ServicesService) { }
  expenseDetails;
  index;
  budgetOverviewPieChart;
  CategorySplitPieChart;
  hideCategorySplitGraph = true;
  hideCategorySplitTable = false;
  totalSpent;

  ngOnInit() {
    //retriving all expense details...............
    this.expenseDetails = this.service.getAllExpenseList()
    //method to initialize pie chart...........
    this.getDetails()

  }
  //navigate to add expense page.....
  addExpense() {
    this.route.navigate(['/add_expense'])
  }

  //navigate to add expense page to edit value.....
  editExpense(i) {
    this.route.navigate(['/edit_expense/', i])
  }
  //method to delete expense list...........
  deleteExpanse(index) {

    for (let i = 0; i < this.expenseDetails.length; i++) {
      if (index == i) {
        this.expenseDetails[i].isDelete = 0
        this.service.saveExpense(this.expenseDetails)
        this.expenseDetails = this.service.getAllExpenseList()
      }
    }
    this.getDetails();

  }
  //method for confirmation before deleting expense list..........
  confirmDelete(i) {
    this.index = i;
  }

  //method to customize pie chart........... 
  getDetails() {
    let totalBudget = JSON.parse(localStorage.getItem('totalBudget'))
    let activeExpense = []
    for (let i = 0; i < Object.keys(this.expenseDetails).length; i++) {
      if (this.expenseDetails[i].isDelete == 1) {
        activeExpense.push(this.expenseDetails[i])
      }
    }

    let totalExpense = 0;
    let firstFiveItemName = [];
    let firstFiveItemAmount = [];
    ///loop for getting 1st 5 amount and item name from expense list
    if (Object.keys(this.expenseDetails).length <= 6) {
      this.hideCategorySplitGraph = false;
      this.hideCategorySplitTable = true
      for (let i = 0; i < Object.keys(activeExpense).length; i++) {
          firstFiveItemName.push(this.expenseDetails[i].itemName)
          firstFiveItemAmount.push(this.expenseDetails[i].amount)

      }
    }
    else {
      this.hideCategorySplitGraph = true;
      this.hideCategorySplitTable = false;
    }
    //............................  

    //loop for counting total spent %age............
    for (let i = 0; i < Object.keys(this.expenseDetails).length; i++) {
      if (this.expenseDetails[i].isDelete != 0) {
        totalExpense = totalExpense + this.expenseDetails[i].amount
      }
    }
    this.totalSpent = (totalExpense / totalBudget) * 100;
    ///////...................

    // customizing pie chart for budget Overview..............
    this.budgetOverviewPieChart = new Chart('chartForBudgetOverview', {
      type: 'pie',
      data: {
        labels: ["Total Budget", "Total Expense"],
        datasets: [{
          data: [totalBudget, totalExpense],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Budget Overview",
          display: true
        }
      }
    });

    /// // customizing pie chart for Category wise Split..........
    this.CategorySplitPieChart = new Chart('chartForExpenseSplit', {
      type: 'pie',
      data: {
        labels: [firstFiveItemName[1], firstFiveItemName[2], firstFiveItemName[3], firstFiveItemName[4], firstFiveItemName[5]],
        datasets: [{
          data: [firstFiveItemAmount[1], firstFiveItemAmount[2], firstFiveItemAmount[3], firstFiveItemAmount[4], firstFiveItemAmount[5]],
          backgroundColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Category wise split",
          display: true
        }
      }
    });

  }
}
