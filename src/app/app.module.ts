import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { BoardsComponent } from './compnents/boards/boards.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
