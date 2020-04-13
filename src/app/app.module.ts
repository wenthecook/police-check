import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { DetailComponent } from './detail/detail.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopBarComponent,
    BasicInfoComponent,
    UploadFileComponent,
    DetailComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
