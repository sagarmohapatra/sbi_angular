import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../material/material.module';
import {RouterModule, Routes } from '@angular/router';
const routes :Routes =[
  {
    path:'',redirectTo:'login',pathMatch:'full' },
  {path:'login',component:LoginComponent },
  
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
