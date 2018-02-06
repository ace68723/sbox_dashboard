import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {
    Injectable
  } from '@angular/core';
  @Injectable()

export class AppService {
    constructor( private http: Http) {

    }

    private handleError(error: Response) {
      return Observable.throw(error.json());
    }

    // SPU related
    getSPUList(page_num) {
      const headers = new Headers({
        'Authortoken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMDYxMSIsImV4cGlyZWQiOjE0ODc3OTM2MDAsImxhc3Rsb2dpbiI6MTQ4MTc0MjU2N30.ZHwmJEBV_1cO5uxR729Hd49rRIpRdCEDbX-uVDgVee0',
        'uuid': '1',
        'Content-Type': 'application/json',
      });
      const options = new RequestOptions({ headers: headers });

      return this.http.post(
          'http://norgta.com/api/sbmanage/v2/get_spu_list',
          {'iv_page_num': page_num, 'iv_page_size': 8},
          { headers: headers}
        ).map((response: Response) => {
          return response.json();
        }).catch(this.handleError);
    }

    getSPUInfo(spu_id, page_num) {
      const headers = new Headers({
        'Authortoken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMDYxMSIsImV4cGlyZWQiOjE0ODc3OTM2MDAsImxhc3Rsb2dpbiI6MTQ4MTc0MjU2N30.ZHwmJEBV_1cO5uxR729Hd49rRIpRdCEDbX-uVDgVee0',
        'uuid': '1',
        'Content-Type': 'application/json',
      });
      const body = {
        'iv_spu_id': parseInt( spu_id),
        'iv_page_num': page_num,
      };
      const options = new RequestOptions({ headers: headers });
      return this.http
        .post('http://norgta.com/api/sbmanage/v2/get_spu_detail', body, {headers: headers}
        ).map((response: Response) => {
          return response.json();
        }).catch(this.handleError);
    }

    setSPUStatus(spu_id, new_status) {
      const headers = new Headers({
        'Content-Type': 'application/json',
      });
      const options = new RequestOptions({ headers: headers });

      return this.http.get('https://api.myjson.com/bins/18ex91',
      options).map((response: Response) => {
          return response.json();
        }).catch(this.handleError);
    }

    updateSPUData(spu_id, new_data) {
      const headers = new Headers({
        'Content-Type': 'application/json',
      });
      const options = new RequestOptions({ headers: headers });

      // return this.http
      //   .get
      //   ('http://chanmao.us/api/sbmanage/v1/tmp_info',
      //   options).map((response: Response) => {
      //     return response.json();
      //   }).catch(this.handleError);
    }

    // SKU related
    getSKUList(spu_id, page_num) {
      const headers = new Headers({
        'Content-Type': 'application/json',
      });
      const options = new RequestOptions({ headers: headers });

      return this.http.get('https://api.myjson.com/bins/ps2v5',
      options).map((response: Response) => {
          return response.json();
        }).catch(this.handleError);
    }

    setSKUStatus(sku_id, new_status) {
      const headers = new Headers({
        'Content-Type': 'application/json',
      });
      const options = new RequestOptions({ headers: headers });

      // return this.http
      //   .get
      //   ('http://chanmao.us/api/sbmanage/v1/tmp_info',
      //   options).map((response: Response) => {
      //     return response.json();
      //   }).catch(this.handleError);
    }
    updateSPKData(spu_id, new_data) {
      const headers = new Headers({
        'Content-Type': 'application/json',
      });
      const options = new RequestOptions({ headers: headers });

      // return this.http
      //   .get
      //   ('http://chanmao.us/api/sbmanage/v1/tmp_info',
      //   options).map((response: Response) => {
      //     return response.json();
      //   }).catch(this.handleError);
    }
}
