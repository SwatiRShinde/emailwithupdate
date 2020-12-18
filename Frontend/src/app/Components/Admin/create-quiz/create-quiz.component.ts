import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AddCategoryService } from 'src/app/services/admin/add-category.service';
import { QuizService } from 'src/app/services/user/quiz.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  categoryName:any;
  Quiz={
    quizName:"",
    categoryId:"",
    duration:"",
    count:""
  };
  constructor(private r:Router,private service:AddCategoryService,private service1:QuizService) { 
    this.service.getCategoriess().subscribe(data=>{
      this.categoryName=data;
      console.log(this.categoryName[1]);
    })
  }

  ngOnInit(): void {
  }

  addQuizName()
  {
    console.log(this.Quiz);
    this.service1.postQuizName(this.Quiz).subscribe();
    this.r.navigate(['addQuestions',this.Quiz.quizName]);
  }
}

