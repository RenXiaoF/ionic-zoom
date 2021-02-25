import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.page.html',
  styleUrls: ['./capacity.page.scss'],
})
export class CapacityPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  //返回主页面(suppliermy) 
  goback(){
    this.router.navigate(['suppliermy']);
  }
  //跳转到产能与产值申请记录(capacitydetail) 页面
  gocapacityrecord(){
    this.router.navigate(['capacityrecord']);
  }
  
}
