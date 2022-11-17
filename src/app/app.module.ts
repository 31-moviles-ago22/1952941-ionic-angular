import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';
import { ArticulosComponent } from './articulos/articulos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { CarritoComponent } from './carrito/carrito.component';
import {FormsModule} from '@angular/forms'

import { initializeApp } from "firebase/app";
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import {AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';


const app = initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,                                 
    ArticulosComponent, InicioComponent, ArticuloDetalleComponent, CarritoComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
  ],
  providers: [{ provide: BUCKET, useValue: '' }],
  bootstrap: [AppComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
