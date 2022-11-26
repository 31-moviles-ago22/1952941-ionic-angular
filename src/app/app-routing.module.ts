import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  /*{
    path: 'encabezado',
    component: EncabezadoComponent
  },*/
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
},
{
  path: 'register', 
  component: RegisterComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'admin',
  component: AdminComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
