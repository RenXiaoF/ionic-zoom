import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewapiService } from 'src/services/api/newapi.service'

@Component({
  selector: 'app-gongneng',
  templateUrl: './gongneng.page.html',
  styleUrls: ['./gongneng.page.scss'],
})
export class GongnengPage implements OnInit {
  public user_id:string = "141773";//保存用户id
  public deptid:string = "7";//保存部门号id
  public isApproval:boolean = false;//保存页面状态
  public headerTitle:string = "工作点申请";//头部标题


  //保存节点信息
  public nodeInfo = {
    "myModelMainList":"",
    "myModelActList":"",
    "ModelList":[]
  };

  // 初始化页面数据对象
  public initInfo = {
    "user_id":"",
    "deptid":""
  };
  // 提交功能点数据对象
  public submitData = {
    "user_id":"",
    "deptid":"",
    "model_ids":"",
    "modelson_ids":""
  }

  constructor(
    private router:Router,
    private NewapiService:NewapiService
    ) { }

  ngOnInit() {
    this.initInfo.user_id = this.user_id;
    this.initInfo.deptid = this.deptid;
    this.init();
  }
  // 发送请求初始化页面数据
  init(){
    let that = this;
    let mainUrl = "intf_ProAPPMain:CALL";
    let childUrl = "intf_ProviderPoints:POST";
    this.NewapiService.baseAPI(this.initInfo,mainUrl,childUrl,this.initSuccess,that,true);
  }
  // 初始化数据成功回调函数
  initSuccess(res, that){
    that.nodeInfo = res.result.result;

    let arr = that.nodeInfo.myModelMainList.split(",");
    let arr1 = that.nodeInfo.myModelActList.split(",");

    // 初始化所有节点为false
    for(let mainNode of that.nodeInfo.ModelList){
      // 初始化主节点
      mainNode.isChecked = false;
      // 初始化子节点
      if(mainNode.action_sql && mainNode.action_sql!="xx"){
        mainNode.action_sql = eval(mainNode.action_sql);
        for(let childNode of mainNode.action_sql){
          childNode.isChecked = false;
        }
      }
    }
    // 同步主节点和子节点状态
    if(that.nodeInfo.myModelMainList){
      // 同步主节点
      for(let mainNode of that.nodeInfo.ModelList){
        for(let i=0; i<arr.length; i++){
          if(mainNode.model_id == arr[i]){
            mainNode.isChecked = true;
          }
        }
        // 同步子节点
        if(that.nodeInfo.myModelActList && mainNode.action_sql && mainNode.action_sql!="xx"){
          for(let childNode of mainNode.action_sql){
            for(let i=0; i<arr1.length; i++){
              if(childNode.modelson_id == arr1[i]) {
                childNode.isChecked = true;
              }
            }
          }
        }
      }
    }
  }
  //返回主页面(suppliermy) 
  goback(){
    this.router.navigate(['suppliermy']);
  }

  //子功能选项状态修改事件
  itemChange(myIndex, objList){
    var items = objList.action_sql;
    // 保存子功能选中个数
    var checkCount = 0;
    for(var item of items){
      if(item.isChecked){
        checkCount++;
      }
    }
    // 双向绑定数据延迟跟新解决方法
    if(!items[myIndex].isChecked){
      objList.isChecked = true;
      return;
    }
    if(items[myIndex].isChecked && checkCount===1){
      objList.isChecked = false;
      return;
    }
    if(checkCount>0){
       objList.isChecked = true;
    }else{
      objList.isChecked = false;
    }
  }
  //主功能选项状态修改事件
  mainChange(objList){
    if(objList.action_sql&&objList.action_sql!='xx'){
      var items = objList.action_sql;
      for(var item of items){
        item.isChecked = !objList.isChecked;
      }
    }
  }
  // 提交申请按钮处理事件
  submitInfo(){
    this.initSubmitData();// 清空submitData的数据
    // 重新赋值
    this.submitData.user_id = this.user_id;
    this.submitData.deptid = this.deptid;
    // 处理主节点数据
    if(!this.nodeInfo.myModelMainList){
      this.submitData.model_ids = "";
    }else{
      for(let mainNode of this.nodeInfo.ModelList){
        if(mainNode.isChecked){
          this.submitData.model_ids += mainNode.model_id+","
        }
      }
      this.submitData.model_ids = this.submitData.model_ids.slice(0,this.submitData.model_ids.length-1)
    }
    // 处理子节点数据
    if(!this.nodeInfo.myModelActList){
          this.submitData.modelson_ids = "";
    }else{
      for(let mainNode of this.nodeInfo.ModelList){
        if(mainNode.action_sql && mainNode.action_sql!="xx"){
          for(let childNode of mainNode.action_sql){
            if(childNode.isChecked){
              this.submitData.modelson_ids += childNode.modelson_id+"," 
            }
          }
        }
      }
      this.submitData.modelson_ids = this.submitData.modelson_ids.slice(0,this.submitData.modelson_ids.length-1)
    }

    let that = this;
    let mainUrl = "intf_ProAPPMain:CALL";
    let childUrl = "intf_ProviderPointsApply:POST";
    this.NewapiService.baseAPI(this.submitData,mainUrl,childUrl,this.submitSuccess,that,true);
  }
  // 提交成功回调函数
  submitSuccess(res, that){
    that.isApproval = true;
    that.headerTitle = "工作点审核";
  }
  // 提交数据初始化
  initSubmitData(){
    for(var key in this.submitData){
      this.submitData[key] = "";
    }
  }

  // 重新申请事件处理
  reApply(){
    this.isApproval = false;
    this.headerTitle = "工作点申请";
  }

}
