import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagerecording',
  templateUrl: './messagerecording.page.html',
  styleUrls: ['./messagerecording.page.scss'],
})
export class MessagerecordingPage implements OnInit {
  public messagereord = [
    { ordernum: 'WPS1425365541255', readtime: '2019/7/31 10:42:46', readstate: '已读' },
    { ordernum: 'WBS1425324231255', readtime: '2019/7/21 11:22:6', readstate: '已读' },
    { ordernum: 'WVS1425322343245', readtime: '2019/3/11 10:41:36', readstate: '已读' },
    { ordernum: 'WFS1445454534555', readtime: '2019/4/21 10:22:16', readstate: '已读' },
    { ordernum: 'WAS2222343341255', readtime: '2019/6/21 10:12:46', readstate: '已读' },
    { ordernum: 'WSS144545241255', readtime: '2019/2/4 10:12:46', readstate: '已读' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
