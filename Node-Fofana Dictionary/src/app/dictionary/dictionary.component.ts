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
    this.service.search(this.mockWord).subscribe(data=>this.results=data[0].shortdef);
    this.display = this.mockWord;
  }

  public search(){
    this.display = this.word;
    return this.service.search(this.word).subscribe(data=>this.results=data[0].shortdef);
    console.log(this.word);
  }
}
