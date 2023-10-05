import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { LoginComponent } from './login/login.component';
import { CortesComponent } from './cortes/cortes.component';
import { CajaComponent } from './caja/caja.component';
import { AuthService } from './services/auth.service';
@NgModule({
  
  declarations: [
    AppComponent,
    MiComponenteComponent,
    VistaPrincipalComponent,
    LoginComponent,
    CortesComponent,
    CajaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Asegúrate de que FormsModule esté importado aquí
      // ... otros módulos importados
    ],
  
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
