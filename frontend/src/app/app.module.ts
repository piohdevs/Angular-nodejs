import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';

import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateComponent } from './components/private/private.component';
import { SigninComponent } from './components/signin/signin.component';

import { AuthGuard } from './auth.guard'
import { TokenInterceptorService } from './services/token-interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    TasksComponent,
    PrivateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
