import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { TestDirectiveDirective } from './test-directive.directive';
import { DelayDirectiveDirective } from './delay-directive.directive';
import { RoundOfPipe } from './round-of.pipe';
import { TestPPipe } from './test-p.pipe';
import  { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DirectiveDemoComponent,
    TestDirectiveDirective,
    DelayDirectiveDirective,
    RoundOfPipe,
    TestPPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
