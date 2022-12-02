import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Event } from '@angular/router';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Articulo, ArticuloDetalle } from '../articulo.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { FirestoreServiceService } from '../firestore-service.service';
import { Firestore } from '@angular/fire/firestore';

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

  getData:any=[];

  private coleccionFirebase: AngularFirestoreCollection<Articulo>;
  articulosFirebase: Observable<Articulo[]>;


  private articuloConsulta : AngularFirestoreDocument<ArticuloDetalle>;
  idArticulo: string;
  //pruebas-no-definitivo:
  //nombreArticulo: string;
  
  //
  articuloDetalle: Observable<ArticuloDetalle|undefined>;

  meta : Observable<any>;

  constructor(
    private fireService:FirestoreServiceService,
    private aFirestore: AngularFirestore,
    private aFireStorage: AngularFireStorage,

    private ruta: ActivatedRoute,
    private af: AngularFirestore,
    private storage : AngularFireStorage
    ) {
      this.idArticulo =  this.ruta.snapshot.params['id'];
      this.articuloConsulta = this.af.doc<ArticuloDetalle>(`/Articulos/${this.idArticulo}`); 
      this.articuloDetalle = this.articuloConsulta.valueChanges();

      //pruebas-no-definitivo
      //this.nombreArticulo =  this.ruta.snapshot.params['nombre'];
      //this.articuloConsulta = this.af.doc<ArticuloDetalle>(`/Articulos/${this.nombreArticulo}`);
      
      //

      const ref = this.storage.ref('articulos');
      this.meta = ref.getMetadata();


      this.coleccionFirebase = this.aFirestore.collection<Articulo>('Articulos');
      this.articulosFirebase = this.coleccionFirebase.valueChanges({idField: 'id'});
      //pruebas-no-definitivo
      //this.articulosFirebase = this.coleccionFirebase.valueChanges({nameField: 'nombre'});
      //
    

     }

     articulosColeccionFb: Articulo[]=[];

  ngOnInit(): void {
    /*this.articuloConsulta.valueChanges().subscribe(res => {
      console.log(res);
    });
    //this.buscarArticulo();

    console.log(this.meta)*/



    this.fireService.getDate().subscribe((data:any)=>{
      this.getData=data
      console.log(this.getData)
    })
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
