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
        'Content-Type': 'application/json',
      });
      const options = new RequestOptions({ headers: headers });

      return this.http
        .get
        ('https://api.myjson.com/bins/18ex91',
        options).map((response: Response) => {
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

      // return this.http
      //   .get
      //   ('http://chanmao.us/api/sbmanage/v1/tmp_info',
      //   options).map((response: Response) => {
      //     return response.json();
      //   }).catch(this.handleError);
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
