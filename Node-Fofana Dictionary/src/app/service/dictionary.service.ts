import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '../model/headers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private url = "https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/ace";
  private strictMatch = "?strictMatch=false";
  private header: Headers = new Headers();
  private apiID = "";
  private apiKey = "";

  constructor(private http:HttpClient) { }

  search(): Observable<any>{
    return this.http.get<any>();
  }

}
