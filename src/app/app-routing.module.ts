import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {DevelopersComponent} from "./developers/developers.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path:'developers',component:DevelopersComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports:[ RouterModule]
})
export class AppRoutingModule { }

