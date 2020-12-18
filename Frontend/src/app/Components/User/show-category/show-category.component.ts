import { Component, OnInit } from '@angular/core';
import { ShowCategoryService } from 'src/app/services/user/show-category.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.scss']
})
export class ShowCategoryComponent implements OnInit {

  categoryName : any;
  //filterCategory:any;
  constructor(private displayQuizService:ShowCategoryService) { 

  }

  ngOnInit(): void {
    this.getCategoryName();
  }

  getCategoryName() {
    return this.displayQuizService. getCategoryName()
      .subscribe(
        que =>{
          this.categoryName = que;
          console.log( this.categoryName);
        } 
    );
  }

}
