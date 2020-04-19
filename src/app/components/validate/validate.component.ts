import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  cardNumber = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]/)]);
  cardType = false;
  cardName = '';

  constructor() { }

  ngOnInit() {
  }



  getErrorMessage() {
    return this.cardNumber.hasError('required') ? 'You must enter a value' :
      this.cardNumber.hasError('pattern') ? 'Only number accepted' :
        '';
  }

  checkCardsName() {
    if(this.cardNumber.value.length > 0) {
      if(this.cardNumber.value[0] == 3) {
        console.log("American Express");
        this.cardType = true;
        this.cardName = "American Express";
      } else if(this.cardNumber.value[0] == 4) {
        console.log("Visa");
        this.cardType = true;
        this.cardName = "Visa";
      } else if(this.cardNumber.value[0] == 5) {
        console.log("Master Card");
        this.cardType = true;
        this.cardName = "Master Card";
      } else if(this.cardNumber.value[0] == 6) {
        console.log("Discover Card");
        this.cardType = true;
        this.cardName = "Discover Card";
      } else {
        console.log("Invalid Card");
        this.cardType = true;
        this.cardName = "Invalid Card";
      }
    }
  }

}
