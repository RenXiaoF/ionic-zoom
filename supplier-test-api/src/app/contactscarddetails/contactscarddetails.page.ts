import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { NewapiService } from 'src/services/api/newapi.service';

@Component({
  selector: 'app-contactscarddetails',
  templateUrl: './contactscarddetails.page.html',
  styleUrls: ['./contactscarddetails.page.scss'],
})
export class ContactscarddetailsPage implements OnInit {
  public providerid:string = "1001"; //商家id
  public nickName:string = ""; //成员昵称
  //初始化数据请求对象
  public initInfo = {
    "providerid":this.providerid,
    "nickname":this.nickName
  } 
  public transdata = {
    "type":"",
    "title":"",
    "user_link":"",
    "user_tel":"",
    "d_nickname":"",
    "m_nickname":"",
    "g_nickname":"",
    "link_id":""
  };
  public selectlist = []
  public backvalue:any;

  constructor(
    private ActivatedRoute:ActivatedRoute,
    private router:Router,
    private NewapiService:NewapiService
    ) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe((res)=>{
      this.transdata = JSON.parse(res.personInfo);
      console.log(this.transdata)
      switch (this.transdata.title){
        case '联系姓名':this.backvalue = this.transdata.user_link; console.log(this.transdata.user_link );break;
        case '联系电话':this.backvalue = this.transdata.user_tel;console.log(this.transdata.user_tel);break;
        case '设置主管':
          {
            this.backvalue = this.transdata.d_nickname;console.log(this.transdata.d_nickname);
            this.initSelect();
          };
        break;
        case '设置经理':
          {
            this.backvalue = this.transdata.m_nickname;console.log(this.transdata.m_nickname);
            this.initSelect();
          };
          break;
        default:
          {
            this.backvalue = this.transdata.g_nickname;console.log(this.transdata.g_nickname);
            this.initSelect();
          };
        }
    });
  }

  // 初始化选择列表
  initSelect(){
    let that = this;
    let mainUrl = "intf_ProAPPMain:CALL";
    let childUrl = "intf_ProviderLinkList:POST";
    this.NewapiService.baseAPI(this.initInfo,mainUrl,childUrl,this.initSelectSuccess,that,true);
  }
  // 初始化选择列表回调函数
  initSelectSuccess(res, that){
    that.selectlist = res.result.result;
  }

  getbackvalue(){ 
    switch (this.transdata.title){
      case '联系姓名':this.transdata.user_link = this.backvalue;break;
      case '联系电话':this.transdata.user_tel = this.backvalue;break;
      case '设置主管':
        {
          this.transdata.d_nickname = this.backvalue;
        };
      break;
      case '设置经理':
        {
          this.transdata.m_nickname = this.backvalue;
        };
        break;
      default:
        {
          this.transdata.g_nickname = this.backvalue;
        };
    }
    this.router.navigate(["contactscrad", this.transdata.link_id]);
  }
  // 不保存数据返回上一页
  goback(){
    this.router.navigate(["contactscrad", this.transdata.link_id]);
  }
}
