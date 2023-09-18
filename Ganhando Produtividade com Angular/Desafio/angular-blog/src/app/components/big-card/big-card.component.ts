import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  
  @Input() 
  photoCover:string ="" || "https://i.stack.imgur.com/y9DpT.jpg"
  @Input() 
  cardTitle:string = ""
  @Input() 
  cardDescription:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
