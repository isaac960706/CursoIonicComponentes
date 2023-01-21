import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPersonalizado'
})
export class FiltroPersonalizadoPipe implements PipeTransform {

  transform(arreglo: any[],
    texto: string,
    columna: string): any[] {

      if(texto === '' || texto === undefined || texto === null) {
        return arreglo;
      }
      if (!arreglo) {
        return arreglo;
      }
   
      texto = texto.toLocaleLowerCase();
   
   
      return arreglo.filter(
        categorias => categorias[columna].toLowerCase().includes(texto)
      );
  }

}
