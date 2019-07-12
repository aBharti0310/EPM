import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epm-profile',
  templateUrl: './epm-profile.component.html',
  styleUrls: ['./epm-profile.component.css']
})
export class EpmProfileComponent implements OnInit {

  constructor( private service:ServicesService, private route:Router) { }

  
  allCategory;
  allExpenseList;

  ngOnInit() {

    //calling all deleted category
    this.allCategory = this.service.getAllCategoryList();
    //calling all deleted expense list
    this.allExpenseList=this.service.getAllExpenseList();
    
  }

  //method to undo deleted expense list.........
  undoDeletedExpense(index){
    for(let i=0;i<this.allExpenseList.length;i++){
      if(index==i){
        this.allExpenseList[i].isDelete = 1;
        this.service.saveExpense(this.allExpenseList)
      }
    }
    this.route.navigate(['/home'])
  }
  // ............................................

  //method to undo deleted category list.........
  undoDeletedCategory(index){
    for(let i=0;i<this.allCategory.length;i++){
      if(index==i){
        this.allCategory[i].isDelete = 1;
        this.service.saveCategory(this.allCategory)
      }
    }
    this.route.navigate(['/setting'])
  }

}
