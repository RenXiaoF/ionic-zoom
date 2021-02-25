import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewapiService } from 'src/services/api/newapi.service';
import { PresentToastService } from 'src/services/Toast/presentToast.service';
// 手势缩放
import { PinchZoom } from '../../provides/hammer'



@Component({
  selector: 'app-delphi-study',
  templateUrl: './delphi-study.page.html',
  styleUrls: ['./delphi-study.page.scss'],
})
export class DelphiStudyPage implements OnInit {

  readonly TAG = "DelphiStudyPage-delphi学习:";

  public headerTitle: string = "delphi学习";

  delphi: any[] = [];

  constructor(
    private router: Router,
    private newApiService: NewapiService,
    private toastTips: PresentToastService,
  ) { }

  ngOnInit() {
    this.getList();
    
    PinchZoom.hammerIt('pinchzoom');
  }

  /**返回主页面 */
  goBackPage() {
    this.router.navigate(['suppliermy'])
  }

  /**获取列表 */
  getList() {

    let obj = { "CardNO": "" };
    let that = this;
    let mainUrl = "get_do_list";
    let childUrl = "";
    this.newApiService.baseAPI(obj, mainUrl, childUrl, this.submitSuccess, that, true);
  }

  /**成功后的回调函数 */
  submitSuccess(res, that) {
    console.log(that.TAG, res);
    if (res.data) {
      that.delphi = res.data
    } else {
      that.toastTips.showToast(res.msg)
    }
  }

  
}
 