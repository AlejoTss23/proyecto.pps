import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Caja } from './caja.model';
@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent {
  numeroTropa: number = 0;
  fechaFaena:string;
  fechaVencimiento:string; 
  procedencia: string;
  tipoCorte:string;
  pesoNeto:string;
  codigoQR:string;
  codigoBarras:number = 0;
  constructor(private authService: AuthService) { }

  guardarEnCaja() {
    const datos: Caja = {
      numeroTropa: 100000, 
      fechaFaena: '',
      fechaVencimiento: '', 
      procedencia: '', 
      tipoCorte: '',
      pesoNeto:'' ,
      codigoQR: '',
      codigoBarras:10000000,
    };

    this.authService.guardarEnCaja(datos).subscribe(response => {
      console.log('Datos guardados en Caja:', response);
    });
  }
  }
