import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewapiService } from 'src/services/api/newapi.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-send-good',
  templateUrl: './send-good.page.html',
  styleUrls: ['./send-good.page.scss'],
})
export class SendGoodPage implements OnInit {
  //初始化页面数据
  public initInfo = {
    "poid":"",
    "userid":"",
    "act_type":"QrySendCart"//固定不变
  };
  
  // 移除数据请求对象
  public removeData = {
    "id":"",
    "userid":"",
    "poid":"",
    "act_type":"DelSendCart"//移除对象固定值
  }
  // 移除数据请求对象
  public editData = {
    "id":"",
    "multqty":"",//表示修改的数量
    "act_type":"EditSendCart"//修改对象固定值
  }

  public products = [];//保存页面数据
  public submitSteta  = [];//保存编辑/提交按钮状态默人未编辑状态
  public submitText  = [];//保存编辑/提交按钮文本
  public editTempNum = [];//暂存提交商品数量，用于比较提交前后数据是否发生变化

  constructor(
    private router:Router,
    private NewapiService:NewapiService,
    private ActivatedRoute:ActivatedRoute,
    private alertTips:AlertController,
  ) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe((res)=>{
      this.initInfo.poid = res.poid;
      this.initInfo.userid = res.userid;
      this.init();
    });
  }

  // 页面数据初始化
  init(){
    let that = this;
    let mainUrl = "pvappmatin";
    let childUrl = "intf_PvCart:POST";
    this.NewapiService.baseAPI(this.initInfo,mainUrl,childUrl,this.initSuccess,that);
  }  
  initSuccess(res, that){
    that.products = res.result.result;
    for(let i=0; i<that.products.length; i++){
      that.submitSteta[i] = true;
      that.submitText[i] = "编辑";
    }
  }
  // 返回上一级页面(invoicestatue)发货单页面
  goback(){
    this.router.navigate(["invoiceproshipment",this.initInfo.poid]);
  }
  // 移除卡片
  removeItem(index){
    let that = this;
    this.presentAlertConfirm(index, that);
  }
  // 弹出确认框
  async presentAlertConfirm(index, that) {
    const alert = await this.alertTips.create({
      header: '提示!',
      message: "您是否要移除当前数据？",
      buttons: [
        {
          text: '取消',
          handler: () => {
          }
        }, {
          text: '确定',
          handler: () => {
            that.removeData.id = that.products[index].id;
            that.removeData.userid = that.products[index].userid;
            that.removeData.poid = that.products[index].poid;
            let mainUrl = "pvappmatin";
            let childUrl = "intf_PvCart:POST";
            that.NewapiService.baseAPI(that.removeData,mainUrl,childUrl,that.removeItemSuccess,that);
            that.products.splice(index, 1) 
            that.submitSteta.splice(index, 1) 
            that.submitText.splice(index, 1) 
          }
        }
      ]
    });

    await alert.present();
  }
  // 移除成功回调函数
  removeItemSuccess(res, that){
  }
  // 点击编辑/提交按钮
  changeNum(myIndex, steta){
    this.submitSteta[myIndex] = !steta;
    if(steta){
      this.editTempNum[myIndex] = this.products[myIndex].multqty;
      this.submitText[myIndex] = "提交";
    }else{
      this.submitText[myIndex] = "编辑";
      if(this.editTempNum[myIndex] == this.products[myIndex].multqty){
        return;
      }
      this.editData.id = this.products[myIndex].id;
      this.editData.multqty = this.products[myIndex].multqty;
      let that = this;
      let mainUrl = "pvappmatin";
      let childUrl = "intf_PvCart:POST";
      this.NewapiService.baseAPI(this.editData,mainUrl,childUrl,this.editSuccess,that);
    }
  }
  // 修改数量成功后回调函数
  editSuccess(res, that){
    console.log(333)
  }
}
