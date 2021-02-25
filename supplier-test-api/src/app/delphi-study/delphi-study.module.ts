import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DelphiStudyPage } from './delphi-study.page';

const routes: Routes = [
  {
    path: '',
    component: DelphiStudyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DelphiStudyPage]
})
export class DelphiStudyPageModule {}
