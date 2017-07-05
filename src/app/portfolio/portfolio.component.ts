import { Component, OnInit } from '@angular/core';
import { MasonryOptions } from 'angular2-masonry';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public myOptions: MasonryOptions = {
    transitionDuration: '0.8s',
    gutter: 10,
    columnWidth: 160,
    itemSelector: '.grid-item',
    percentPosition: true
  };

  constructor() { };

  ngOnInit() {
  }
}
