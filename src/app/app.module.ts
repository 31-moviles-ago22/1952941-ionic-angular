import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';
import { ArticulosComponent } from './articulos/articulos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,                                 
    ArticulosComponent, InicioComponent, ArticuloDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
