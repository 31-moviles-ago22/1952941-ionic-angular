import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {addDoc, collection, deleteDoc, doc, Firestore,getDoc} from "firebase/firestore"; 
import { Observable } from 'rxjs';
import { collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreServiceService {

  constructor(private firestore:Firestore) { }

  async guardarDatos(id:any, nombre: any, precio:any){
    const obj=Object.assign({
      "id": id,
      "nombre": nombre,
      "precio": precio
    });

    //para agregar los datos a la base
    const Ref=collection(this.firestore, 'Articulos');

    
  }
  
  
  getDate():Observable<any[]>{
    const ref=collection(this.firestore, 'Articulos');
    return collectionData(ref, { idField: 'id'}) as Observable<any>
  }
}
