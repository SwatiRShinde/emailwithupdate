import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bad()
  {
    console.log("bad");
  }

  moderate()
  {
    console.log("moderate");
  }
  good()
  {
    console.log("good");
  }
  goup()
  {
    alert("go up");
  }
}
