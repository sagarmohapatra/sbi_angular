import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren:()=>import('../app/login/login.module').then((m)=>m.LoginModule)

  },
  {
    path:"admin",
    loadChildren:()=>import("../app/admin/admin.module").then((m)=>m.AdminModule)
  },
  {
    path:"logout",
    loadChildren:()=>import("../app/logout/logout.module").then((m)=>m.LogoutModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
