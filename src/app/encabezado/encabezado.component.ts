import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  carro: number = 0;
  cantidad: number=0;
  @Output() carroCopia: number = 0;
  

  agregarCarrito(){
    //this.carro++;
    let total=this.carro+this.cantidad;
    this.carro=total;
    
    
  }
  
}
