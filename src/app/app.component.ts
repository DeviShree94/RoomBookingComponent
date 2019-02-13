import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel-booking-comp';
  roomCount:number =1;
  disableRoomDecrement: boolean = true;
  disableRoomIncrement: boolean = false;
  adultCount:number = 1;
  disableAdultDecrement:boolean = true;
  disableAdultIncrement:boolean = false;
  childrenCount:number =0;
  disableChildDecrement:boolean = true;
  disableChildIncrement:boolean = false;

  constructor(){}

  decreaseRoomCount(){
    this.roomCount--;
    while((this.childrenCount + this.adultCount) > (this.roomCount*4)){
      if(this.childrenCount){
        this.childrenCount--;
      }
      else{
        this.adultCount--;
      }
    }
    this.disableButtons();
  }

  increaseRoomCount(){
    this.roomCount++;
    if(this.roomCount > (this.adultCount + this.childrenCount)){
      this.adultCount++;
    }
    this.disableButtons();
  }

  decreaseAdultCount(){
    this.adultCount--;
    /*if each room should have an adult then uncomment the below lines and line number 57 and then comment line no 54,55 & 56*/
    
    // if(this.adultCount < this.roomCount){
    //   this.roomCount--;
    //   while(((this.childrenCount + this.adultCount) > (this.roomCount* 4)) && (this.adultCount !== 3)){
    //     if(this.childrenCount){
    //       this.childrenCount--;
    //     }
    //   }
    // }
    while((this.adultCount + this.childrenCount) < this.roomCount){
      this.roomCount--;
    }
    //else 
    if(((this.childrenCount + this.adultCount) > (this.roomCount* 4)) && (this.adultCount !== 3)){
      this.roomCount--;
    }
    this.disableButtons();
  }

  increaseAdultCount(){
    this.adultCount++;
    let totalNoOfPersons:number;
    totalNoOfPersons = this.adultCount + this.childrenCount;
    if((totalNoOfPersons) <= 20){
      if((totalNoOfPersons) > (this.roomCount * 4)){
        this.roomCount = this.roomCount < 5 ? this.roomCount + 1 : 5;
      }
    }
    this.disableButtons();
  }

  decreaseChildrenCount(){
    this.childrenCount--;
    while((this.adultCount + this.childrenCount) < this.roomCount){
      this.roomCount--;
    }
    if((this.adultCount + this.childrenCount) > (this.roomCount*4)){
      this.roomCount--;
    }
    this.disableButtons();
  }

  increaseChildrenCount(){
    this.childrenCount++;
    let totalNoOfPersons:number;
    totalNoOfPersons = this.adultCount + this.childrenCount;
    if((totalNoOfPersons) <= 20){
      if((totalNoOfPersons) > (this.roomCount * 4)){
        this.roomCount++;
      }
    }
    this.disableButtons();   
  }
  
  disableButtons(){
    this.disableRoomDecrement = this.roomCount === 1 ? true : false;
    this.disableRoomIncrement = this.roomCount === 5 ? true : false;
    this.disableAdultDecrement = this.adultCount === 1 ? true : false;
    this.disableAdultIncrement = (this.adultCount + this.childrenCount) === 20 ? true : false;
    this.disableChildDecrement = this.childrenCount === 0 ? true : false;
    this.disableChildIncrement = (this.adultCount + this.childrenCount) === 20 ? true : false;
  }
}
