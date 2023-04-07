import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formInput = '';
  odds: string[] = [];
  evens: string[] = [];

  /* Δεν χρειαζόταν να έχουμε δύο διαφορετικά components για τις λέξεις. */
  /* Θα μπορούσαμε να χρησιμοποιήσουμε ένα και για τις 2 περιπτώσεις. */

  onSubmit() {
    if (this.formInput === '') return;

    if (this.isEven(this.formInput)) this.evens.push(this.formInput);
    else this.odds.push(this.formInput);

    this.formInput = '';
  }

  isEven(word: string) {
    return word.length % 2 == 0;
  }
}
