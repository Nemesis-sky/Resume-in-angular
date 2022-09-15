import { Component, OnInit,Input } from '@angular/core';
import { faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
@Input() certificates:any[]=[]
faLink=faArrowUpRightFromSquare;
  constructor() { }

  ngOnInit(): void {
  }

}
