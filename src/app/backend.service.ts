import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class Pelicula{
  constructor(
    public nombre:string,
    public descripcion:string,
    public calificacion:number,
  ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  private peliculasUrl: string;

  constructor(private http: HttpClient) {
    this.peliculasUrl = 'http://localhost:8080/api/peliculas/';
  }

  public getPeliculas(): Observable<any[]> {
    return this.http.get<any[]>(this.peliculasUrl);
  }

  public postPeliculas(peli: Pelicula) {
    return this.http.post<Pelicula>(this.peliculasUrl,peli);
  }
  
}
