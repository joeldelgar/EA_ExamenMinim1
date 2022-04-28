import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { FAQS } from '../models/FAQS';

@Injectable({
    providedIn: 'root'
})

export class FAQSService{
    url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getFAQS(): Observable<FAQS[]> {
    return this.http.get<FAQS[]>(this.url + '/faqs');
  }

  getFAQSbyQuestion(question:string): Observable<FAQS>{
    return this.http.get<FAQS>(this.url + '/faqs/'+question);
  }

  deleteFAQS(tittle: string): Observable<string> {
    return this.http.delete(this.url + '/FAQS/' + tittle, {responseType: 'text'})
  }

  updateFAQS(question: string, faqs:FAQS): Observable<string> {
    return this.http.put(this.url + '/FAQS' + question, faqs, {responseType: 'text'});
  }

  addFAQS(faqs:FAQS): Observable<string> {
    return this.http.post(this.url + '/FAQS', faqs, {responseType: 'text'}) ;
  }

  
}