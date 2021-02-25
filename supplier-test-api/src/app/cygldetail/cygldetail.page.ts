import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewapiService } from 'src/services/api/newapi.service';
import { AlertController } from '@ionic/angular';
import { PresentToastService } from 'src/services/Toast/presentToast.service';

@Component({
  selector: 'app-cygldetail',
  templateUrl: './cygldetail.page.html',
  styleUrls: ['./cygldetail.page.scss'],
})
export class CygldetailPage implements OnInit {
  public link_id:string = "";//保存联系人id
  public providerid:string = "1001"; //商家id
  public nickName:string = ""; //成员昵称
  public login_user_id:string="141773";
  //保存页面数据
  public pageData = {
    "state":false,
    "user_link":"",
    "user_tel":"",
    "director_name":"",
    "mannager_name":"",
    "general_name":"",
  };
  public textTitle = ["是否启用","联系姓名","联系电话","设置主管","设置经理","设置总监"]// 保存输入框标题
  public selectIndex = 0// 保存输入框下表
  public selectList = []// 保存选择列表
  public setModel = false; //保存模态框
  // 初始化下拉列表对象
  public selectData = {
    "providerid":this.providerid,
    "nickname":this.nickName
  }
  // 保存按钮请求对象
  public saveInfo = {
    "link_id":"",
    "state":0,
    "user_link":"",
    "user_tel":"",
    "director_id":"",
    "mannager_id":"",
    "general_id":"",
    "login_user_id":this.login_user_id,
    "providerid":this.providerid
  }

  public selectValue:string // 保存要设置的值

  constructor(
    private router:Router,
    private ActivatedRoute:ActivatedRoute,
    private NewapiService:NewapiService,
    private alertTips:AlertController,
    private toastTips:PresentToastService
  ) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe((res)=>{
      this.link_id = res.id;
      let that = this;
      let mainUrl = "intf_ProAPPMain:CALL";
      let childUrl = "intf_ProviderLinkInfo:POST";
      this.NewapiService.baseAPI({"link_id":this.link_id},mainUrl,childUrl,this.initSuccess,that,true);
    });
  }

  initSuccess(res, that){
    that.pageData = res.result.result[0];
  }

  //返回主页面(suppliercygl) 
  goback(){
    this.router.navigate(['suppliercygl']);
  }  
  // 处理弹出框
  changeInfo(index){
    this.selectIndex = index;
    switch (index){
      case 0:break;
      case 1:
        this.alertInput(this.textTitle[index], this.pageData.user_link, "user_link");
      break;
      case 2:
        this.alertInput(this.textTitle[index], this.pageData.user_tel, "user_tel");
      break;
      case 3:
        this.getSelectList();
        this.selectValue = this.pageData.director_name;
        this.selectIndex = index;
      break;
      case 4:
        this.getSelectList();
        this.selectValue = this.pageData.mannager_name;
        this.selectIndex = index;
      break;
      case 5:
        this.getSelectList();
        this.selectValue = this.pageData.general_name;
        this.selectIndex = index;
      break;
      default:console.log("参数错误");
    }
  }
  // 弹出input模态框
  async alertInput(title = "标题", value, key) {
    const alert = await this.alertTips.create({
      header: title,
      inputs: [
        {
          name: key,
          value: value,
          type: 'text',
          placeholder: '请输入'+title
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确认',
          handler: (res) => { 
            console.log(res);
            this.pageData[key] = res[key];
            console.log(this.pageData)
          }
        }
      ]
    });
    alert.present();
  }
  // 发送请求获取数据后弹出选择框模态框
  getSelectList(){
    this.setModel = true;
    let that = this;
    let mainUrl = "intf_ProAPPMain:CALL";
    let childUrl = "intf_ProviderLinkList:POST";
    this.NewapiService.baseAPI(this.selectData,mainUrl,childUrl,this.selectSuccess,that,true);
  }
  // 获取选择列表回调函数
  selectSuccess(res, that){
    that.selectList = res.result.result;
    let nullObj = {
      user_id: null,
      user_link: "不设置",
    }
    that.selectList.push(nullObj);
  }
  // 确认选择
  confirm(value){
    for(let i=0; i<this.selectList.length; i++){
      if(this.selectList[i].user_link == value){
        switch(this.selectIndex){
          case 3:
            this.saveInfo.director_id = this.selectList[i].user_id;
            this.pageData.director_name = value;
          break;
          case 4:
            this.saveInfo.mannager_id = this.selectList[i].user_id;
            this.pageData.mannager_name = value;
          break;
          case 5:
            this.saveInfo.general_id = this.selectList[i].user_id;
            this.pageData.general_name = value;
          break;
          default:console.log("参数错误！");
        }
      }
    }
    this.setModel = false;
  }

  // 保存联系人信息
  savePerson(){
    this.saveInfo.link_id = this.link_id;
    if(this.pageData.state){
      this.saveInfo.state = 1;
    }else{
      this.saveInfo.state = 0;
    }
    this.saveInfo.user_link = this.pageData.user_link;
    this.saveInfo.user_tel = this.pageData.user_tel;
    console.log(99696);
    console.log(this.saveInfo);
    console.log(100256);
    let that = this;
    let mainUrl = "intf_ProAPPMain:CALL";
    let childUrl = "intf_ProviderLinkInfoEdit:POST";
    this.NewapiService.baseAPI(this.saveInfo,mainUrl,childUrl,this.saveInfoSuccess,that,true);
  }
  // 保存成功回调函数
  saveInfoSuccess(res, that){
    that.toastTips.showToast(res.result.msg);
  }
}
