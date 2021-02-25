import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuppliercyglPage } from './suppliercygl.page';

const routes: Routes = [
  {
    path: '',
    component: SuppliercyglPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuppliercyglPage]
})
export class SuppliercyglPageModule {}
