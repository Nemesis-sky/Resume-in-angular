import { Component, OnInit,Input } from '@angular/core';
import { faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
@Input() projects:any[]=[];
link=faArrowUpRightFromSquare;
  constructor() { }

  ngOnInit(): void {
  }

}
