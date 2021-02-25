import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewapiService } from 'src/services/api/newapi.service';
import { PresentToastService } from 'src/services/Toast/presentToast.service';

@Component({
  selector: 'app-supplier-my',
  templateUrl: './supplier-my.page.html',
  styleUrls: ['./supplier-my.page.scss'],
})
export class SupplierMyPage implements OnInit {
  
  public WxModel:boolean = false;//保存添加联系人状态
  public AccountModel:boolean = false;//保存对账单状态
  public startDate:string = "2017-01-01";//保存对账单查询开始时间
  public endDate:string = "2019-11-03";//保存对账单查询结算
  public moneyType = {
    "current":0,
    type:[{"money":"人民币", "num":"000"}, {"money":"港币", "num":"001"}, {"money":"美元", "num":"002"}]
  };
  public providerID:string = "CYGYS01";//保存生产商id
  public user_id:string = "141773";//保存用户id
  public deptid:string = "7";//保存部门号id(7:供应商/8：加工厂)
  // 初始化数据对象
  public initInfo = {
    "user_id":"",
    "deptid":""
  };
  // 保存页面数据对象
  public pageData = {
    order:[],
    account:[],
    person:[]
  };

  constructor(
    private router:Router,
    private NewapiService:NewapiService,
    private toastTips:PresentToastService,
    ) {
  }

  ngOnInit() {
    // this.init();
  }

  // 首页权限初始化
  init(){
    let obj = {
      "user_id":this.user_id,
    }
    this.initInfo.user_id = this.user_id
    let that = this;
    let mainUrl = "intf_ProAPPMain:CALL";
    let childUrl = "intf_ProviderStatus:POST";
    this.NewapiService.baseAPI(obj,mainUrl,childUrl,this.judgment,that,true);
  }  
  // 页面权限判断
  judgment(res, that){
    that.initInfo.user_id = that.user_id
    that.initInfo.deptid = that.deptid
    let mainUrl = "intf_ProAPPMain:CALL";
    let childUrl = "intf_ProviderIndex:POST";
    that.NewapiService.baseAPI(that.initInfo,mainUrl,childUrl,that.initSuccess,that,true);
    if(res.result.status != "1"){
      that.router.navigate(["gongyingshang", that.user_id]);
    }
  }
  // 初始化成功回调函数
  initSuccess(res, that){
    for(let item of res.result.result){
      if(item.action_task == 1){
        that.pageData.order.push(item);
      }else{
        if(item.model_type == 5){
          that.pageData.account.push(item);
        }else{
          that.pageData.person.push(item);
        }
      }
    }
    if(that.pageData.order.length != 0){
      for(let item of that.pageData.order){
        item.action_sql = JSON.parse(item.action_sql)
      }
    }
    console.log(that.pageData)
  }

  // 添加联系人
  showWxModel(){
    this.WxModel = true;
  }
  // 关闭模态框
  closeModel(){
    this.WxModel = false;
    this.AccountModel = false;
  }
  // 对账单处理事件
  showAccountModel(){
    this.AccountModel = true;
  }
  // 对账单查询提交
  accountSearch(){
    let tempStartDate = new Date(this.startDate).getTime();
    let tempEndtDate = new Date(this.endDate).getTime();
    if(tempStartDate - tempEndtDate > 0){
      this.toastTips.showToast("起始时间不能大于结束时间！");
      return;      
    }
    let obj = {
      "providerID":this.providerID,
      "begindate":this.startDate,
      "enddate":this.endDate,
      "currencyID":this.moneyType.type[this.moneyType.current].num
    };

    let that = this;
    let mainUrl = "intf_ProAPPMain:CALL";
    let childUrl = "intf_payDetail:GET";
    this.NewapiService.baseAPI(obj,mainUrl,childUrl,this.submitSuccess,that,true);
  }
  // 提交成功回调函数
  submitSuccess(res, that){
    if(res.result.result){
      window.location.href = res.result.result;
    }else{
      that.toastTips.showToast(res.result.msg);
    }

  }

  // 跳转到功能（gongneng）页面
  goDelphiTest(){
    this.router.navigate(['delphi-study']);
  }

  // 跳转到功能（gongneng）页面
  gogongneng(){
    this.router.navigate(['gongneng']);
  }
  // 页面跳转
  openPage(obj, index = 0){
    switch (parseInt(obj.model_type)) {
      case 1:
        console.log("这是普通跳转");
        // window.location.href = page.component;
      break;
      case 2:
        console.log("这是接口跳转");
        // window.location.href = page.component;
      break;
      case 3: 
        this.router.navigate([obj.url])
      break;
      case 4: 
        this.router.navigate([obj.url, index])
      break;
      case 5: 
        this.showAccountModel();
      break;
      default:console.log("参数类型不正确");break;
    }
  }
}
