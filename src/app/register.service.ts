import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppUser } from './appUser';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiServerUrl = environment.apiBasedUrl;

  constructor(private httpClient: HttpClient) { }

  //TODO
  public register(appUser: AppUser): Observable<String> {
    console.log("registration data sent to backend");

    //created this as somewhere was expecting text and returning JSON
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/plain, */*',
        'Content-Type': 'application/json' // We send JSON
      }),
      responseType: 'text' as 'json'  // We accept plain text as response.
    };

    return this.httpClient.post<String>(`${this.apiServerUrl}/registration`, appUser, httpOptions);
}
}
