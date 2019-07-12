import { ServicesService } from 'src/app/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epm-setting',
  templateUrl: './epm-setting.component.html',
  styleUrls: ['./epm-setting.component.css']
})
export class EpmSettingComponent implements OnInit {

  
  totalBudget: any;
  categories: any='';
  categoryList;
  index;



  constructor(private service: ServicesService) {
  }

  ngOnInit() {
    //calling value of total Budget if there is any
    this.totalBudget=JSON.parse(localStorage.getItem('totalBudget'))
    //calling all category list if there is any
    this.categoryList=this.service.getAllCategoryList();
  }

  //method to add new budget
  addBudget() {
    console.log(this.totalBudget);
    localStorage.setItem('totalBudget', this.totalBudget)
    let tb = localStorage.getItem('totalBudget')
    this.totalBudget=''
    console.log(tb);

  }

//method for adding new category.....
  addCategories() {
    this.getLocalCategories();
    let v = { category: '', isDelete: 1 }
    v.category = this.categories
    this.categoryList.push(v)
    this.service.saveCategory(this.categoryList)
    this.categoryList = this.service.getAllCategoryList()
    this.categories=''

  }
  //..................................

  //calling all existing categories (if there is any) to combine with new category...
  getLocalCategories() {
    this.categoryList = []
     let v = this.service.getAllCategoryList();

      for (let i = 0; i < Object.keys(v).length; i++) {
        this.categoryList.push(v[i])
      }
  }
  //.................................
 
  // method to delete category............
  deleteCategoryList(index) {

    for (let i = 0; i < this.categoryList.length; i++) {
      if (index == i) {
        this.categoryList[i].isDelete = 0
        this.service.saveCategory(this.categoryList)
        this.categoryList=this.service.getAllCategoryList()
      }
    }
  }
  //...................

  // method to ask before delete........
  confirmDelete(i) {
    this.index = i;
  }
}
