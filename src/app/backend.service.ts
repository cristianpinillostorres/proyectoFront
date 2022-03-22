import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  private peliculasUrl: string;
  constructor(private http: HttpClient) {
    this.peliculasUrl = 'http://localhost:8080/peliculas';
  }

  public getPeliculas(): Observable<any[]> {
    return this.http.get<any[]>(this.peliculasUrl);
  }
  
}
