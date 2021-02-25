import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arfdpay',
  templateUrl: './arfdpay.page.html',
  styleUrls: ['./arfdpay.page.scss'],
})
export class ArfdpayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // 时间
  public now_time = new Date().toLocaleDateString();
  

}
