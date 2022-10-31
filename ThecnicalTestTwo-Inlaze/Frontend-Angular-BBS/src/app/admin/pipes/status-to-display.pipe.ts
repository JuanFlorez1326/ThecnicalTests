import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../components/table-item/table-item.component';

@Pipe({
  name: 'statusToDisplay'
})
export class StatusToDisplayPipe implements PipeTransform {

  readonly displayValue: {[key: number]: string} = {
    0: "Disponible",
    1: "Agotado",
    2: "Próximamente en venta"
  }

  transform(value: Status): string {
    return value in this.displayValue ? this.displayValue[value] : "Desconocido";
  }

}
