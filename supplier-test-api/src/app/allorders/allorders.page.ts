import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.page.html',
  styleUrls: ['./allorders.page.scss'],
})
export class AllordersPage implements OnInit {

  public front_date_mps: any;
  public later_date_mps: any;
  public later_date: any;
  public front_date: any;
  public goodstatuelists = ['待发货','待收货','待入库','待结算'];
  public childorderlists = [
    {BackDate: null,Code: "9908P-N1088-", FirstProdPeriod: 5,FirtSendDate: null,FirtSendQty: 500,Matid: "001207",Matioid: "WW1811-0262" ,MpsBatch: "5",PaperSampleNM: null,ProdPeriod: 8,RealMatOutDate: null,UrgencyState: "中等", WWMode: "CMT" ,WorkDesDays: 0,colornmlist: null,filldate: "2018-11-11",mpsid: "MPS1811-0285",price: 0, qty: 3000, state: "已审核", total: 0},
    {BackDate: null,Code: "9908P-N1088-", FirstProdPeriod: 5,FirtSendDate: null,FirtSendQty: 500,Matid: "001207",Matioid: "WW1811-0262" ,MpsBatch: "5",PaperSampleNM: null,ProdPeriod: 8,RealMatOutDate: null,UrgencyState: "中等", WWMode: "CMT" ,WorkDesDays: 0,colornmlist: null,filldate: "2018-11-11",mpsid: "MPS1811-0285",price: 0, qty: 3000, state: "已审核", total: 0},
    {BackDate: null,Code: "9908P-N1088-", FirstProdPeriod: 5,FirtSendDate: null,FirtSendQty: 500,Matid: "001207",Matioid: "WW1811-0262" ,MpsBatch: "5",PaperSampleNM: null,ProdPeriod: 8,RealMatOutDate: null,UrgencyState: "中等", WWMode: "CMT" ,WorkDesDays: 0,colornmlist: null,filldate: "2018-11-11",mpsid: "MPS1811-0285",price: 0, qty: 3000, state: "已审核", total: 0},
  ]
  public datalength= this.childorderlists.length>0?true:false;
  public count=2;
  public nowgoodstatus = 0;
  constructor() {

  }

  ngOnInit() {
    this.get_the_date()
  }

  //获取当前日期
  get_the_date() {
    let y = new Date().getFullYear();
    let m = new Date().getUTCMonth() + 1;
    let d = new Date().getDate();
    this.later_date_mps = y + '-' + m + '-' + d;
    this.later_date = y + '-' + m + '-' + d;
    this.front_date_mps = y + '-' + (m - 1) + '-' + d;
    this.front_date = y + '-' + (m - 1) + '-' + d;
  }
  getgoodStatue(i){
    this.nowgoodstatus = i*1;
  }
}
