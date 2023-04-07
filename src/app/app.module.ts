import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { OddLengthWordsComponent } from './odd-length-words/odd-length-words.component';
import { EvenLengthWordsComponent } from './even-length-words/even-length-words.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    OddLengthWordsComponent,
    EvenLengthWordsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
