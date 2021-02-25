import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmaterielapply',
  templateUrl: './addmaterielapply.page.html',
  styleUrls: ['./addmaterielapply.page.scss'],
})
export class AddmaterielapplyPage implements OnInit {
  public materielapplylists = [
    {mains:'主料',number:'F069',name:'40A'},
    {mains:'主料',number:'F069',name:'40A'},
    {mains:'主料',number:'F069',name:'40A'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
