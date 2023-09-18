import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  private id:string | null=""
  constructor(private route: ActivatedRoute) { 
 
  }

  ngOnInit(): void {
  //Getting the parameters : http://localhost:4200/portfolio/{1}
    this.route.paramMap.subscribe(value =>console.log(value.get("id")))

    this.route.queryParams.subscribe(value => console.log(value))
  
  }

}
