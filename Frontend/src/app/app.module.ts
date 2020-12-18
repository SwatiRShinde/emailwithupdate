import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './Components/Admin/about/about.component';
import { AddQuestionsComponent } from './Components/Admin/add-questions/add-questions.component';
import { AdminComponent } from './Components/Admin/admin/admin.component';
import { CreateNewQuizComponent } from './Components/Admin/create-new-quiz/create-new-quiz.component';
import { CreateQuizComponent } from './Components/Admin/create-quiz/create-quiz.component';
import { FooterComponent } from './Components/Admin/footer/footer.component';
import { HeaderComponent } from './Components/Admin/header/header.component';
import { HomeComponent } from './Components/Admin/home/home.component';
import { DisplayQuizListComponent } from './Components/User/display-quiz-list/display-quiz-list.component';
import { DisplayQuizComponent } from './Components/User/display-quiz/display-quiz.component';
import { RegisterComponent } from './Components/User/register/register.component';
import { SliderComponent } from './Components/User/slider/slider.component';
import { UserComponent } from './user/user.component';
import { AddQuizComponent } from './Components/Admin/add-quiz/add-quiz.component';
import { ShowCategoryComponent } from './Components/User/show-category/show-category.component';
import { AngularMaterialModule } from './angular-material.module';
import { ResultComponent } from './Components/User/result/result.component';
import { ChartsModule } from 'ng2-charts';
import { CountdownModule } from 'ngx-countdown';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    FooterComponent,
    SliderComponent,
    HeaderComponent,
    DisplayQuizListComponent,
    UserComponent,
    AdminComponent,
    CreateQuizComponent,
    CreateNewQuizComponent,
    DisplayQuizComponent,
    AddQuestionsComponent,
    AddQuizComponent,
    ShowCategoryComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
    CountdownModule,
    ChartsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
