import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FibinoComponent } from './fibino/fibino.component';
import{FormsModule} from '@angular/forms';
import { WordsWithVovelsFinderComponent } from './words-with-vovels-finder/words-with-vovels-finder.component'

@NgModule({
  declarations: [
    AppComponent,
    FibinoComponent,
    WordsWithVovelsFinderComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
