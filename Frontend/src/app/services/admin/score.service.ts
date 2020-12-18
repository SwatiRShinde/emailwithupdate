import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Score } from 'src/app/Class/score';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  private scoreUrl = 'http://localhost:8080/api/score';
  constructor(private http: HttpClient) {}
  addScore(score: Score): Observable<Score> {
    console.log(score, 'This is a question');
    return this.http.post<Score>(this.scoreUrl, score);
  }


  getPrevScore(userId:number,quizId:number){
    return this.http.get('http://localhost:8080/api/prevScore?userId='+userId+'&quizId='+quizId);
  }
}
