import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { OnOffComponent } from './on-off/on-off.component';
import { UnitTestOneComponent } from './unit-test-one/unit-test-one.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OnOffComponent,
    UnitTestOneComponent,
    ModelDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
