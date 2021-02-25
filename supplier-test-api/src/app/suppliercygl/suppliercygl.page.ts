import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewapiService } from 'src/services/api/newapi.service';

@Component({
  selector: 'app-suppliercygl',
  templateUrl: './suppliercygl.page.html',
  styleUrls: ['./suppliercygl.page.scss'],
})
export class SuppliercyglPage implements OnInit {
  public contactPerson = [];// 联系人数据对象
  public searchModel:boolean = false;//保存添加联系人状态
  public nickName:string = "";//成员昵称
  public providerid:string = "1001";//商家id

  // 初始化数据对象
  public initInfo = {
    "providerid":this.providerid,
    "nickname":this.nickName
  }  

  constructor(
    private router:Router,
    private NewapiService:NewapiService
    ) {
    this.init();
  }

  ngOnInit() {

  }

  //初始化请求函数 
  init(){
    this.initInfo.nickname = this.nickName;
    let that = this;
    let mainUrl = "intf_ProAPPMain:CALL";
    let childUrl = "intf_ProviderLinkList:POST";
    this.NewapiService.baseAPI(this.initInfo,mainUrl,childUrl,this.initSuccess,that,true);
  }
  // 初始化成功回调函数
  initSuccess(res, that){
    that.contactPerson = res.result.result;
    for(let person of that.contactPerson){
      if(person.state){
        person.statenm = "已启用"
      }else{
        person.statenm = "未启用"
      }
    }
  }
  //返回主页面(suppliermy) 
  goback(){
    this.router.navigate(['suppliermy']);
  }
  // 跳转到联系人详情页(contactscrad)
  gocontactscrad(index){
    this.router.navigate(["cygldetail", this.contactPerson[index].link_id]);
  }
  // 查询搜索框提交事件
  searchNickName(){
    this.init();
    this.searchModel = false;
  }
  // 关闭模态框
  closeModel(){
    this.searchModel = false;
  }
  // 显示搜索框
  showModel(){
    this.searchModel = true;
  }
}
