import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  //service to retrive all expense list from local storage.........
  getAllExpenseList(): Observable<any> {
    return JSON.parse(localStorage.getItem('details'))
  }

  //service to retrive all category list from local storage.........
  getAllCategoryList(): Observable<any> {
    return JSON.parse(localStorage.getItem('categoryList'))
  }

  //service to save category list from local storage.........
  saveCategory(categoryList) {
    localStorage.setItem('categoryList', JSON.stringify(categoryList))
  }

  //service to save all expense list from local storage.........
  saveExpense(expenseDetails) {
    localStorage.setItem('details', JSON.stringify(expenseDetails))
  }
}
