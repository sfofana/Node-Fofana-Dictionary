import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  private mockWord = "dictionary";
  private word: string;
  private display: string;
  private results: Array<any>;

  constructor(private service:DictionaryService){ }

  ngOnInit() {
    if(!localStorage[this.mockWord]){
      this.service.search(this.mockWord).subscribe(data=>this.results=data[0].shortdef);
    }
    this.results = JSON.parse(localStorage[this.mockWord])[0].shortdef; //get cache 
    this.display = this.mockWord;
  }

  public search(){
    this.display = this.word;
    if(!localStorage[this.word]){
      this.service.search(this.word).subscribe(data=>this.results=data[0].shortdef);
    }
    if(localStorage[this.word]){
      this.results = JSON.parse(localStorage[this.word])[0].shortdef; //get cache 
      console.log('get from cache');
    }    
  }
}
