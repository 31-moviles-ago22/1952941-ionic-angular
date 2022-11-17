import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Event } from '@angular/router';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Articulo, ArticuloDetalle } from '../articulo.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';

/*export interface articuloDetalle{
  id: number;
  nombre: string;
  precio: number;
  imagen: string; 
}*/

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {

  private articuloConsulta : AngularFirestoreDocument<ArticuloDetalle>;
  idArticulo: string;
  articuloDetalle: Observable<ArticuloDetalle|undefined>;

  meta : Observable<any>;

  constructor(private ruta: ActivatedRoute,
    private af: AngularFirestore,
    private storage : AngularFireStorage
    ) {
      this.idArticulo =  this.ruta.snapshot.params['id'];
      
      this.articuloConsulta = this.af.doc<ArticuloDetalle>(`/articulos/${this.idArticulo}`); 

      this.articuloDetalle = this.articuloConsulta.valueChanges();

      const ref = this.storage.ref('articulos');
      this.meta = ref.getMetadata();

     }

  ngOnInit(): void {
    this.articuloConsulta.valueChanges().subscribe(res => {
      console.log(res);
    });
    //this.buscarArticulo();

    console.log(this.meta)
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
