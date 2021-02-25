import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { PresentToastService } from '../../services/Toast/presentToast.service';

@Component({
  selector: 'app-instorage',
  templateUrl: './instorage.page.html',
  styleUrls: ['./instorage.page.scss'],
})
export class InstoragePage implements OnInit {
  public user_id: string = "141773" // 保存用户id
  public store_house_key: string = "" // 保存用户库位搜索框输入值
  public clothes_key: string = "" // 保存用户条形码搜索框输入值
  public clothes = []  // 保存衣服信息
  public store_house: string = ""  // 暂存库位

  constructor(
    public alertTip: AlertController,
    public toastTip: PresentToastService,
    public ApiService: ApiService,
  ) {

  }

  ngOnInit() {
  }

  // 点击库位搜索按钮
  getStoreHouse() {
    this.toastTip.showLoading();
    let obj = { "locate1": this.store_house_key };
    let url = "intf_LocationQuery:GET";

    this.universalAPI(obj, url, this.houseSucceed);
  }
  // 点击条形码搜索按钮
  getClothes() {
    this.toastTip.showLoading();
    let obj = { "barcode": this.clothes_key };
    let url = "intf_BarcodeQuery:GET";

    this.universalAPI(obj, url, this.barcodeSucceed);
    // if(this.store_house_key && this.clothes_key){
    //   let header = {
    //     headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    //   }
    //   let b = new Base64();
    //   let call_page = {};
    //   call_page['barcode'] = this.clothes_key;//把输入框的条形码保存到要发送的对象中
    //   let paramet = b.encode(JSON.stringify(call_page));
    //   let data ='action=intf_BarcodeQuery:GET&paramet='+paramet;
    //   this.ApiService.post('intf_YYAPP_Main:CALL',data,header).subscribe(
    //       (res:any)=>{
    //         console.log(res);
    //         if(res.result.err_code != 0){
    //           this.toastTip.showToastTips(res.result.msg);
    //         }else{
    //           // 如果当前条形码已存在列表，则不继续添加
    //           for(var cloth of this.clothes){
    //             if(res.result.data.barcode === cloth.barcode){
    //               this.toastTip.showToastTips("当前衣服信息已存在，请勿重复查询！");
    //               return;
    //             }
    //           }
    //           this.clothes.push(res.result.data);
    //         }
    //       },
    //       (err)=>{

    //       }
    //   );
    // }else{
    //   this.toastTip.showToastTips("库位或条形码不能为空！");
    // }
  }

  // 删除衣服
  delCloth(index) {
    console.log(index);
    this.alterDel(index);
  }
  // 样衣提交
  submit() {
    this.toastTip.showLoading();
    let obj = {
      "user_id": this.user_id,
      "locate1": this.store_house_key,
      "data": this.clothes_key
    };
    let url = "intf_YYinstorage:POST";

    this.universalAPI(obj, url, this.submitSucceed);
    // if(this.store_house_key && this.clothes_key){
    //   let header = {
    //     headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    //   }
    //   let b = new Base64();
    //   let call_page = {};
    //   call_page['user_id'] = this.user_id;//把用户id保存到要发送的对象中user_id:141773
    //   call_page['locate1'] = this.store_house_key;//把输入框的条形码保存到要发送的对象中locate1:00004
    //   call_page['data'] = this.clothes_key;//把输入框的条形码保存到要发送的对象中data:white-tset00102010001
    //   let paramet = b.encode(JSON.stringify(call_page));
    //   let data ='action=intf_YYinstorage:POST&paramet='+paramet;
    //   this.ApiService.post('intf_YYAPP_Main:CALL',data,header).subscribe(
    //       (res:any)=>{
    //         console.log(res);
    //         if(res.result.err_code == 0){
    //           let temp_store_house = this.store_house_key; 
    //           let temp_clothes_key = this.clothes_key; 
    //           this.initData();
    //           this.store_house_key = temp_store_house;
    //           this.clothes_key = temp_clothes_key;
    //           this.toastTip.showToastTips("入库成功！");
    //         }
    //       },
    //       (err)=>{

    //       }
    //   );
    // }else{
    //   this.toastTip.showToastTips("库位或条形码不能为空！");
    // }
  }
  // 弹出清空框
  async clear() {
    const alert = await this.alertTip.create({
      header: '提示信息',
      message: '您确定要清空吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('你取消了本次操作');
          }
        }, {
          text: '确定',
          handler: () => {
            this.initData();
          }
        }
      ]
    });

    await alert.present();
  }
  // 弹出删除框
  async alterDel(index) {
    const alert = await this.alertTip.create({
      header: '提示信息',
      message: '您确定要删除吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('你取消了本次操作');
          }
        }, {
          text: '确定',
          handler: () => {
            this.clothes.splice(index, 1);
          }
        }
      ]
    });

    await alert.present();
  }
  // 初始化所有数据
  initData() {
    this.user_id = "141773"//保存用户id
    this.store_house_key = ""//保存用户库位搜索框输入值
    this.clothes_key = ""//保存用户条形码搜索框输入值
    this.clothes = [] //保存衣服信息
    this.store_house = "" //暂存库位
  }

  /**
   * 通用请求接口函数
   * @param obj:请求的参数对象json格式
   * @param url:请求的地址
   * @param callback:请求成功后回调函数
   */
  universalAPI(obj, url, callback) {
    var that = this;//暂存指针，不然回调函数会报错
    let header = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
    let b = new Base64();
    let call_page = {};


    for (let item in obj) {
      call_page[item] = obj[item];
    }

    let paramet = b.encode(JSON.stringify(call_page));

    let data = 'action=' + url + '&paramet=' + paramet;//请求地址

    this.ApiService.post('intf_YYAPP_Main:CALL', data, header).subscribe(
      (res: any) => {
        callback(res, that);
      },
      (err) => {

      }
    );
  }
  //库位请求成功回调函数 
  houseSucceed(res, that) {
    console.log(res);
    that.toastTip.hideLoading();

    if (res.result.err_code != 0) {
      that.toastTip.showToastTips(res.result.msg);
    } else {
      that.store_house = that.store_house_key;
      that.toastTip.showToastTips("当前查询的库位为：" + that.store_house_key + "，请继续输入条形码");
    }
  }
  //条码请求成功回调函数 
  barcodeSucceed(res, that) {
    console.log(res);
    that.toastTip.hideLoading();
    if (res.result.err_code != 0) {
      that.toastTip.showToastTips(res.result.msg);
    } else {
      // 如果当前条形码已存在列表，则不继续添加
      for (var cloth of that.clothes) {
        if (res.result.data.barcode === cloth.barcode) {
          that.toastTip.showToastTips("当前衣服信息已存在，请勿重复查询！");
          return;
        }
      }
      that.clothes.push(res.result.data);
    }
  }
  //提交请求成功回调函数 
  submitSucceed(res, that) {
    that.toastTip.hideLoading();
    console.log(res);
    if (res.result.err_code == 0) {
      let temp_store_house = that.store_house_key;
      let temp_clothes_key = that.clothes_key;
      that.initData();
      that.store_house_key = temp_store_house;
      that.clothes_key = temp_clothes_key;
      that.toastTip.showToastTips("入库成功！");
    }
  }
}
