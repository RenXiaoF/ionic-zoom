import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppliergzdsp',
  templateUrl: './suppliergzdsp.page.html',
  styleUrls: ['./suppliergzdsp.page.scss'],
})
export class SuppliergzdspPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  // 返回主页面(suppliermy)
  goback(){
    this.router.navigate(['suppliermy']);
  }
  // 跳转到工作点审批(applydetail)页面
  goapplydetail(){
    this.router.navigate(['applydetail']);
  }
}
