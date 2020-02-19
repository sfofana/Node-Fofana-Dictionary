import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private url = "https://dictionaryapi.com/api/v3/references/collegiate/json/";
  private readonly apiKey = "your-api-key";
  private results;

  constructor(private http:HttpClient) {}

  search(word: string) {
    const readUrl = this.url+word+'?key='+this.apiKey; 
    if(!localStorage[word]){
      this.results = this.http.get(readUrl);
      this.results.subscribe(data=>localStorage[word]=JSON.stringify(data)); //cache
      return this.http.get(readUrl);
    }

    this.results = localStorage[word];
    console.log('working');
    return this.results;
  } 

}
