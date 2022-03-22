import { Component , OnInit} from '@angular/core';

import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProyectoFront';

  constructor(private servicio:BackendService){}

  listaPeliculas: any = [] 

  ngOnInit():void {
    this.servicio.getPeliculas().subscribe(res => {
      console.log(res)
      this.listaPeliculas = res
    })
  }

}
