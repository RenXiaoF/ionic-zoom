import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Util} from './Util';
import { IS_DEBUG, APP_ONLINE_SERVE_URL, APP_VERSION_SERVE_URL } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class NewapiService {
  url: string;
  name: string;
  IP:string;

  constructor(public http: HttpClient,public Util:Util) {
    // this.IP = 'http://192.168.2.99:5414';
    this.IP = 'http://192.168.2.188:5414';
    if (IS_DEBUG) {
      // this.url = this.IP+"/ross/call/";
      this.url = this.IP+"/ross/post/";
    } else {
      // this.url = this.IP+"/ross/call/";
      this.url = this.IP+"/ross/post/";
    }

  }

  post(endpoint: string, body: any, reqOpts?: any, postType?: boolean) {
    if(postType){
      // this.url = this.IP+"/ross/api/";
      this.url = this.IP+"/ross/post/";
    }else{
      this.url = this.IP+"/ross/post/";
      // this.url = this.IP+"/ross/call/";
    }
    return this.http.post(this.url + endpoint, body, reqOpts);
  }
  /**
   * 
   * @param obj : 传入的参数对象
   * @param mainUrl ：主接口
   * @param childUrl ：子接口
   * @param callback ：回调函数
   * @param that ：调整回调函数指针指向
   * @param postType ：修改请求接口（默认：ross/call/）（ture：ross/api/）
   */
  baseAPI(obj, mainUrl:string, childUrl:string, callback, that, postType :boolean = false){
    let header = {
      headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    }
    let b = new Base64();
    let call_page = {};
    for(let item in obj){
      call_page[item] = obj[item];
    }

    
    // let paramet = b.encode(JSON.stringify(call_page));
    // let data ='action='+childUrl+'&paramet='+paramet;

    let paramet = '';
    let data ='CardNO='+paramet;
    console.log(call_page)
    console.log(data)

    this.post(mainUrl,data,header,postType).subscribe(
        (res:any)=>{
          console.log(res);
          callback(res, that);
        },
        (err)=>{
          console.log(err);
        }
    );
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }
    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        if (typeof params[k] !== "undefined") {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }

    return this.http.get(this.url + endpoint, reqOpts);
  }
  postFormData(endpoint: string, params?: any, reqOpts?: any){
    let par = {};//重新组合参数数组
    if (params) {
      for (let k in params) {
        if (typeof params[k] !== "undefined") {
          par[k] = params[k];
        }
      }
    }
    return this.http.post(this.url + endpoint,this.buildURLSearchParams(par),reqOpts);
  }



  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + endpoint, body, reqOpts);
  }
  private buildURLSearchParams(paramMap) {
    if (!paramMap) {
      return new HttpParams({fromString: ''});
    }
    // tslint:disable-next-line:prefer-const
    let formstr = Object.keys(paramMap).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(paramMap[key]);
        }).join('&');
    return new HttpParams({fromString: formstr});
  }
}
