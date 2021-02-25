import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewapiService } from 'src/services/api/newapi.service';
import { PresentToastService } from 'src/services/Toast/presentToast.service';

@Component({
  selector: 'app-contactscrad',
  templateUrl: './contactscrad.page.html',
  styleUrls: ['./contactscrad.page.scss'],
})
export class ContactscradPage implements OnInit {
   // 初始化页面数据对象
   public initInfo = {
    "link_id":"0",
  } 
  public isuse: boolean = false; //是否启用按钮默认为否
  public inputlist = ['联系姓名', '联系电话'];
  public searchlist = ['设置主管', '设置经理', '设置总监'];
  public inputdata = ['', ''];    //---改变后的姓名、电话
  public searchdata = ['', '', ''];   //---改变后的主管、经理、总监
  public inputType: boolean = true; //点击框类型，默认为文本框，false为选择框
  //--- 接受成员管理页面传过来的值
  public cardinformation = {
    "state":this.isuse,
    "user_id":"",
    "user_name":"",
    "user_link":"",
    "user_tel":"",
    "link_id":"",
    "d_nickname":"",
    "m_nickname":"",
    "g_nickname":"",
    "director_id":"",
    "mannager_id":"",
    "general_id":"",
    "type":"",
    "title":""
  }; 


  // 提交联系人信息数据对象
  public saveInfoData = {
    "link_id":"",
    "state":0,
    "user_link":"",
    "user_tel":"",
    "director_id":"",
    "mannager_id":"",
    "general_id":""
  }

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private NewapiService: NewapiService,
    private toastTips: PresentToastService,
    ) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe((res)=>{
      this.initInfo.link_id = res.id;
      this.cardinformation.link_id = res.id;
      this.init();
    });
  }

  ngAfterContentChecked() {
    let choseresult = this.ActivatedRoute.snapshot.queryParams["choseresult"];
    if (choseresult != '' && choseresult != null && choseresult != undefined) {
      let changeresult = JSON.parse(choseresult);
      if (changeresult.types == 'input') {
        for (var i = 0; i < this.inputlist.length; i++) {
          if (this.inputlist[i] == changeresult.titlename) {
            this.inputdata[i] = changeresult.val;
          }
        }
      } else {
        for (var j = 0; j < this.searchlist.length; j++) {
          if (this.searchlist[j] == changeresult.titlename) {
           
            this.searchdata[j] = changeresult.val;
          }
        }
      }
    }
  }


  gocontactcarddetails(index) {
    // switch (index){
    //   case 0:this.backvalue = this.transdata.user_link; console.log(this.transdata.user_link );break;
    //   case 1:this.backvalue = this.transdata.user_tel;console.log(this.transdata.user_tel);break;
    //   case 2:
    //     {
    //       this.backvalue = this.transdata.d_nickname;console.log(this.transdata.d_nickname);
    //       this.initSelect();
    //     };
    //   break;
    //   case 3:
    //     {
    //       this.backvalue = this.transdata.m_nickname;console.log(this.transdata.m_nickname);
    //       this.initSelect();
    //     };
    //     break;
    //   default:
    //     {
    //       this.backvalue = this.transdata.g_nickname;console.log(this.transdata.g_nickname);
    //       this.initSelect();
    //     };
    //   }
  }
  // 初始化页面数据
  init(){
    let that = this;
    let mainUrl = "intf_ProAPPMain:CALL";
    let childUrl = "intf_ProviderLinkInfo:POST";
    this.NewapiService.baseAPI(this.initInfo,mainUrl,childUrl,this.initSuccess,that,true);
  }
  // 初始化成功回调函数
  initSuccess(res, that){
    that.isuse = res.result.result[0].state;

    that.inputdata[0] = res.result.result[0].user_link;
    that.inputdata[1] = res.result.result[0].user_tel;

    that.searchdata[0] = res.result.result[0].director_name;
    that.searchdata[1] = res.result.result[0].mannager_name;
    that.searchdata[2] = res.result.result[0].general_name;

    that.cardinformation.user_id = res.result.result[0].user_id;
    that.cardinformation.user_name = res.result.result[0].user_name;
    that.cardinformation.state = res.result.result[0].state;
    that.cardinformation.user_link = res.result.result[0].user_link;
    that.cardinformation.user_tel = res.result.result[0].user_tel;
    that.cardinformation.director_name = res.result.result[0].director_name;
    that.cardinformation.mannager_name = res.result.result[0].mannager_name;
    that.cardinformation.general_name = res.result.result[0].general_name;
  }
  // 保存联系人信息
  saveInfo(){
    this.saveInfoData.link_id = this.cardinformation.link_id;
    if(this.isuse){
      this.saveInfoData.state = 1;
    }else{
      this.saveInfoData.state = 0;
    }
    this.saveInfoData.user_link = this.cardinformation.user_link;
    this.saveInfoData.user_tel = this.cardinformation.user_tel;
    this.saveInfoData.director_id = this.cardinformation.director_id;
    this.saveInfoData.mannager_id = this.cardinformation.mannager_id;
    this.saveInfoData.general_id = this.cardinformation.general_id;
    let that = this;
    let mainUrl = "intf_ProAPPMain:CALL";
    let childUrl = "intf_ProviderLinkInfoEdit:POST";
    this.NewapiService.baseAPI(this.saveInfoData,mainUrl,childUrl,this.saveInfoSuccess,that,true);
  }
  // 保存成功回调函数
  saveInfoSuccess(res, that){
    that.toastTips.showToast(res.result.msg);
    that.router.navigate(["suppliercygl"]);
  }
}
