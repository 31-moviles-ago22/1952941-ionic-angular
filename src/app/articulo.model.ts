export interface Articulo{ 
    id: string;
    nombre: string;
    precio: number;
    imagen: string;
  }

  export interface ArticuloDetalle{ 
    id: string;
    nombre: string;
    precio: number;
    imagen: string;
    review: Array<string>;
  }