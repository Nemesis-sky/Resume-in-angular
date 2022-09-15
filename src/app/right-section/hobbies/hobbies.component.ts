import { Component, OnInit,Input } from '@angular/core';
import {faBook,faGamepad,faDumbbell} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
@Input() hobbies:any[]=[];
Reading=faBook;
Gaming=faGamepad;
Gymming=faDumbbell;
  constructor() { }

  ngOnInit(): void {
  }

}
