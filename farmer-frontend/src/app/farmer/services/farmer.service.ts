import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Farmer } from '../models/farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  apiURL = "";

  constructor(
    private httpClient: HttpClient
  ) {
    this.apiURL = environment.apiURL + "/farmers/"
  }

  find(searchStr: string) {
    return this.httpClient.get<Farmer[]>(this.apiURL + searchStr);
  }
}
