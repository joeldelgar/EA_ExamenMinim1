import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { Activity } from '../models/activity';
import { FAQS } from '../models/FAQS';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.url + '/messages');
  }

  getMessagesByReceiver(id: string): Observable<Message[]> {
    return this.http.get<Message[]>(this.url + '/messages/receiver/' + id);
  }

  getMessagesByActivity(id: string): Observable<Message[]> {
    return this.http.get<Message[]>(this.url + '/messages/activity/' + id);
  }

  getMessagesByQuestion(id:string): Observable<Message[]> {
    return this.http.get<Message[]>(this.url + 'messages/faqs/' +id);
  }

  deleteMessage(id: string): Observable<string> {
    return this.http.delete(this.url + '/messages/' + id, {responseType: 'text'})
  }

  addMessageUserByName(message: Message): Observable<string> {
    return this.http.post(this.url + '/messages/userName', message, {responseType: 'text'});
  }

  addMessageActivityByName(message: Message): Observable<string> {
    return this.http.post(this.url + '/messages/activityName', message, {responseType: 'text'});
  }

  addMessageFAQSByQuestion(message: Message): Observable<string>{
    return this.http.post(this.url + '/messages/question', message, {responseType: 'text'})
  }
  
}
