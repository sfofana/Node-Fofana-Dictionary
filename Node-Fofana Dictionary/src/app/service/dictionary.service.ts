import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private url = "https://dictionaryapi.com/api/v3/references/collegiate/json/";
  private apiKey = "your-api-key";

  constructor(private http:HttpClient) {}

  search(word: string) {
    const readUrl = this.url+word+'?key='+this.apiKey; 
    return this.http.get(readUrl);
  } 

}
