import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weixintuisong',
  templateUrl: './weixintuisong.page.html',
  styleUrls: ['./weixintuisong.page.scss'],
})
export class WeixintuisongPage implements OnInit {

  public exampleJson = {
    template_param: {
      title: '推送消息的标题',
      keyword1: '项目描述',
      keyword2: '工作内容',
      keyword3: '流程摘要',
      keyword4: '要求完成时间',
      keyword5: '发送人',
      remark: '备注'
    },
    user_param: '13662992256,13526985263',
    content_param: {
      open_url: '是否打开页面,1是打开消息模板后打开链接',
      title: '节点申请详情',
      api_url: '如果有审核按钮则需要填改接口地址,如果有审核按钮则需要填改接口地址',
      api_param: '包括审核调用的接口的参数,如果有审核按钮则需要填，true是审核通过，false是拒绝',
      item: [
        {
          content0: '141773',
          act_type: '0'
        },
        {
          content1: '1是输入框',
          act_type: '1'
        },
        {
          content2: '审核按钮',
          act_type: '2'
        },
        {
          content3: '拒绝按钮',
          act_type: '3'
        }
      ]
    }
  };
  public exampleItem = [];

  constructor() { }

  ngOnInit() {
    this.exampleItem = this.exampleJson.content_param.item;
  }

}
