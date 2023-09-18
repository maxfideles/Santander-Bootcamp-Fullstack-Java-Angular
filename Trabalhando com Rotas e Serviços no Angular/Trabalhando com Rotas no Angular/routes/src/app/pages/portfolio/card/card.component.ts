import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  private id:string | null=""
  constructor(
    private route: ActivatedRoute, 
    private timerRedirector:Router
    ) { }

  ngOnInit(): void {
    //Forcing the routing to a specific component
    setInterval(() =>  this.timerRedirector.navigate([''])  ,10000)

  //Getting the parameters : http://localhost:4200/portfolio/{1}
    this.route.paramMap.subscribe(value =>console.log(value.get("id")))
  //Getting Querys http://localhost:4200/portfolio/2{?name=Max&surname=Test}
    this.route.queryParams.subscribe(value => console.log(value))
  
  }

}
