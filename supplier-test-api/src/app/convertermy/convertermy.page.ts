import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convertermy',
  templateUrl: './convertermy.page.html',
  styleUrls: ['./convertermy.page.scss'],
})
export class ConvertermyPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  //返回主页面(suppliermy) 
  goback(){
    this.router.navigate(['suppliermy']);
  }
  //返回节点开启/关闭页面(banplanapply) 
  gobanplanapply(){
    this.router.navigate(['banplanapply']);
  }
}
