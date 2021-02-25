import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materielapply',
  templateUrl: './materielapply.page.html',
  styleUrls: ['./materielapply.page.scss'],
})
export class MaterielapplyPage implements OnInit {
    public applylists = [{orderd:'RP00147',orderdate:'2001/2/5',ordertype:'主料',orderapplyer:'随便的',orderstatue:'未提交',checkstatue:'未审核'},
    {orderd:'RP00147',orderdate:'2001/2/5',ordertype:'主料',orderapplyer:'随便的',orderstatue:'未提交',checkstatue:'未审核'},
    {orderd:'RP00147',orderdate:'2001/2/5',ordertype:'主料',orderapplyer:'随便的',orderstatue:'未提交',checkstatue:'未审核'}]
  constructor() { }

  ngOnInit() {
  }

}
