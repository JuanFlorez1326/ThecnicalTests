import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-characters',
  templateUrl: './table-characters.component.html',
  styles: [`.container-table { width:95%; margin:auto; }`]
})
export class TableCharactersComponent {
  @Input('table-characters') characters$!: any;
  @Input() displayedColumns!: string[];
}