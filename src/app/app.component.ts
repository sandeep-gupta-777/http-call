import {Component, OnInit, SecurityContext} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

export interface IHeaderData {
  'auth-token'?: string;
  'content-length'?: string;
  'content-type'?: string;
  'cookie'?: string;
  'origin'?: string;
  'referer'?: string;
  'user-agent'?: string;
  'user-access-token'?: string;
  'api-key'?: string;
  'bot-access-token'?: string;

}


@Component({
  selector: 'app-root',
  template: `
    test
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  createHeaders(headerData?: any): HttpHeaders {
    let headers = new HttpHeaders();
    const tokenData: IHeaderData = {};

    headerData = {
      ...tokenData,
      ...headerData,
    };

    if (headerData) {
      for (const key in headerData) {
        /*don't set header data for undefined values*/
        // tslint:disable-next-line:no-unused-expression
        headerData[key] && (headers = headers.set(key, headerData[key]));
      }
    }
    return headers;
  }

  constructor(private httpClient: HttpClient) {
  }


  form: FormGroup;

  ngOnInit(): void {
    this.makeGetReq({
      url: 'http://25ccda7f.ngrok.io/alfred/algorithms',
      // url: 'https://staging.imibot.ai/api/v1/moduledetails/?limit=1000',
      headerData: {'auth-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRfaWQiOiJqc24ifQ.NhBaJ3Zd92Ix6hJPxd0mj7koEEponjxWDKTm_UfnkcM'}
    });
  }

  // createTestForm() {
  //   return this.formBuilder.group({
  //     name: 'test name',
  //   });
  // }

  makeGetReq<T>(reqObj: { url: string, headerData?: any, noValidateUser?: boolean }) {
    debugger;
    const headers = this.createHeaders(reqObj.headerData);

    this.httpClient.get<T>(reqObj.url, {headers: headers})
      .subscribe(() => {
        alert();
      });
  }
}
