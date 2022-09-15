import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchjsonService {
url="https://gist.githubusercontent.com/Nemesis-sky/d2c625dd4b662a49736ba5d8921345dc/raw/885ea76b31b01f57930fe5e8bf4dc305ee39a986/resume.json" ;
 constructor(private http :  HttpClient) {}
  callApi(){
   return this.http.get(this.url);
  }
}
