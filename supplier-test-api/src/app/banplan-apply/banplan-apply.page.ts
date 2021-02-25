import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-banplan-apply',
  templateUrl: './banplan-apply.page.html',
  styleUrls: ['./banplan-apply.page.scss'],
})
export class BanplanApplyPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  //返回进度报数节点页面(convertermy) 
  goback(){
    this.router.navigate(['convertermy']);
  }
  //返回我的申请记录页面(banplanapplylist) 
  gobanplanapplylist(){
    this.router.navigate(['banplanapplylist']);
  }
}
