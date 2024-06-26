import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { MemberListComponent } from './_pages/member-list/member-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MemberCreateComponent } from './_pages/member-create.component';
import { MemberEditComponent } from './_pages/member-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MemberListComponent,
    MemberCreateComponent,
    MemberEditComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
