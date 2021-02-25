import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewapiService } from 'src/services/api/newapi.service';
import { PresentToastService } from 'src/services/Toast/presentToast.service';

@Component({
  selector: 'app-order-reschedule',
  templateUrl: './order-reschedule.page.html',
  styleUrls: ['./order-reschedule.page.scss'],
})
export class OrderReschedulePage implements OnInit {
  public user_name = "hjy";//保存用户昵称
  public modelson = "19";//保存节点数据

  public products = [];//保存页面数据
  public selectState  = [];//保存选择框是否选中,默认没选中
  public selectText  = [];//保存选择框文字
  public btn_disable :boolean = true;//底部点击按钮是否可点

  public ids :string = "";
  public username :string = "胡杰友";
  public FQDeliverdate :string = "2019-08-15";

  public showModel :boolean = false;//保存模态框状态

  //初始化页面数据
  public initInfo = {
    "POID":"",
    "user_name":this.user_name,
    "modelson":this.modelson,
  };
  // 保存复期对象数据
  public fuqiData = {
    "ids": "",
    "username": "",
    "poid": "",
    "FQDeliverdate": "",
    "FQDes": ""
  };

  constructor(
    private router:Router,
    private NewapiService:NewapiService,
    private ActivatedRoute:ActivatedRoute,
    private toastTips:PresentToastService
  ) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe((res)=>{
      this.initInfo.POID = res.poid;
      this.init();
    });
  }

    // 页面数据初始化
    init(){
      let that = this;
      let mainUrl = "pvappmatin";
      let childUrl = "intf_PoInfoData:GET";
      this.NewapiService.baseAPI(this.initInfo,mainUrl,childUrl,this.initSuccess,that);
    }  
  
    initSuccess(res, that){
      that.products = res.result.ResultData;
      for(let i=0; i<that.products.length; i++){
        that.selectState[i] = false;
        that.selectText[i] = "未选";
      }
      that.ids = ""+res.result.ResultData[0].id;
    }
  // 返回上一级页面(orderstatue)我的订单页面
  goback(){
    this.router.navigate(["orderstatue",0]);
  }
  // 全选事件
  selectAll(){
    let count = 0;

    for(let i=0; i<this.selectState.length; i++){
      if(this.selectState[i]){
        count++;
      }
    }

    if(count == this.selectState.length){
      for(let i=0; i<this.selectState.length; i++){
        this.selectState[i] = false;
        this.selectText[i] = "未选";
        this.btn_disable = true;
      }
    }else{
      for(let i=0; i<this.selectState.length; i++){
        this.selectState[i] = true;
        this.selectText[i] = "已选";
        this.btn_disable = false;
      }
    }
  }
  // 卡片选择框状态变化
  changeState(index){
    this.selectState[index] = !this.selectState[index];
    this.btn_disable = !this.selectState[index];
    if(this.selectState[index]){
      this.selectText[index] = "已选";
    }else{
      this.selectText[index] = "未选"
    }
  }
  // 点击复期按钮
  fuqi(){
    this.showModel = true;
    this.ids = ""
  }

  //关闭模态框 
  closeModel(){
    this.showModel = false;
  }
  // 提交数据
  submitData(){
    for(let i=0; i<this.selectState.length; i++){
      if(this.selectState[i]){
        this.ids = this.products[i].id+","
      }
    }
    this.closeModel();
    this.fuqiData.ids = this.ids.slice(0,this.ids.length-1);
    this.fuqiData.username = this.username;
    this.fuqiData.poid = this.initInfo.POID;
    this.fuqiData.FQDeliverdate = this.FQDeliverdate;
    let that = this;
    let mainUrl = "pvappmatin";
    let childUrl = "intf_PoCP:POST";
    this.NewapiService.baseAPI(this.fuqiData,mainUrl,childUrl,this.fuqiSuccess,that);
  }
  // 复期回调函数
  fuqiSuccess(res, that){
    that.toastTips.showToast(res.result.Msg);
  }
}
