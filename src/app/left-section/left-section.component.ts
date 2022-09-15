import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {
@Input() leftsectiondata:any=null;
  constructor() { }

  ngOnInit(): void { 
    console.log(this.leftsectiondata);
  }

}
