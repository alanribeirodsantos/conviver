import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './templates/main/main.component';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignInUpComponent } from './templates/sign-in-up/sign-in-up.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'meus-anuncios',
        component: MyAdsComponent
      }
    ]
  }, {
    path: 'sign',
    component: SignInUpComponent,
    children: [
      {
        path: '',
        redirectTo: 'in',
        pathMatch: "full"
      }, {
        path: 'in',
        component: LoginComponent
      }, {
        path: 'up',
        component: RegisterComponent
      }
    ]
  }, {
    path: 'styleguide',
    component: StyleguideComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
