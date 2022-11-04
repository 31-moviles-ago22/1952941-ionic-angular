import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Event } from '@angular/router';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarArticulo();
  }

  articulos: any = [
    {
      id: 1,
      nombre: "Celular 1", 
      imagen: 'assets/imagenes/art1.jpg',
      precio: 2099,
      reviews: [
        'malisimo! Se rompio a la primera lavada',
        'La gorra es mas pequeña de lo normal - no vale el precio'
      ]
    },
    {
      id: 2,
      nombre: "Cel 2", 
      imagen: 'assets/imagenes/art2.jpg',
      precio: 4990,
      reviews: [
        'buenisimo, me encanto',
        'Ultra coool!'
      ]
    },
    {
      id: 3,
      nombre: "Cel 3", 
      imagen: 'assets/imagenes/art3.jpg',
      precio: 4899,
      reviews: [
        'Hola, este articulo es de muy bueno, el vendedor se comunico y fue muy agradable tratar con usted.'
      ]
    },
    {
      id: 4,
      nombre: "Cel 4", 
      imagen: 'assets/imagenes/art4.jpg',
      precio: 5700,
      reviews: [
        'WOW - no vuelvo a comprar esta bolsa. En la foto no se aprecia pero es mas pequeña de lo que parece pero la calidad es buena'
      ]
    },
    {
      id: 5,
      nombre: "Cel 5", 
      imagen: 'assets/imagenes/art5.jpg',
      precio: 5500,
      reviews: [
        'simplemente glorioso'
      ]
    },
    {
      id: 6,
      nombre: "Cel 6", 
      imagen: 'assets/imagenes/art6.jpg',
      precio: 6000
    },
    {
      id: 7,
      nombre: "Cel 7", 
      imagen: 'assets/imagenes/art7.jpg',
      precio: 10999
    },
    {
      id: 8,
      nombre: "Cel 8", 
      imagen: 'assets/imagenes/art8.jpg',
      precio: 6800
    },
    {
      id: 9,
      nombre: "Cel 9", 
      imagen: 'assets/imagenes/art9.jpg',
      precio: 6999
    },
    {
      id: 10,
      nombre: "Cel 10", 
      imagen: 'assets/imagenes/art10.jpg',
      precio: 7800
    },
    {
      id: 11,
      nombre: "Cel 11", 
      imagen: 'assets/imagenes/art11.jpg',
      precio: 3800
    },
    {
      id: 12,
      nombre: "Cel 12", 
      imagen: 'assets/imagenes/art12.jpg',
      precio: 3400
    },
    {
      id: 13,
      nombre: "Cel 13", 
      imagen: 'assets/imagenes/art13.jpg',
      precio: 5990
    },
    {
      id: 14,
      nombre: "Cel 14", 
      imagen: 'assets/imagenes/art14.jpg',
      precio: 5000
    },
    {
      id: 15,
      nombre: "Cel 15", 
      imagen: 'assets/imagenes/art15.jpg',
      precio: 4799
    },
    {
      id: 16,
      nombre: "Cel 16", 
      imagen: 'assets/imagenes/art16.jpg',
      precio: 4500
    },
    {
      id: 17,
      nombre: "Cel 17", 
      imagen: 'assets/imagenes/art17.jpg',
      precio: 1400
    },
    {
      id: 18,
      nombre: "Cel 18", 
      imagen: 'assets/imagenes/art18.jpg',
      precio: 1500
    },
    {
      id: 19,
      nombre: "Cel 19", 
      imagen: 'assets/imagenes/art19.jpg',
      precio: 299
    },
    {
      id: 20,
      nombre: "Cel 20", 
      imagen: 'assets/imagenes/art20.jpg',
      precio: 500
    },
    
  ];
  idArticulo: string = this.ruta.snapshot.params['id'];

  articuloDetalle: any = {};

  buscarArticulo(){
    for(let i = 0; i < this.articulos.length; i++){
      if(this.idArticulo == this.articulos[i].id){
        this.articuloDetalle = this.articulos[i];
      }
    }
  }

  carro: number=0;
  cantidad: number=1;
  @Output() carroCopia: number = 0

  agregarCarrito(){
    //this.carro++;
    let total=this.carro+this.cantidad;
    this.carro=total;
    
    
  }

  seleccionarCantidad(ev: any){
    //console.log(this.carro);
    this.cantidad=parseInt(ev.target.value);
  }

}
