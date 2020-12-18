import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/user/quiz.service';
import { AddFavouriteService } from 'src/app/services/user/add-favourite.service';

@Component({
  selector: 'app-display-quiz-list',
  templateUrl: './display-quiz-list.component.html',
  styleUrls: ['./display-quiz-list.component.scss']
})
export class DisplayQuizListComponent implements OnInit {
  id:any;
  filterCategory:any;
  quizName:any; 
  constructor(private route:ActivatedRoute,private service:QuizService,private service1:AddFavouriteService,private r:Router) {

    this.route.paramMap.subscribe((p:ParamMap)=>{
      this.id=p.get("id");
      sessionStorage.setItem("categoryId",this.id);
      this.getQuizByCategory(this.id);
    })
    console.log("id on new page : "+this.id);

   }
  ngOnInit(): void {

  }

  getQuizByCategory(id:number) {
    return this.service.displayQuizByCategory(this.id)
      .subscribe((que)=>{
        this.quizName = que
          console.log(que)
      }
    );
  }
  // displayQuestionList(QuizId:any)
  // {
  //   alert(QuizId);
  //   this.r.navigate(['/DisplayQuiz/',QuizId]);
  // }

 

  //  if(character != null)
  //  {
  //    character.classList.add("animate");
  //  }
 
  //  setTimeout(function(){
  //    if(character != null)
  //    {
  //      character.classList.remove("animate");
  //    }



}
