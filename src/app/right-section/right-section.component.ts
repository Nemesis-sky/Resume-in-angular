import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css']
})
export class RightSectionComponent implements OnInit {
@Input() rightsectiondata:any=null;
  constructor() { }

  ngOnInit(): void {
  }

}
