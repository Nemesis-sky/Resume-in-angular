import { Component, Input, OnInit } from '@angular/core';
interface Ieduaction{
  degreename:string,
  collegename:string,
    duration:string,
    percentage:number
}
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {
 
@Input() education:Ieduaction[]=[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.education)
  }

}
