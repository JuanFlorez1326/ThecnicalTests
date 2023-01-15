import { Component, Input } from '@angular/core';

export enum Status {
  FOR_SALE,
  SOLD,
  SOON,
}

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss'],
})
export class TableItemComponent {
  constructor() {}

  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() buyer: string = '';
  @Input() invoiceDate: Date = new Date(Date.now());
  @Input() invoiceCreationDate: Date = new Date(Date.now());
  @Input() status: Status = Status.SOON;
}
