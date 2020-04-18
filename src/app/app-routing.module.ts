import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { SuccessComponent } from './success/success.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'basic-info', component: BasicInfoComponent},
  { path: 'upload', component: UploadFileComponent},
  { path: 'success', component: SuccessComponent},
  { path: 'aboutus', component: AboutUsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
