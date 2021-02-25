import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewapiService } from 'src/services/api/newapi.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  public user_name = "hjy";//保存用户昵称
  public products = [];//保存页面数据

  //初始化页面数据
  public initInfo = {
    "POID":"",
    "modelson":"",
    "user_name":"",
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
  // 返回上一级页面(orderstatue)我的订单页面
  goback(){
    this.router.navigate(["orderstatue",0]);
  }
}
