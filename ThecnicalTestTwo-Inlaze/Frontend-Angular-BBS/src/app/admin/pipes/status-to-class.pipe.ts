import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../components/table-item/table-item.component';

@Pipe({
  name: 'statusToClass'
})
export class StatusToClassPipe implements PipeTransform {

  transform(value: Status): string {
    return Status[value].toString().toLowerCase();
  }

}
