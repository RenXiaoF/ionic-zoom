import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'producing-department', loadChildren: './producing-department/producing-department.module#ProducingDepartmentPageModule' },
  { path: 'arfdpay', loadChildren: './arfdpay/arfdpay.module#ArfdpayPageModule' },
  { path: 'weixintuisong', loadChildren: './weixintuisong/weixintuisong.module#WeixintuisongPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
