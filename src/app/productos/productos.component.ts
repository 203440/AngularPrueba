import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [
    { id: 1, nombre: 'Lápiz', descripcion: 'Lápiz HB', precio: 0.5, imagen: 'url_a_imagen_lapiz.jpg' },
    { id: 2, nombre: 'Cuaderno', descripcion: 'Cuaderno A4', precio: 2.5, imagen: 'url_a_imagen_cuaderno.jpg' },
    // ... puedes añadir más productos aquí
  ];

  constructor() { }

  ngOnInit(): void { }

}
