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
  private results: Array<any>;

  constructor(private service:DictionaryService){ }

  ngOnInit() {
    this.service.search(this.mockWord).subscribe(data=>this.results=data[0].shortdef);
  }

  public search(){
    return this.service.search(this.word).subscribe(data=>this.results=data[0].shortdef);
    console.log(this.word);
  }
}
