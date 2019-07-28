import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'oodio-price-estimator';
    public sliderVal = 1;

    public bookTypes = [{ 
      bookTypeId:'1',  
      bookType:'PressBook'
      },
      { 
      bookTypeId:'2',  
      bookType:'Flushmount'
      },
      {
      bookTypeId:'3',  
      bookType:'Magnum'
      }
    ];
    public pressBookSize = [{'size':'Medium'},{'size':'Large'}] ;
    public liteBookSize = [{'size':'Medium'},{'size':'Large'}] ;
    public flushMountSize = [{'size':'Medium/Large'},{'size':'Wide'}] ;
    public magnumSize = [{'size':'All Sizes'}]; 
    constructor() { }
    public totalImgCost = 0;
    public bookSizeCost = 0; 
    public finalCost = 0;
    public totalCost =0;
    public taxCost = 5;
    public bookTypeSelected = '';
    public bookSizeSelected = '';
    public signature =true;


  myOnChange(event: any){
    console.log(event.from);
    this.sliderVal = event.from;
    this.finalCostCal(this.sliderVal, this.bookSizeCost);
  };

  public sizeSelection = [];
  onOptionsSelected(value:string){
       console.log("the selected value is " + value);
        this.bookTypeSelected = value
       if(value=='PressBook'){
          this.sizeSelection = this.pressBookSize;
       }else if(value=='Flushmount'){
            this.sizeSelection = this.flushMountSize;
       }else if(value=='Magnum'){
          this.sizeSelection = this.magnumSize;
       }
       console.log(JSON.stringify(this.sizeSelection));
  }
  onSizeSelected(value:string){
    this.bookSizeSelected = value;
    
    console.log("bookType=>"+this.bookTypeSelected+""+"bookSize=>"+this.bookSizeSelected);
    if((this.bookTypeSelected=='PressBook') && (this.bookSizeSelected=='Medium') ){
        this.bookSizeCost = 109.99;
    }else if((this.bookTypeSelected=='PressBook') && (this.bookSizeSelected=='Large') ){
        this.bookSizeCost = 119.99;
    }else if((this.bookTypeSelected=='Flushmount') && (this.bookSizeSelected=='Medium/Large' )){
        this.bookSizeCost = 149.99;
    }else if((this.bookTypeSelected=='Flushmount') && (this.bookSizeSelected=='Wide') ){
        this.bookSizeCost = 179.99;
    }else if((this.bookTypeSelected=='Magnum') && (this.bookSizeSelected=='All Sizes') ){
        this.bookSizeCost = 179.99;
    }
    else if((this.signature==false) && (this.bookSizeSelected=='Medium') ){
        this.bookSizeCost = 89.99;
    }
    else if((this.signature==false) && (this.bookSizeSelected=='Large') ){
        this.bookSizeCost = 109.99;
    }
    this.finalCostCal(this.sliderVal,this.bookSizeCost)
  }
  bookSelection(value:number){
    if(value==1){
    this.signature = true;
    this.finalCost = 0;
    }else{
      this.signature = false;
      this.finalCost = 0;
    }
  }
  finalCostCal(totalImagCost,bookSizeCost){
  console.log("totalImagCost=>"+totalImagCost+""+"bookSizeCost=>"+bookSizeCost+""+"this.tax=>"+this.taxCost);
    this.totalCost = Number(((Number(totalImagCost)*Number(bookSizeCost))*this.taxCost)/100);
    this.finalCost =  Number((Number(totalImagCost)*Number(bookSizeCost))+this.totalCost);
  }
}