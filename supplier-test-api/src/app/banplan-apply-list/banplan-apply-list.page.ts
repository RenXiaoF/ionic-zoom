import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banplan-apply-list',
  templateUrl: './banplan-apply-list.page.html',
  styleUrls: ['./banplan-apply-list.page.scss'],
})
export class BanplanApplyListPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  //返回节点开启/关闭页面(banplanapply) 
  goback(){
    this.router.navigate(['banplanapply']);
  }
}
