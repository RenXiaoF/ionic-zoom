import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-detail',
  templateUrl: './apply-detail.page.html',
  styleUrls: ['./apply-detail.page.scss'],
})
export class ApplyDetailPage implements OnInit {
  public progress_report = {
    main:false,
    child:[
      {text:"子节点：车缝",isChecked:false},
      {text:"子节点：尾部",isChecked:false},
      {text:"子节点：尾期物料采购",isChecked:false}
    ]
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

  //子功能选项状态修改事件
  itemChange(myIndex, objList){
    var items = objList.child;
    // 保存子功能选中个数
    var checkCount = 0;
    for(var item of items){
      if(item.isChecked){
        checkCount++;
      }
    }
    // 双向绑定数据延迟跟新解决方法
    if(!items[myIndex].isChecked){
      objList.main = true;
      return;
    }
    if(items[myIndex].isChecked && checkCount===1){
      objList.main = false;
      return;
    }
    if(checkCount>0){
      objList.main = true;
    }else{
      objList.main = false;
    }
  }
  //主功能选项状态修改事件
  mainChange(objList){
    var items = objList.child;
    for(var item of items){
      item.isChecked = !objList.main;
    }
  }
  // 返回上一级页面(suppliergzdsp)工作点审批页面
  goback(){
    this.router.navigate(['suppliergzdsp']);
  }
  // 提交审核按钮处理事件
  submit(){
    this.router.navigate(['suppliergzdsp']);
  }
}
