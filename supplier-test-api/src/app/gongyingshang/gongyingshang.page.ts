import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { PresentToastService } from '../../services/Toast/presentToast.service';
import { ApiService } from 'src/services/api/api.service';
import { NewapiService } from 'src/services/api/newapi.service';



@Component({
  selector: 'app-gongyingshang',
  templateUrl: './gongyingshang.page.html',
  styleUrls: ['./gongyingshang.page.scss'],
})
export class GongyingshangPage implements OnInit {
  public user_id:string = "141773";//保存用户id
  public isApproval:boolean = false;//保存页面状态
  //保存审核状态
  public approvalState = {
    "current":0,
    "content":[
      {"text":"未审核","class":"noApproval"},
      {"text":"审核通过","class":"successPass"},
      {"text":"审核不通过","class":"noPass"}
    ]
  };
  public headerTitle:string = "申请供应商入驻";//头部标题
  //供应商申请信息
  public applyInfo = {
    must:{
      company:"",
      addr:"",
      contact:"",
      phone:"",
    },
    isMeterial:0,
    isConverter:0
  };

  constructor(
    private router:Router,
    private toastTips:PresentToastService,
    private NewapiService:NewapiService,
    private ApiService:ApiService,
    private ActivatedRoute:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.init();
  }

  // 页面数据初始化
  init(){
    // this.ActivatedRoute.params.subscribe((res)=>{
      // this.user_id = res.id
      let obj = {
        "user_id":this.user_id
      }
      let that = this;
      let mainUrl = "intf_ProAPPMain:CALL";
      let childUrl = "intf_ProviderStatus:POST";
      this.NewapiService.baseAPI(obj,mainUrl,childUrl,this.initSuccess,that,true);
    // });
  }  
  // 初始化成功回调函数
  initSuccess(res, that){
    if(res.result.status == "1"){
      that.applyInfo.must.company = res.result.result[0].name;
      that.applyInfo.must.addr = res.result.result[0].address;
      that.applyInfo.must.contact = res.result.result[0].linknm;
      that.applyInfo.must.phone = res.result.result[0].linktel;
      that.applyInfo.isMeterial = res.result.result[0].is_matpro;
      that.applyInfo.isConverter = res.result.result[0].is_wwpro;
      that.isApproval = true;
      that.approvalState.current = res.result.result[0].is_check;
    }else{
      that.isApproval = false;
      if(res.result.status == "0"){
        that.applyInfo.must.company = res.result.result[0].name;
        that.applyInfo.must.addr = res.result.result[0].address;
        that.applyInfo.must.contact = res.result.result[0].linknm;
        that.applyInfo.must.phone = res.result.result[0].linktel;
        that.applyInfo.isMeterial = res.result.result[0].is_matpro;
        that.applyInfo.isConverter = res.result.result[0].is_wwpro;
        that.approvalState.current = res.result.result[0].is_check;
      }
    }
  }
  // 跳转到上一级页面（suppliermy）主页面
  goback(){
    this.router.navigate(['suppliermy']);
  }
  // 信息申请页面提交申请
  submitInfo(){
    for(var info in this.applyInfo.must){
      if(!this.applyInfo.must[info]){
        this.toastTips.showToast("请确认您的必需信息是否填写！");
        return;
      }
    }
    let is_matpro = 0;
    let is_wwpro = 0;
    if(this.applyInfo.isMeterial){
      is_matpro = 1
    }
    if(this.applyInfo.isConverter){
      is_wwpro = 1
    }

    let obj = {
      "user_id":this.user_id,
      "name": this.applyInfo.must.company,
      "address":this.applyInfo.must.addr,
      "linknm":this.applyInfo.must.contact,
      "linktel":this.applyInfo.must.phone,
      "is_matpro": is_matpro,
      "is_wwpro":is_wwpro
    }

    this.sendRequest(obj);
  }
  // 重新申请事件处理
  reApply(){
    this.isApproval = false;
    this.headerTitle = "申请供应商入驻";
  }
  // 处理提交申请请求
  sendRequest(obj){
    let header = {
      headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    }
    let b = new Base64();
    let call_page = {};
    for(let item in obj){
      call_page[item] = obj[item];
    }

    let paramet = b.encode(JSON.stringify(call_page));
    let data ='action=intf_ProviderApply:POST&paramet='+paramet;
    console.log(call_page)

    this.ApiService.post('intf_ProAPPMain:CALL',data,header).subscribe(
        (res:any)=>{
          console.log(res);
          if(res.result.status == "1"){
            this.isApproval = true;
            this.headerTitle = "供应商入驻";
            this.toastTips.showToast(res.result.msg)
          }
        },
        (err)=>{
          console.log(err);
        }
    );
  }
}
