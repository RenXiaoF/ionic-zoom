import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvoiceProshipmentPage } from './invoice-proshipment.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceProshipmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvoiceProshipmentPage]
})
export class InvoiceProshipmentPageModule {}
