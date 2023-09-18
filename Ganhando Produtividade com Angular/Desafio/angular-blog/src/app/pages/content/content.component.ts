import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  imgCover: string ="https://www.ft.com/__origami/service/image/v2/images/raw/https%253A%252F%252Fcms-image-bucket-production-ap-northeast-1-a7d2.s3.ap-northeast-1.amazonaws.com%252Fimages%252F9%252F5%252F0%252F6%252F46536059-3-eng-GB%252FCropped-169470323320230914N%2520China%2520hypersonic%2520missile.JPG?width=700&fit=cover&gravity=faces&dpr=2&quality=medium&source=nar-cms"
  @Input()
  contentTitle: string = "China asdadadad akdj"
  @Input()
  contentDescription: string = "klasjdlkasjd China akljsdlakjhsdad"

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
      )

  }

}
