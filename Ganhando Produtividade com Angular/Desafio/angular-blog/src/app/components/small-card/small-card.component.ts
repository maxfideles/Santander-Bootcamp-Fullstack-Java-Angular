import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {


  @Input()
  photoCover:string = "" ||"https://i.stack.imgur.com/y9DpT.jpg"
  @Input()
  cardTitle:string = ""
  @Input ()
  today:string= ""
  @Input ()
  id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
