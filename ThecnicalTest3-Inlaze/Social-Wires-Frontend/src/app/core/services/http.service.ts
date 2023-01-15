import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class httpService {
  constructor(private http: HttpClient) {}

  async get<T>(url: string): Promise<Observable<Object>> {
    return this.http.get(url);
  }
}
