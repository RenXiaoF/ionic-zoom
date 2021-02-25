import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capacity-record',
  templateUrl: './capacity-record.page.html',
  styleUrls: ['./capacity-record.page.scss'],
})
export class CapacityRecordPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  //返回上一级页面:产能与产值申请页面(capacity) 
  goback(){
    this.router.navigate(['capacity']);
  }
  //跳转到:产能与产值申请页面(capacity) 
  gocapacity(){
    this.router.navigate(['capacity']);
  }
}
