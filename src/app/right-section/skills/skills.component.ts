import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
@Input() skills:any[]=[]
store:any="";

  constructor() { }
  checkLevel(level:any){
      if(level=="Beginner"){
         return "beginner";
      }
      if(level=="Intermediate"){
        return "intermediate";
     }
     if(level=="professional"){
      return "professional";
    }
    return null;
  }
  ngOnInit(): void {
  }

}
