import { Component,
   OnInit,
   DoCheck,
   AfterContentChecked,
   AfterContentInit,
   AfterViewChecked,
   AfterViewInit,
  OnDestroy } from '@angular/core';

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
              AfterViewInit,
              OnDestroy   {

    quantity:number = 0

  constructor() {

  
   }
  ngOnDestroy(): void {
    console.log("See ya")
  }

   add(){
    this.quantity += 1
   }

   sub(){
    this.quantity -=1
   }

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
