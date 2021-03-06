import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Util} from './Util';
import { IS_DEBUG, APP_ONLINE_SERVE_URL, APP_VERSION_SERVE_URL } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {
  url: string;
  name: string;

  constructor(public http: HttpClient,public Util:Util) { 
    if (IS_DEBUG) {
      this.url = "http://192.168.2.99:5414/ross/call/";
    } else {
      this.url = "http://192.168.2.99:5414/ross/call/";
    }
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

  post(endpoint: string, body: any, reqOpts?: any) {
  
    return this.http.post(this.url + endpoint, body, reqOpts);
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
