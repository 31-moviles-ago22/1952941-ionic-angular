import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';

const routes: Routes = [
  {
    path: 'articulos', 
    component: ArticulosComponent
},
{
    path: 'inicio', 
    component: InicioComponent
},
{
    path: 'detalle/:id',
    component: ArticuloDetalleComponent 
},
{
    path: '',
    redirectTo: '/articulos', 
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
