import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewapiService } from 'src/services/api/newapi.service';

@Component({
  selector: 'app-invoicestatue',
  templateUrl: './invoicestatue.page.html',
  styleUrls: ['./invoicestatue.page.scss'],
})
export class InvoicestatuePage implements OnInit {
  public segmentIndex : number = 0;//选项卡状态
  public providerid : string = "0001";//商家id
  public beginDate : string = "2015/01/01";//查询开始时间
  public endDate : string = "2019/08/09";//查询结束时间
  // 页面初始化数据对象
  public firstInitInfo = {
    "Wp_ProShipmentsOrder":"",//待发货
    "Wp_ProReceivOrder":"",//待收货
    "Wp_ProSettlementOrde":"",//待结算
    "screen":"",
    "providerid":"",
    "beginDate":"",
    "endDate":""
  };
  public secondInitInfo = {
    "modelson":"", //选项卡名称 待签收(Wp_ProSignOrder)/待复期(Wp_ProBackDateOrder)/待确认(Wp_ProConfirmOrder)/采购记录(Wp_ProAllOrder)
    "Purchaser":"",
    "PurchaserId":"",
    "pageidx":"1",
    "screen":"",
    "providerid":this.providerid,
    "beginDate":this.beginDate,
    "endDate":this.endDate
  };
  // 选项卡信息
  public segment = [
    {"text":"待发货", "name":"Wp_ProShipmentsOrder", "num":0, "isChecked":false},
    {"text":"待收货", "name":"Wp_ProReceivOrder", "num":0, "isChecked":false},
    {"text":"待入库", "name":"Wp_ProWarehousOrder", "num":0, "isChecked":false},
    {"text":"待结算", "name":"Wp_ProSettlementOrde", "num":0, "isChecked":false}
  ]
  // 页面数据
  public products = [];

  constructor(
    private router:Router,
    private NewapiService:NewapiService,
    private ActivatedRoute:ActivatedRoute,
  ) {
    this.ActivatedRoute.params.subscribe((res)=>{
      this.segmentIndex = Number(res.index);
      this.firstInit()
      this.changeState(this.segmentIndex);
    });
  }

  ngOnInit() {

  }

  // 页面数据初始化
  firstInit(){
    this.firstInitInfo.providerid = this.providerid;
    this.firstInitInfo.beginDate = this.beginDate;
    this.firstInitInfo.endDate = this.endDate;
    let that = this;
    let mainUrl = "pvappmatin";
    let childUrl = "intf_PvPointDataCount:GET";
    this.NewapiService.baseAPI(this.firstInitInfo,mainUrl,childUrl,this.firstInitSuccess,that);
  }
  secondInit(){
    this.secondInitInfo.providerid = this.providerid;
    this.secondInitInfo.beginDate = this.beginDate;
    this.secondInitInfo.endDate = this.endDate;
    let that = this;
    let mainUrl = "pvappmatin";
    let childUrl = "intf_PvPointData:GET";
    this.NewapiService.baseAPI(this.secondInitInfo,mainUrl,childUrl,this.secondInitSuccess,that);
  }  

  // 初始化成功回调函数
  firstInitSuccess(res, that){
    // 待发货
    that.firstInitInfo.Wp_ProShipmentsOrder = res.result.ResultData.Wp_ProShipmentsOrder;
    that.segment[0].num = res.result.ResultData.Wp_ProShipmentsOrder;
    // 待收货
    that.firstInitInfo.Wp_ProReceivOrder = res.result.ResultData.Wp_ProReceivOrder;
    that.segment[1].num = res.result.ResultData.Wp_ProReceivOrder;
    // 待入库
    that.firstInitInfo.Wp_ProWarehousOrder = res.result.ResultData.Wp_ProWarehousOrder;
    that.segment[2].num = 0;
    // 待结算
    that.firstInitInfo.Wp_ProSettlementOrde = res.result.ResultData.Wp_ProSettlementOrde;
    that.segment[3].num = res.result.ResultData.Wp_ProSettlementOrde;      
  }
  secondInitSuccess(res, that){
    that.products = res.result.ResultData;
    for(let item of that.products){
      if(item.typeTitle === "已审核"){
        item.typeTitle = "已审";
      }
    }
  }

  //返回上一级页面(suppliermy)主页面
  goback(){
    this.router.navigate(["suppliermy"]);
  } 
  // 导航卡片切换
  changeState(myIndex){
    for(let item of this.segment){
      item.isChecked = false;
    }
    this.segment[myIndex].isChecked = true;
    this.segmentIndex = myIndex;
    this.secondInitInfo.modelson = this.segment[this.segmentIndex].name
    this.secondInit();
  }
  // 改变时间
  timeChange(){
    this.secondInit();
  }
  // 点击卡片事件
  clickCard(index){
    switch(this.segmentIndex){
      case 0:this.router.navigate(["invoiceproshipment", this.products[index].POID]);break;
      case 1:
      case 2:
      case 3:this.router.navigate(["invoicedetail", this.products[index].POID, this.segment[this.segmentIndex].name]);break;
      default:console.log("参数不正确");break;
    }
  }
}
