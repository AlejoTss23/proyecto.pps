import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { LoginComponent } from './login/login.component';
import { CortesComponent } from './cortes/cortes.component';
import { CajaComponent } from './caja/caja.component';
const routes: Routes = [
  { path: '', component: VistaPrincipalComponent },
//  { path: 'administracion', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product/:id', component: MiComponenteComponent },

  { path: '*', component: MiComponenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }









