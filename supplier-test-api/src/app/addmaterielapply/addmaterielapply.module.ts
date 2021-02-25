import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddmaterielapplyPage } from './addmaterielapply.page';

const routes: Routes = [
  {
    path: '',
    component: AddmaterielapplyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddmaterielapplyPage]
})
export class AddmaterielapplyPageModule {}
