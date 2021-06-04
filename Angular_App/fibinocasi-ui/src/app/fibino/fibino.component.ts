import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibino',
  templateUrl: './fibino.component.html',
  styleUrls: ['./fibino.component.css']
})
export class FibinoComponent implements OnInit {

  fibinoResults: string = "Your results will appear here!";

  getValues(formData: any) {
    if(formData.searchTerm<0){
      this.fibinoResults = "Please Make sure to enter non negative numbers or Zero"
    }
    else{
      this.fibinoResults = formData.searchTerm + "th fibinocasi number is " + this.calculateFibinocasi(formData.searchTerm);
      // this.fibinoResults = formData.searchTerm + "th fibinocasi number is " + this.calculateSumFibinocasi(4,6);
      
    }
    
  }

  calculateFibinocasi(inputValue: number): number {
    if (inputValue <= 1) {
      return inputValue;
    }
    return this.calculateFibinocasi(inputValue - 1) + this.calculateFibinocasi(inputValue - 2);
  }

  calculateSumFibinocasi(lowerLimit:number , upperLimit:number):number{

    let sum = 0;
    for(let i=lowerLimit;i<upperLimit;i++){

      sum += this.calculateFibinocasi(i);

    }
    return sum;

  }


  constructor() { }

  ngOnInit(): void {
  }

}
