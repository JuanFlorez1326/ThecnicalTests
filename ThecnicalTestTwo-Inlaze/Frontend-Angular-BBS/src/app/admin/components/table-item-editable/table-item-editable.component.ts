import { Component } from '@angular/core';
import { Status } from '../table-item/table-item.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type OptionValue = { value: any, label: string }

@Component({
  selector: 'app-table-item-editable',
  templateUrl: './table-item-editable.component.html',
  styleUrls: ['./table-item-editable.component.scss']
})
export class TableItemEditableComponent {

  constructor(private formBuilder: FormBuilder){
  }

  statusOptions: OptionValue[] = [
    { value: undefined, label: "Seleccione un estado"},
    { value: Status.FOR_SALE, label: "En venta"},
    { value: Status.SOLD, label: "Agotado"},
    { value: Status.SOON, label: "Próximamente en venta"},
  ]

  currencyOptions: OptionValue[] = [
    { value: "USD", label: "$"},
    { value: "GBP", label: "£"},
    { value: "PEN", label: "S/"},
  ];

  productData = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['' , [Validators.required]],
      currency: ['' , [Validators.required]],
      status: [0 , [Validators.required]],
    });

  public retrieveItemValues() {
    return this.productData.value;
  }
}
