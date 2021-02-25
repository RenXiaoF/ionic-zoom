import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactscarddetailsPage } from './contactscarddetails.page';

const routes: Routes = [
  {
    path: '',
    component: ContactscarddetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactscarddetailsPage]
})
export class ContactscarddetailsPageModule {}
