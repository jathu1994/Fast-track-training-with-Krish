import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FibinoComponent } from './fibino/fibino.component';
import{FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FibinoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
