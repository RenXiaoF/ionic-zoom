import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewapiService } from 'src/services/api/newapi.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-orderstatue',
  templateUrl: './orderstatue.page.html',
  styleUrls: ['./orderstatue.page.scss'],
})
export class OrderstatuePage implements OnInit {

  providerid = '0001';
  beginDate = '2015/01/01';
  endDate = '2019/08/09';
  user_name = 'berlin07';
  public segmentIndex : number = 0;//选项卡状态
  // 页面初始化数据对象
  public firstInitInfo = {
    "Wp_ProSignOrder":"0",//待签收
    "Wp_ProBackDateOrder":"0",//待复期
    "Wp_ProConfirmOrder":"0",//待确认
    "Wp_ProAllOrder":"0",//采购记录
    "screen":"",
    "providerid":this.providerid,
    "beginDate":this.beginDate,
    "endDate":this.endDate
  };
  public secondInitInfo = {
    "modelson":"", //选项卡名称 待签收(Wp_ProSignOrder)/待复期(Wp_ProBackDateOrder)/待确认(Wp_ProConfirmOrder)/采购记录(Wp_ProAllOrder)
    "Purchaser":"",
    "PurchaserId":"",
    "pageidx":"1",
    "screen":"",
    "providerid":this.firstInitInfo.providerid,
    "beginDate":this.firstInitInfo.beginDate,
    "endDate":this.firstInitInfo.endDate
  };
  // 订单签收对象
  public  proSignOrderInfo = {
    "POID":"PO1811-0272",
    "user_name":"berlin07",
    "optmode":"omview"
  };
  
  // 选项卡信息
  public segment = [
    {"text":"待签收", "name":"Wp_ProSignOrder", "num":0, "isChecked":false},
    {"text":"待复期", "name":"Wp_ProBackDateOrder", "num":0, "isChecked":false},
    {"text":"待确认", "name":"Wp_ProConfirmOrder", "num":0, "isChecked":false},
    {"text":"采购记录", "name":"Wp_ProAllOrder", "num":0, "isChecked":false}
  ]
  // 页面数据
  public products = [];

  constructor(
    private router:Router,
    private NewapiService:NewapiService,
    private ActivatedRoute:ActivatedRoute,
    private alertTips:AlertController,
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
    let that = this;
    let mainUrl = "pvappmatin";
    let childUrl = "intf_PvPointDataCount:GET";
    this.NewapiService.baseAPI(this.firstInitInfo,mainUrl,childUrl,this.firstInitSuccess,that,false);
  }
  secondInit(){
    let that = this;
    let mainUrl = "pvappmatin";
    let childUrl = "intf_PvPointData:GET";
    this.NewapiService.baseAPI(this.secondInitInfo,mainUrl,childUrl,this.secondInitSuccess,that,false);
  }  

  // 初始化成功回调函数
  firstInitSuccess(res, that){
    // 待签收
    that.firstInitInfo.Wp_ProSignOrder = res.result.ResultData.Wp_ProSignOrder;
    that.segment[0].num = res.result.ResultData.Wp_ProSignOrder;
    // 待复期
    that.firstInitInfo.Wp_ProBackDateOrder = res.result.ResultData.Wp_ProBackDateOrder;
    that.segment[1].num = res.result.ResultData.Wp_ProBackDateOrder;
    // 待确认
    that.firstInitInfo.Wp_ProConfirmOrder = res.result.ResultData.Wp_ProConfirmOrder;
    that.segment[2].num = res.result.ResultData.Wp_ProConfirmOrder;
    // 采购记录
    that.firstInitInfo.Wp_ProAllOrder = res.result.ResultData.Wp_ProAllOrder;
    that.segment[3].num = res.result.ResultData.Wp_ProAllOrder; 
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
      case 0:this.presentAlert("你确定要签收："+this.products[index].POID+"?");break;
      case 1:this.router.navigate(["orderreschedule", this.products[index].POID]);break;
      case 2:
      case 3:this.router.navigate(["orderdetail", this.products[index].POID, this.segment[this.segmentIndex].name]);break;
      default:console.log("参数不正确");break;
    }
  }
  // 弹出确认框
  async presentAlert(msg: string = "详细内容") {
    const alert = await this.alertTips.create({
      header: '提示信息',
      message: msg,
      buttons: [
        {
          text: '确定',
          role: 'OK',
          handler: () => {
            // 待签收订单处理事件
            this.proSignOrder();
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('你取消了签收订单');
          }
        }
      ]

    });

    await alert.present();
  }
  // 待签收接口请求
  proSignOrder(){
    let that = this;
    let mainUrl = "pvappmatin";
    let childUrl = "frmPOBillEx:OnAfterChecked";
    this.NewapiService.baseAPI(this.proSignOrderInfo,mainUrl,childUrl,this.signSuccess,that);
  }
  // 签收成功处理函数
  signSuccess(res, that){
    if(res){
      if(res.result.Result=='False'){
        that.showToast(res.result['resultDesc']);
      }else{
        window.location.href = res.result['resultDesc'];
      }
    }else{
      console.log("接口请求失败！");
    }
  }
}
