import { Component } from '@angular/core';
import {FetchjsonService} from './fetchjson.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-app';
  jsonDatainRoot:any=null;
  constructor(private resumedata:FetchjsonService){
    this.resumedata.callApi().subscribe((res)=>{
    this.jsonDatainRoot=res;
    console.log(this.jsonDatainRoot);
   });
   
  }
}
