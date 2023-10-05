import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent {
  productId: number; // ID del producto obtenido de la ruta
  nombreProducto: string;
  descripcionProducto: string;

  constructor(private router: Router) {
    // Simula obtener el ID del producto de la ruta (deberás modificar esto)
    this.productId = 1; // Por ahora, asumimos que es el producto con ID 1
    this.nombreProducto = '';
    this.descripcionProducto = '';
  }

  agregarProducto() {
    // Aquí puedes agregar la lógica para enviar el producto a la base de datos
    // Por ahora, simplemente mostraremos los detalles del producto en la consola
    console.log('Producto agregado:');
    console.log('Nombre:', this.nombreProducto);
    console.log('Descripción:', this.descripcionProducto);
  }
  
}
