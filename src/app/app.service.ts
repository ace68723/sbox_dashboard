import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {
    Injectable
  } from '@angular/core';
  @Injectable()
export class AppService {
    constructor( private http: Http) {
    }
    getTable() {
        const headers = new Headers({
          'Content-Type': 'application/json',
        });
        const options = new RequestOptions({ headers: headers });

        return this.http
          .get
          ('http://chanmao.us/api/sbmanage/v1/tmp_info',
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
          private handleError (error: Response) {
            return Observable.throw(error.statusText);
          }
}
