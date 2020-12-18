import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/Admin/about/about.component';
import { AddQuestionsComponent } from './Components/Admin/add-questions/add-questions.component';
import { AdminComponent } from './Components/Admin/admin/admin.component';
import { CreateQuizComponent } from './Components/Admin/create-quiz/create-quiz.component';
import { HomeComponent } from './Components/Admin/home/home.component';
import { DisplayQuizListComponent } from './Components/User/display-quiz-list/display-quiz-list.component';
import { DisplayQuizComponent } from './Components/User/display-quiz/display-quiz.component';
import { RegisterComponent } from './Components/User/register/register.component';
import { UserComponent } from './user/user.component';
import { ResultComponent } from './Components/User/result/result.component';


const routes: Routes = [
  //{path:"displayQuizList/:id",component:DisplayQuizListComponent},
  {path:'home',component:HomeComponent},
  {path:'addQuestions/:quizName',component:AddQuestionsComponent},
  {path:'DisplayQuiz/:id',component:DisplayQuizComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin/createQuiz',component:CreateQuizComponent},
  {path:'user',component:UserComponent},
  {path:'about',component:AboutComponent},
  {path:'register',component:RegisterComponent},
  {path:'result',component:ResultComponent},
  {path:'catList/:id',component:DisplayQuizListComponent},
  {path:'quizLists/:id',component:DisplayQuizComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
