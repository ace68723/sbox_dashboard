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

    getStatusMapping() {
      return [
        {'id': 0, 'name': '正常'},
        {'id': 1, 'name': '已售罄'},
        {'id': 9, 'name': '已下线'},
      ];
    }
    getTable() {
      const headers = new Headers({
        'Content-Type': 'application/json',
      });
      const options = new RequestOptions({ headers: headers });

      return this.http
        .get
        ('http://chanmao.us/api/sbmanage/v2/tmp_info',
        options).map((response: Response) => {
          return response.json();
        }).catch(this.handleError);
    }
    getCredit() {
      const headers = new Headers({
        'Content-Type': 'application/json',
      });
      const options = new RequestOptions({ headers: headers });

      return this.http
        .get
        ('https://chanmao.us/api/sbmanage/v1/num_cc',
        options).map((response: Response) => {
          return response.json();
        }).catch(this.handleError);
    }
    getWeeklyCount(time) {
      const headers = new Headers({
        'Content-Type': 'application/json',
      });
      const body = {
         'iv_start': time.iv_start,
         'iv_end': time.iv_end
      };
      const options = new RequestOptions({ headers: headers});
      return this.http.post
        ('https://chanmao.us/api/sbmanage/v1/week_prod_count', JSON.stringify(body),
        options).map((response: Response) => {
          return response.json();
        }).catch(this.handleError);
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
        'iv_spu_id': parseInt(spu_id, 10),
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
      const body = {
        'spu_id': spu_id,
        'spu_status': new_status,
      };
      return this.updateSPUData(body);
    }

    updateSPUData(new_data) {
      const headers = new Headers({
        'Authortoken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMDYxMSIsImV4cGlyZWQiOjE0ODc3OTM2MDAsImxhc3Rsb2dpbiI6MTQ4MTc0MjU2N30.ZHwmJEBV_1cO5uxR729Hd49rRIpRdCEDbX-uVDgVee0',
        'uuid': '1',
        'Content-Type': 'application/json',
      });
      const options = new RequestOptions({ headers: headers });
      return this.http
        .post('http://norgta.com/api/sbmanage/v2/set_spu', new_data, {headers: headers}
        ).map((response: Response) => {
          return response.json();
        }).catch(this.handleError);
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
      const body = {
        'sku_id': sku_id,
        'sku_status': new_status,
      };
      return this.updateSKUData(body);
    }

    updateSKUData(new_data) {
      const headers = new Headers({
        'Authortoken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMDYxMSIsImV4cGlyZWQiOjE0ODc3OTM2MDAsImxhc3Rsb2dpbiI6MTQ4MTc0MjU2N30.ZHwmJEBV_1cO5uxR729Hd49rRIpRdCEDbX-uVDgVee0',
        'uuid': '1',
        'Content-Type': 'application/json',
      });
      const options = new RequestOptions({ headers: headers });
      return this.http
        .post('http://norgta.com/api/sbmanage/v2/set_sku', new_data, {headers: headers}
        ).map((response: Response) => {
          return response.json();
        }).catch(this.handleError);
    }
}
