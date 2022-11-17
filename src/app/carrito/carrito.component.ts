import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()carrito: number=1;
  @Input() articulo: any;

  cantidadCarrito($event: number){
    this.carrito=$event
  }

}
