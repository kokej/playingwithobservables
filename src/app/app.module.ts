import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { MatListModule,
  MatIconModule }        from '@angular/material';


import { AppComponent }  from './app.component';
import { AppService }    from './app.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatListModule,
    MatIconModule
  ],
  exports: [ MatListModule, MatIconModule ],
  providers: [ AppService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
