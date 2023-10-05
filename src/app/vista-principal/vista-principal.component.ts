import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})
export class VistaPrincipalComponent {
  products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1' },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2' }
    // Agrega más productos aquí
  ];

  constructor(private router: Router) { }

  verDetalles(id: number) {
    this.router.navigate(['/product', id]);
  }
}
