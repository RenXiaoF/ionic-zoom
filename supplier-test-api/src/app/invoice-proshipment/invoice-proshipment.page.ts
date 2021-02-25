import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewapiService } from 'src/services/api/newapi.service';
import { PresentToastService } from 'src/services/Toast/presentToast.service';

@Component({
  selector: 'app-invoice-proshipment',
  templateUrl: './invoice-proshipment.page.html',
  styleUrls: ['./invoice-proshipment.page.scss'],
})
export class InvoiceProshipmentPage implements OnInit {
  public user_name = "hjy";//保存用户昵称
  public modelson = "";//保存节点数据
  public matbarcodeid = "eab0d1bceed0b9df";
  public userid = "142150";
  public act_type = "AddSendCart";
  public batchno = "1";//默认批次
  

  public products = [];//保存页面数据
  public count = 0;//保存发货列表数量
  public showModel:boolean = false;//保存模态框状态
  public goodNum:number = 0;//保存模态框状态

  //模态框点击确认发送数据对象
  public addData = {
    "poid":"",
    "polistlsh":"",
    "color":"",
    "colorid":"",
    "code":"",
    "name":"",
    "model":"",
    "MultUnit":"",
    "matid":"",
    "polistid":"",
    "batchno":"",
    "multqty":"",
    "matbarcodeid":"",
    "userid":"",
    "act_type":""
  }

  //初始化页面数据
  public initInfo = {
    "POID":"",
    "user_name":this.user_name,
    "modelson":this.modelson,
  };
  //初始化发货数量数据
  public initCountData = {
    "poid":"",
    "userid":"",
    "act_type":"QrySendCart"//固定不变
  };
  // 点击发货参数对象
  public sendGoodData = {
    data:[],
    userid:""
  }
  // 移除数据请求对象
  public removeData = {
    "id":"",
    "userid":"",
    "poid":"",
    "act_type":"DelSendCart"//移除对象固定值
  }

  constructor(
    private router:Router,
    private NewapiService:NewapiService,
    private ActivatedRoute:ActivatedRoute,
    private toastTips:PresentToastService
  ) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe((res)=>{
      this.initInfo.POID = res.poid;
      this.initCountData.poid = res.poid
      this.init();
      this.initCount();
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
  }
  // 初始化发货数量
  initCount(){
    this.initCountData.userid = this.userid;
    let that = this;
    let mainUrl = "pvappmatin";
    let childUrl = "intf_PvCart:POST";
    this.NewapiService.baseAPI(this.initCountData,mainUrl,childUrl,this.initCountSuccess,that);
  }
  // 初始化发货数量成功回调函数
  initCountSuccess(res, that){
    that.sendGoodData.data = res.result.result;
    that.count = res.result.result.length;
  }

  // 返回上一级页面(invoicestatue)发货单页面
  goback(){
    this.router.navigate(["invoicestatue",0]);
  }
  // 点击加入按钮
  addGood(){
    this.showModel = true;
    this.batchno = "1";
    this.goodNum = 0;
  }
  // 点击关闭按钮
  closeModel(){
    this.showModel = false;
  }
  // 点击确认按钮发送请求到添加购物车
  confirm(){
    this.showModel = false;
    if(this.goodNum>0){
      this.addData.poid = this.products[0].POID;
      this.addData.polistlsh = this.products[0].lsh;
      this.addData.color = this.products[0].color;
      this.addData.colorid = this.products[0].colorid;
      this.addData.code = this.products[0].code;
      this.addData.name = this.products[0].codeNM;
      this.addData.model = this.products[0].model;
      this.addData.MultUnit = this.products[0].multunit;
      this.addData.matid = this.products[0].matid;
      this.addData.polistid = this.products[0].matid;
      this.addData.batchno = this.batchno;
      this.addData.multqty = this.products[0].multqty;
      this.addData.matbarcodeid = this.matbarcodeid;
      this.addData.userid = this.userid;
      this.addData.act_type = this.act_type;
      let that = this;
      let mainUrl = "pvappmatin";
      let childUrl = "intf_PvCart:POST";
      console.log(this.addData);
      this.NewapiService.baseAPI(this.addData,mainUrl,childUrl,this.addSuccess,that);
    }else{
      this.toastTips.showToast("请输入正确的发货数量");
    }
    this.goodNum = 0;
  }
  // 添加成功后回调函数
  addSuccess(res, that){
    that.toastTips.showToast(res.result.msg);
    that.count = res.result.result[0].cart_count;
  }
  // 点击发货按钮
  sendGood(){
    if(this.count == 0){
     this.toastTips.showToast("暂无数据");
     return;
    }
    this.sendGoodData.userid = this.userid;
    let that = this;
    let mainUrl = "pvappmatin";
    let childUrl = "intf_PvoDG:POST";
    console.log(this.sendGoodData);
    this.NewapiService.baseAPI(this.sendGoodData,mainUrl,childUrl,this.sendSuccess,that);
  }
  // 发货成功回调函数
  sendSuccess(res, that){
    that.toastTips.showToast(res.result.Msg);
    for(let product of that.sendGoodData.data){
      that.removeData.id = product.id;
      that.removeData.userid = product.userid;
      that.removeData.poid = product.poid;
      let mainUrl = "pvappmatin";
      let childUrl = "intf_PvCart:POST";
      that.NewapiService.baseAPI(that.removeData,mainUrl,childUrl,that.removeSuccess,that);
    }
    that.initCount();
  }
  // 移除成功回调函数
  removeSuccess(res, that){
    console.log(222)
  }
  // 跳转到发货列表("sendgood")
  gosendgood(){
    this.router.navigate(["sendgood",this.initInfo.POID,this.userid]);
  }
}
