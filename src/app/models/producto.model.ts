export class Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  cantidad?: number;

  constructor() {
    this.id = 0; // valor inicial
    this.nombre = 'Libro'; // valor inicial
    this.descripcion = '';
    this.precio = 0;
    this.imagen = '';
    this.cantidad = 1;
  }
}


