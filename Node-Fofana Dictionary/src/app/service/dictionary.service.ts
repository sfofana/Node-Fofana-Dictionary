import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private url = environment.url;
  private readonly apiKey = environment.apiKey;
  private results: any;

  constructor(private http:HttpClient) {}

  search(word: string) {
    const readUrl = this.url+word+'?key='+this.apiKey; 
    
    if(!localStorage[word]){
      this.results = this.http.get(readUrl);
      this.results.subscribe(data=>localStorage[word]=JSON.stringify(data)); //cache
      console.log('set cache');
      return this.http.get(readUrl);
    }
  } 

}
