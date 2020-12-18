import { Component, OnInit, OnDestroy } from '@angular/core';
import {MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  showFiller:boolean=false;
mediasub:Subscription;
deviceXs:boolean=false;
constructor(public mediaobserver: MediaObserver) {
  this.mediasub =this.mediaobserver.media$.subscribe((result:MediaChange)=>{
    this.deviceXs=result.mqAlias=="xs"? true :false;
    console.log( this.deviceXs);
  })
}

ngOnInit(){
this.mediasub =this.mediaobserver.media$.subscribe((result:MediaChange)=>{
  this.deviceXs=result.mqAlias=="xs"? true :false;
})

}
ngOnDestroy(){
  this.mediasub.unsubscribe();

}
}
