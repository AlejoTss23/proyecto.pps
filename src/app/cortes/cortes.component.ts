import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Cortes } from './cortes.model';

@Component({
  selector: 'app-cortes',
  templateUrl: './cortes.component.html',
  styleUrls: ['./cortes.component.css']
})
export class CortesComponent {
  numeroTropa: number = 0;
  fechaFaena:string;
  fechaVencimiento:string; 
  procedencia: string;
  tipoCorte:string;
  pesoNeto:string;
  codigoQR:string;
  constructor(private authService: AuthService) { }

  guardarEnCortes() {
    const datos: Cortes = {
      numeroTropa: 100000, 
      fechaFaena: '',
      fechaVencimiento: '', 
      procedencia: '', 
      tipoCorte: '',
      pesoNeto:'' ,
      codigoQR: '',
    };

    this.authService.guardarEnCortes(datos).subscribe(response => {
      console.log('Datos guardados en Cortes:', response);
    });
  }
  }


