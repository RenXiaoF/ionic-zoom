import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  { path: '', redirectTo: 'suppliermy', pathMatch: 'full' },
  { path: 'suppliermy', loadChildren: './supplier-my/supplier-my.module#SupplierMyPageModule' },
  { path: 'gongneng', loadChildren: './gongneng/gongneng.module#GongnengPageModule' },
  { path: 'gongyingshang', loadChildren: './gongyingshang/gongyingshang.module#GongyingshangPageModule' },
  { path: 'suppliergzdsp', loadChildren: './suppliergzdsp/suppliergzdsp.module#SuppliergzdspPageModule' },
  { path: 'suppliercygl', loadChildren: './suppliercygl/suppliercygl.module#SuppliercyglPageModule' },
  { path: 'cygldetail/:id', loadChildren: './cygldetail/cygldetail.module#CygldetailPageModule' },
  { path: 'orderstatue/:index', loadChildren: './orderstatue/orderstatue.module#OrderstatuePageModule' },
  { path: 'orderdetail/:poid/:name', loadChildren: './order-detail/order-detail.module#OrderDetailPageModule' },
  { path: 'orderreschedule/:poid', loadChildren: './order-reschedule/order-reschedule.module#OrderReschedulePageModule' },
  { path: 'invoicestatue/:index', loadChildren: './invoicestatue/invoicestatue.module#InvoicestatuePageModule' },
  { path: 'invoicedetail/:poid/:name', loadChildren: './invoicedetail/invoicedetail.module#InvoicedetailPageModule' },
  { path: 'invoiceproshipment/:poid', loadChildren: './invoice-proshipment/invoice-proshipment.module#InvoiceProshipmentPageModule' },
  { path: 'sendgood/:poid/:userid', loadChildren: './send-good/send-good.module#SendGoodPageModule' },

  { path: 'contactscrad/:id', loadChildren: './contactscrad/contactscrad.module#ContactscradPageModule' },
  { path: 'contactscarddetails/:personInfo', loadChildren: './contactscarddetails/contactscarddetails.module#ContactscarddetailsPageModule' },
  
  { path: 'convertermy', loadChildren: './convertermy/convertermy.module#ConvertermyPageModule' },
  { path: 'banplanapply', loadChildren: './banplan-apply/banplan-apply.module#BanplanApplyPageModule' },
  { path: 'banplanapplylist', loadChildren: './banplan-apply-list/banplan-apply-list.module#BanplanApplyListPageModule' },
  { path: 'applydetail', loadChildren: './apply-detail/apply-detail.module#ApplyDetailPageModule' },
  { path: 'capacity', loadChildren: './capacity/capacity.module#CapacityPageModule' },
  { path: 'capacityrecord', loadChildren: './capacity-record/capacity-record.module#CapacityRecordPageModule' },
  { path: 'addmaterielapply', loadChildren: './addmaterielapply/addmaterielapply.module#AddmaterielapplyPageModule' },
  { path: 'allorders', loadChildren: './allorders/allorders.module#AllordersPageModule' },
  { path: 'materielapply', loadChildren: './materielapply/materielapply.module#MaterielapplyPageModule' },
  { path: 'delphi-study', loadChildren: './delphi-study/delphi-study.module#DelphiStudyPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
