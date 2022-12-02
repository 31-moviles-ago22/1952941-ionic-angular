import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators, Form, ReactiveFormsModule } from '@angular/forms';
import { FirestoreServiceService } from '../firestore-service.service';
import { Event } from '@angular/router';
import { ReactNativeAsyncStorage } from 'firebase/auth';
import { Target } from '@angular/compiler';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  id:any
  nombre:any
  precio:any

  public archivos: any = []
  
 form: FormGroup;
 /* form=new FormGroup({
    id: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    precio: new FormControl('',Validators.required)
  })*/

  constructor(
    private fireService: FirestoreServiceService,
    private formBuilder: FormBuilder
    ) {
      this.form=this.formBuilder.group({
        id: ['',Validators.required],
        nombre: ['',Validators.required],
        precio: ['',Validators.required]
      });
     }

  ngOnInit(): void {
  }

  async agregarData(){
    console.log(this.form.value.id)
    this.id=this.form.value.id
    this.nombre=this.form.value.nombre
    this.precio=this.form.value.precio
  }

  createData(){
    this.agregarData()
    this.fireService.guardarDatos(this.id,this.nombre,this.precio)
  }

  capturarFile(event: any): any {
    const archivoCapturado = event.target.files[0]
    this.archivos.push(archivoCapturado)
    console.log(event.target.files);
  }

}
