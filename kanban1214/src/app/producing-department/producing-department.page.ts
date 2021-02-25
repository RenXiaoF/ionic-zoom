import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { PresentToastService } from '../../services/Toast/presentToast.service';
@Component({
  selector: 'app-producing-department',
  templateUrl: './producing-department.page.html',
  styleUrls: ['./producing-department.page.scss'],
})
export class ProducingDepartmentPage implements OnInit {

  public test_title_list = [
    "线别", "款号", "本日目标", "07-09H",
    "07-11H", "12-14H", "14-16H", "16-18H",
    "本日累计", "达成目标率", "返工数", "返工率"
  ];

  public content_list = [];
  // 时间
  public now_time = new Date().toLocaleDateString();


  constructor(
      public toastTip : PresentToastService,
      public ApiService: ApiService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getdatalist();
  }

  // --- 获取样衣列表
  getdatalist() {
    let header = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
    // let paramet = this.now_time;
    let paramet = '2019/11/05';
    let data = 'param=' + paramet;
    console.log(data);
    this.ApiService.post('cjscmbdc', data, header).subscribe(
        (res: any) => {
          console.log(res);
          let code = res.code;
          if (code == 0) {
            this.content_list = res.result;
          }else{
            this.toastTip.showToastTips(res.result.msg);
          }
        },
        (err) => {
          console.log('res');
        }
    );
  }

}
