import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { title } from 'process';
import { LogoutComponent } from './logout.component';
const routes: Routes = [
  {
    path:'',
    component: LogoutComponent,
    data:{
      title:'logout',
    }
    }
  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogoutRoutingModule { }
