import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewapiService } from 'src/services/api/newapi.service';

@Component({
  selector: 'app-invoicedetail',
  templateUrl: './invoicedetail.page.html',
  styleUrls: ['./invoicedetail.page.scss'],
})
export class InvoicedetailPage implements OnInit {
  public user_name = "hjy";//保存用户昵称
  public products = [];//保存页面数据

  //初始化页面数据
  public initInfo = {
    "POID":"",
    "user_name":"",
    "modelson":"",
  };

  constructor(
    private router:Router,
    private NewapiService:NewapiService,
    private ActivatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe((res)=>{
      this.initInfo.POID = res.poid;
      this.initInfo.modelson = res.name;
      this.initInfo.user_name = this.user_name;
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
  }
  // 返回上一级页面(invoicestatue)发货单页面
  goback(){
    this.router.navigate(["invoicestatue",0]);
  }
}
