import { Component } from '@angular/core';
import { IPersona } from './models/ipersona';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public title: string = "primer-proyecto-angular";
  public edad: number = 5;
  public alive: boolean = true;

  saludar(): void {
    console.log("Holaaaa");
  }

  calcularEdad(): number {
    return this.edad + 5;
  }

  public personas: IPersona[] = [

    {
      nombre: "Alex",
      edad: 30,
      alive: false,
      domino: "TypesCript",
      gafas: false,
      monstros: [{
        nombre: "rafargg",
        superpoder: "Escalar picos",
      },
      {
        nombre: "silla super malvada para nada ergonómica de 20 pavos",
        superpoder: "Provocar lumbalgias severas",
      },]
    },
    {
      nombre: "Inma",
      edad: 33,
      alive: true,
      monstros: [{
        nombre: "rafargg2 JUNIOR",
        superpoder: "Escalar piquitos",
      },]
    }

  ]

}
