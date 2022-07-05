import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentManagementComponent } from './content-management/content-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserlistComponent } from './user-management/userlist/userlist.component';
import { UseraddComponent } from './user-management/useradd/useradd.component';
import { UsereditComponent } from './user-management/useredit/useredit.component';

const routes :Routes=[
  {path:"dashboard",component:DashboardComponent},
  {path:"content-management",component:ContentManagementComponent},
  {path:"user-management",component:UserlistComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserlistComponent,
    UseraddComponent,
    UsereditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
