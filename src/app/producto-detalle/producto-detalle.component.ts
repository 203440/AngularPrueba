import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  producto!: Producto;


  // Aquí estamos usando ActivatedRoute para obtener parámetros de la ruta
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Para este ejemplo, estamos obteniendo el producto directamente.
    // En una aplicación real, probablemente buscaríamos el producto por ID en un servicio o API.
    const id = +this.route.snapshot.paramMap.get('id')!;
    /*this.producto = /* código para obtener el producto por su ID */;
  }
}
