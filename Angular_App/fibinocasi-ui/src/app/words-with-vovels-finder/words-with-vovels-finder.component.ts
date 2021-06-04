import { Component, OnInit } from '@angular/core';
import { Observable, Subscription,from} from 'rxjs';

@Component({
  selector: 'app-words-with-vovels-finder',
  templateUrl: './words-with-vovels-finder.component.html',
  styleUrls: ['./words-with-vovels-finder.component.css']
})
export class WordsWithVovelsFinderComponent implements OnInit {

  resultArray:string[]= [];

  constructor() { }


  ngOnInit(): void {

    // console.log(this.findWordsWithVovels("apple orange schl play comb gfvd"));
  }


  getValues(formData: any) {
    this.findWordsWithVovels(formData.sentance);
    
  }

  findWordsWithVovels(sentance:string){

  var wordArray = sentance.split(" "); 

  let unSortedResultArray:string[] = [];

  this.resultArray = [];

  wordArray.forEach(element => {

    if(element.match(/[aeiouAEIOU]/)){
      unSortedResultArray.push(element);
    };

    this.resultArray = unSortedResultArray.sort();

  });
  // return resultArray;

  }

}
