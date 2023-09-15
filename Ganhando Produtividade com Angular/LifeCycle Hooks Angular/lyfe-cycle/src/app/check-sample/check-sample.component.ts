import { Component,
   OnInit,
   DoCheck,
   AfterContentChecked,
   AfterContentInit,
   AfterViewChecked,
   AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent 
  implements OnInit, 
              DoCheck,
              AfterContentChecked,
              AfterContentInit,
              AfterViewChecked,
              AfterViewInit   {

  constructor() { }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
    }

  ngOnInit(): void {
    console.log("ngOnInit")

  }

}
