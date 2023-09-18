import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { PortfolioModule } from '../portfolio/portfolio.module';



@NgModule({
  declarations: [
    TitleComponent
  ],
  exports:[
    TitleComponent,
    PortfolioModule
  ],
  imports: [
    CommonModule
  ]
})
export class IndexModule { }
