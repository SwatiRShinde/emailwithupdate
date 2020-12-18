import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  //Get list of quiz names
  getQuizList(id:any)
  {
    console.log("http://localhost:8080/api/quiz/"+id);
    return this.http.get('http://localhost:8080/api/quiz/'+id)
  }

  //post new quiz name
  postQuizName(quiz:any)
  {
    return this.http.post('http://localhost:8080/api/quiz',quiz);
  }

  //getQuizNames

  getQuizNames()
  {
    return this.http.get('http://localhost:8080/api/quiz/getQuizName');
  }

  displayQuizByCategory(id:number){
    console.log("In the servie")
    let res = this.http.get('http://localhost:8080/api/displayQuiz/getByQuizCategory/'+id);
    console.log(res);
    return res;
  }

}