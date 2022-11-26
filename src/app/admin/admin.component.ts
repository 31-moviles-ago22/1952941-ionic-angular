import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators, Form } from '@angular/forms';
import { FirestoreServiceService } from '../firestore-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  id:any
  nombre:any
  precio:any
  
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

}
