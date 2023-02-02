import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {

  name = "Alejandro";

  public cambiarNombre = (): void => {

    this.name = "Tus muertos";

  }

  constructor() {
    console.log("Me estoy construyendo");
  }

  ngOnInit(): void {
    console.log("Holaaa, ya me puedes ver");
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("Estoy cambiando");
  }

  ngOnDestroy(): void {

  }

}
