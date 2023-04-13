import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Messages } from '../interfaces/messages.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private URL = 'http://localhost:3000/api';

  constructor(
    private readonly http: HttpClient
  ) {}

  getMessages() {
    return this.http.get<any>(this.URL + '/messages');
  }

  deleteMsg(id: string) {
    return this.http.delete<Messages>(this.URL + '/messages/' + id);
  }
}