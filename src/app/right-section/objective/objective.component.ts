import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {
@Input() objective:any=null;
  constructor() { }

  ngOnInit(): void {
  }

}
