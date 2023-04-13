import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PQR } from '../models/PQR';

@Injectable({
  providedIn: 'root'
})
export class PqrService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPqr(id: number) {
    return this.http.get(`${this.API_URI}/GetPqr/${id}`);
  }

  listAllPqrs() {
    return this.http.get(`${this.API_URI}/ListAllPqr`);
  }

  createPqr(pqr: PQR) {
    return this.http.post(`${this.API_URI}/CreatePqr`, pqr);
  }

  updatePqr(id: string | number, updatedPqr: PQR) {
    return this.http.put(`${this.API_URI}/UpdatePqr/${id}`, updatedPqr);
  }

  deletePqr(id: number) {
    return this.http.delete(`${this.API_URI}/DeletePqr/${id}`);
  }
}