//import { ServicesService } from './../services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-epm-add-expense',
  templateUrl: './epm-add-expense.component.html',
  styleUrls: ['./epm-add-expense.component.css']
})
export class EpmAddExpenseComponent implements OnInit {

  form: FormGroup
  categories: any
  activeCategories = [];
  expenseDetails;
  id = undefined;

  constructor(private fb: FormBuilder, private route: Router, private activatedRoute: ActivatedRoute, private service: ServicesService) {
    this.getForm();
    this.categories = this.service.getAllCategoryList()
    for (let i = 0; i < Object.keys(this.categories).length; i++) {
      if (this.categories[i].isDelete == 1) {
        this.activeCategories.push(this.categories[i])
      }
    }
  }

  ngOnInit() {
    //initialing form....
    this.form = this.getForm();

    //retriving all expense list.....
    this.expenseDetails = this.service.getAllExpenseList()

    this.activatedRoute.params.subscribe(params =>
      this.id = params['id']
    )
    if (this.id !== undefined) {
      this.editExpense();
    }
  }

  //method to patch all form values (which has to be modified)..........
  editExpense() {
    for (let i = 0; i < Object.keys(this.expenseDetails).length; i++) {

      if (+this.id == i) {
        this.form.patchValue({
          category: this.expenseDetails[i].category,
          itemName: this.expenseDetails[i].itemName,
          amount: this.expenseDetails[i].amount,
          expenseDate: this.expenseDetails[i].expenseDate,
          isDelete: this.expenseDetails[i].isDelete
        })
      }
    }
  }

  //creating form........
  getForm() {
    return this.fb.group({
      category: [''],
      itemName: [''],
      amount: [''],
      expenseDate: [new Date()],
      isDelete: 1
    })
  }

  //method to save form data.....
  onSubmit() {

    //condition to check new form value and edited form value.........
    if (this.id != undefined) {
      for (let i = 0; i < this.expenseDetails.length; i++) {
        if (this.id == i) {
          this.expenseDetails[i] = this.form.value
          console.log(`this.expenseDetails[i]`, this.expenseDetails[i]);
          this.service.saveExpense(this.expenseDetails)
        }
      }
    }
    else {
      this.getLocalData();
      this.expenseDetails.push(this.form.value)
      this.service.saveExpense(this.expenseDetails)
    }
    this.expenseDetails = this.service.getAllExpenseList()
    this.id = 0

    //resetting form after save..............
    this.form.controls['category'].reset();
    this.form.controls['itemName'].reset();
    this.form.controls['amount'].reset();
    this.route.navigate(['/home'])

  }

  //retriving all expense data to add or edit form..........
  getLocalData() {
    this.expenseDetails = []
    let v = this.service.getAllExpenseList()
    for (let i = 0; i < Object.keys(v).length; i++) {
      this.expenseDetails.push(v[i])
    }
  }

}
