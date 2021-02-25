import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GongyingshangPage } from './gongyingshang.page';

const routes: Routes = [
  {
    path: '',
    component: GongyingshangPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GongyingshangPage]
})
export class GongyingshangPageModule {}
