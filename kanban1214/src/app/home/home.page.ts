import {ApiService} from '../../services/api/api.service';
import {Params, ActivatedRoute,  Router} from '@angular/router';
import {PresentToastService} from '../../services/Toast/presentToast.service';
import {PresentAlertService} from '../../services/Alert/presentAlert.service';
import {PopoverController, ToastController,  AlertController,   ActionSheetController,    ModalController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public ModalController:ModalController,
              public PresentAlertService:PresentAlertService,
              public PresentToastService:PresentToastService,
              public ActionSheetController:ActionSheetController,
              public AlertController:AlertController,
              public Router:Router,
              public ToastController:ToastController,
              public PopoverController:PopoverController,
              public activeRoute: ActivatedRoute,
              public ApiService: ApiService) {}
  ngOnInit() {
   this.test();
  }


  test(){
    let header = {
      headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    }
    let b = new Base64();
    let call_page = {};
    call_page['locate1'] = '0004';
    let paramet = b.encode(JSON.stringify(call_page));
    let data ='action=intf_LocationQuery:GET&paramet='+paramet;
    this.ApiService.post('intf_YYAPP_Main:CALL',data,header).subscribe(
        (res:any)=>{
          console.log(999);
          console.log(res);
        },
        (err)=>{

        }
    );
  }

}
