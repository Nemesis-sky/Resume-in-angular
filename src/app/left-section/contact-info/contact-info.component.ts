import { Component, Input, OnInit } from '@angular/core';
import { faLocationDot,faEnvelope,faPhone,faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import {faGithubSquare,faLinkedin} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  // all font awesome variables
  faLocationDot=faLocationDot;
  faEnvelope=faEnvelope;
  faPhone=faPhone;
  faCalendarDays=faCalendarDays;
  faGithubSquare=faGithubSquare;
  faLinkedin=faLinkedin;
  
@Input() contact:any="";
  constructor() { }

  ngOnInit(): void {
    console.log(this.contact);
  }

}
