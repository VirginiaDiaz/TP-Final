import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarMiles'
})
export class MostrarMilesPipe implements PipeTransform {

  transform(value: any){
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

}
