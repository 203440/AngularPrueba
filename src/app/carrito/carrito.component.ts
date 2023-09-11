import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productosEnCarrito: Producto[] = []; // Esta debería ser una lista de productos con cantidad

  constructor() { }

  ngOnInit(): void {
    // Cargar productos del carrito, probablemente desde un servicio
  }

  eliminarProducto(producto: Producto): void {
    // Código para eliminar producto del carrito
  }

  modificarCantidad(producto: Producto, cantidad: number): void {
    const productoEnCarrito = this.productosEnCarrito.find(p => p.id === producto.id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad = cantidad;
    }
  }


  getTotal(): number {
    return this.productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * 1), 0);
  }
}
