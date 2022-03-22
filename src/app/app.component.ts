import { Component , OnInit} from '@angular/core';

import { BackendService, Pelicula} from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'ProyectoFront';

  listaPeliculas: any = [] 
  user: Pelicula = new Pelicula("","",NaN);

  constructor(private servicio:BackendService){}

  ngOnInit():void {
    this.servicio.getPeliculas().subscribe(res => {
      console.log(res)
      this.listaPeliculas = res
    })
  }

  createMovie(): void {
    this.servicio.postPeliculas(this.user)
        .subscribe( data => {
          alert("Pelicula agregada con exito !!");
          window.location.reload();
  });

  };

}
