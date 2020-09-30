import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcortadorService {

  urlBitly = 'https://api-ssl.bitly.com/v4/shorten';
  token = '2604cae72d90266805fe4bdb8e8555bcd70d8f39';


  constructor(private http: HttpClient) { }

  getUrlShort(url: string): Observable<any> {
    const token = this.getToken();
    const body = {
      long_url: url
    };

    return this.http.post(this.urlBitly, body, { headers: token });
  }

  getToken() {
    const tokenHeader = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    return tokenHeader;
  }
}