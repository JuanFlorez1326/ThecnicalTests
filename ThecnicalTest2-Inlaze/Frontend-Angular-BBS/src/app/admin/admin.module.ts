import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './components/table/table.component';
import { TableItemComponent } from './components/table-item/table-item.component';
import { StatusToClassPipe } from './pipes/status-to-class.pipe';
import { StatusToDisplayPipe } from './pipes/status-to-display.pipe';
import { FalsyItemPipe } from './pipes/falsy-item.pipe';
import { TableItemEditableComponent } from './components/table-item-editable/table-item-editable.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent,
    TableItemComponent,
    StatusToClassPipe,
    StatusToDisplayPipe,
    FalsyItemPipe,
    TableItemEditableComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AdminModule {}
