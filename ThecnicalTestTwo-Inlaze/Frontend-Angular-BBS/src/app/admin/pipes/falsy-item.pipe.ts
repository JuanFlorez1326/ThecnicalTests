import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'falsyItem'
})
export class FalsyItemPipe implements PipeTransform {

  transform(value: any, caption: string): any {
    return !!value ? value : caption;
  }

}
