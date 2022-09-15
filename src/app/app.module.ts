import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { RightSectionComponent } from './right-section/right-section.component';
import { ContactInfoComponent } from './left-section/contact-info/contact-info.component';
import { EducationComponent } from './left-section/education/education.component';
import { CertificatesComponent } from './left-section/certificates/certificates.component';
import { ObjectiveComponent } from './right-section/objective/objective.component';
import { SkillsComponent } from './right-section/skills/skills.component';
import { ProjectsComponent } from './right-section/projects/projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HobbiesComponent } from './right-section/hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSectionComponent,
    RightSectionComponent,
    ContactInfoComponent,
    EducationComponent,
    CertificatesComponent,
    ObjectiveComponent,
    SkillsComponent,
    ProjectsComponent,
    HobbiesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
