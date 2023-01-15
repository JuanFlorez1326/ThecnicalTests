import { Component, ViewChild } from '@angular/core';
import { TableItemEditableComponent } from '../table-item-editable/table-item-editable.component';
import { ProductService } from '../../../core/services/product.service';
import { CreateProduct } from '../../../core/interfaces/create-product.interface';
import { Status } from '../table-item/table-item.component';
import { AuthService } from 'src/app/users/services/auth.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(private productSrv: ProductService, private authSrv: AuthService) { }

  @ViewChild(TableItemEditableComponent) tableItemEditable!: TableItemEditableComponent;

  public fromNumber(status: Status): string {
    return Object.values(Status).includes(status) ?
     Status[status].toString().toLowerCase()
     : "undefined";
  }

  public saveItem() {
    const editValues = this.tableItemEditable.retrieveItemValues();
    const createProduct = {
      name: editValues.name ?? "",
      price: editValues.price ?? 0,
      currency: editValues.currency ?? "USD",
      status: this.fromNumber(editValues.status ?? 0)
    } as CreateProduct;
    const { id } = this.authSrv.getUserInfo();
    this.productSrv.saveProduct(createProduct, id).subscribe({
      next: () => {
        alert("Producto registrado con éxito")
      },
      error: (e) => {
        console.error(e);
      }
    });
  }
}
