import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuppliergzdspPage } from './suppliergzdsp.page';

const routes: Routes = [
  {
    path: '',
    component: SuppliergzdspPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuppliergzdspPage]
})
export class SuppliergzdspPageModule {}
