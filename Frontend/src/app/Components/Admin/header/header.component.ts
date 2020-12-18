import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  deviceXs: boolean=false;
  constructor() {

   }

  ngOnInit(): void {
    
  }

myFunction() {
  console.log("in function");
    var x = document.getElementById("myLinks");
    if(x!=null)
    {
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }

  }

}
